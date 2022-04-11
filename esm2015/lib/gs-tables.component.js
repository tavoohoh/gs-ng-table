import * as tslib_1 from "tslib";
import { Component, Input, HostBinding, HostListener, ViewChild, Inject, Output, EventEmitter } from '@angular/core';
import { GTableStyle } from './gs-tables.widgets';
import { GsTablesService } from './gs-tables.service';
import { DomSanitizer } from '@angular/platform-browser';
import { LOCATION } from './gs-tables.constants';
import { GTypeRowEnum } from './gs-tables.enum';
// https://uxdesign.cc/design-better-data-tables-4ecc99d23356
let GsTablesComponent = class GsTablesComponent {
    constructor(sanitizer, tableService, customStyles) {
        this.sanitizer = sanitizer;
        this.tableService = tableService;
        /**
         * Event emitted when an action is clicked
         */
        this.rowActionClick = new EventEmitter();
        /**
         * Event emitted when `navigateNext` button is clicked
         * @deprecated use `navigateTo` event instead
         */
        this.navigateNext = new EventEmitter();
        /**
         * Event emitted when `navigatePrevious button is clicked
         * @deprecated use `navigateTo` event instead
         */
        this.navigatePrevious = new EventEmitter();
        /**
         * Event emitted when any of the pagination buttons are clicked
         */
        this.navigateTo = new EventEmitter();
        /**
         * Event emitted when a row is selected
         */
        this.rowValueChanged = new EventEmitter();
        /**
         * Event emitted when any value of the table is modified by this component
         */
        this.tableDataChanged = new EventEmitter();
        /**
         * Event emitted when a custom footer action is clicked
         */
        this.tableActionClick = new EventEmitter();
        this.tableStyleType = GTableStyle;
        this.customStyles = customStyles;
    }
    ngOnChanges(changes) {
        if (!changes) {
            return;
        }
        if (changes.tableData && changes.tableData.currentValue) {
            this.tableData = changes.tableData.currentValue;
            if (this.tableData.data) {
                this.noTableData = false;
                this.tableDataAdapter();
            }
            else {
                this.noTableData = true;
                this.onInputDataError();
            }
            if (this.tableData.options) {
                if (this.tableData.options.hasAdditionalData) {
                    this.additionalData = true;
                }
                if (this.tableData.options.selectable) {
                    this.selectable = true;
                }
                if (this.tableData.options.tableActions) {
                    this.customFooterActions = this.tableData.options.tableActions;
                }
            }
        }
        if (changes.currentPage || this.currentPage) {
            this.currentPage = changes.currentPage ? changes.currentPage.currentValue : this.currentPage;
        }
        else {
            this.currentPage = null;
        }
        if (changes.totalOfPages || this.totalOfPages) {
            this.totalOfPages = changes.totalOfPages ? changes.totalOfPages.currentValue : this.totalOfPages;
        }
        else {
            this.totalOfPages = null;
        }
        if (this.currentPage && this.totalOfPages) {
            this.setTableFooter();
        }
        else if (this.currentPage || this.totalOfPages) {
            return console.warn('GS Table building warning:' + '\n\n' +
                'If you wish to display current and total of pages please add to your table options `currentPage` and `totalOfPages`');
        }
        setTimeout(() => {
            this.setContentWidth();
        });
    }
    setTableFooter() {
        if (this.currentPage <= 1) {
            this.canNavigatePrevious = false;
        }
        else {
            this.canNavigatePrevious = true;
        }
        if (this.currentPage + 1 > this.totalOfPages) {
            this.canNavigateNext = false;
        }
        else {
            this.canNavigateNext = true;
        }
    }
    tableDataAdapter() {
        this.tableStyle = this.tableData.options.style || GTableStyle.TABLE;
        this.tablesKeyType = this.tableData.keyTypes || null;
        if (this.tablesKeyType) {
            this.formatData();
        }
        this.tableContent = this.tableData.data;
        this.noTableData = this.tableData.data.length > 0 ? false : true;
        this.noContentText = this.tableData.options.noContentText
            ? this.tableData.options.noContentText
            : this.tableService.getTranslate('NO_CONTENT');
        this.tableRowActions = this.tableData.options.rowActions || null;
        this.tableContentKeys = this.tableData.keyNames ? this.tableData.keyNames : this.tableService.objectKeysToArray(this.tableContent);
        if (this.tableStyle === GTableStyle.SINGLE) {
            this.tableContentKeys = [this.tableContentKeys[0], this.tableContentKeys[1]];
        }
        else {
            this.tableHeader = this.tableData.header || this.tableContentKeys;
        }
    }
    formatData() {
        this.tablesKeyType.forEach(type => {
            // tslint:disable-next-line: prefer-for-of
            for (let i = 0; i < this.tableData.data.length; i++) {
                switch (type.type) {
                    case GTypeRowEnum.CURRENCY:
                        this.tableData.data[i][type.key] = this.formatCurrency(this.tableData.data[i][type.key].toString());
                        break;
                    case GTypeRowEnum.PHONE:
                    // TODO create format Phone
                }
            }
        });
    }
    formatCurrency(valueTable) {
        let value = valueTable;
        const location = LOCATION[this.tableData.options.country] || LOCATION[`co`];
        const prefix = location.currencyFormat.symbol;
        const suffix = location.currencyFormat.code;
        const thousandsSeparator = location.currencyFormat.thousands;
        const decimalSeparator = location.currencyFormat.decimal;
        const precision = location.currencyFormat.precision;
        let inputVal = valueTable.toString() || '0';
        // remove any leading zeros
        if (inputVal.substring(0, 1) === '0') {
            inputVal = inputVal.replace(/^[0|\D]*/, '');
        }
        // format decimal if applies
        if (!inputVal || inputVal.length === 1 && inputVal.substring(0, 1) === '0') {
            let emptyDecimals = '0';
            if (precision > 0) {
                for (let index = 0; index < precision; index++) {
                    emptyDecimals = emptyDecimals + '0';
                }
            }
            inputVal = emptyDecimals;
        }
        const cleanValue = inputVal.replace(/\D/g, '');
        let decimals = null;
        let thousands = null;
        // format number as currency
        if (precision > 0) {
            decimals = cleanValue.slice(precision - precision * 2);
            if (decimals.length < precision) {
                for (let index = 0; index < precision - Number(decimals); index++) {
                    decimals = '0' + decimals;
                }
                thousands = '0';
            }
            else {
                thousands = cleanValue.substring(0, cleanValue.length - precision) || '0';
            }
        }
        else {
            thousands = cleanValue;
        }
        const formattedThousands = thousands.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, thousandsSeparator);
        value = `${prefix} ${formattedThousands + (decimals ? decimalSeparator + decimals : '')} ${suffix}`;
        return value;
    }
    get valueAsStyle() {
        let variables = '';
        // Layout
        if (!this.noTableData && this.tableStyle === GTableStyle.TABLE && this.tableHeader.length) {
            let extraColumns = '';
            if (this.selectable) {
                extraColumns = `${extraColumns} 30px`;
            }
            if (this.additionalData) {
                extraColumns = `${extraColumns} 30px`;
            }
            if (this.tableRowActions && !this.tableRowActions.hidden) {
                variables = variables + `--gs-repeat: ${extraColumns} repeat(${this.tableHeader.length}, 1fr) 90px!important;`;
            }
            else {
                variables = variables + `--gs-repeat: ${extraColumns} repeat(${this.tableHeader.length}, 1fr)!important;`;
            }
        }
        // UI
        if (this.customStyles) {
            if (this.customStyles.color) {
                variables = variables + `--gs-font-color: ${this.customStyles.color}!important;`;
            }
            if (this.customStyles.ui.fontSize) {
                variables = variables + `--gs-font-size: ${this.customStyles.ui.fontSize}!important;`;
            }
            if (this.customStyles.color.primary) {
                variables = variables + `--gs-primary-color: ${this.customStyles.color.primary}!important;`;
            }
            if (this.customStyles.color.secondary) {
                variables = variables + `--gs-secondary-color: ${this.customStyles.color.secondary}!important;`;
            }
            if (this.customStyles.color.neutral) {
                variables = variables + `--gs-neutral-color: ${this.customStyles.color.neutral}!important;`;
            }
            if (this.customStyles.color.border) {
                variables = variables + `--gs-border-color: ${this.customStyles.color.border}!important;`;
            }
            if (this.customStyles.color.white) {
                variables = variables + `--gs-white-color: ${this.customStyles.color.white}!important;`;
            }
            if (this.customStyles.ui.padding) {
                variables = variables + `--gs-padding: ${this.customStyles.ui.padding}!important;`;
            }
            if (this.customStyles.ui.primaryButton) {
                if (this.customStyles.ui.primaryButton.padding) {
                    variables = variables + `--gs-button-padding: ${this.customStyles.ui.primaryButton.padding}!important;`;
                }
                if (this.customStyles.ui.primaryButton.color) {
                    variables = variables + `--gs-button-color: ${this.customStyles.ui.primaryButton.color}!important;`;
                }
                if (this.customStyles.ui.primaryButton.background) {
                    variables = variables + `--gs-button-background: ${this.customStyles.ui.primaryButton.background}!important;`;
                }
                if (this.customStyles.ui.primaryButton.borderSize) {
                    variables = variables + `--gs-button-border-size: ${this.customStyles.ui.primaryButton.borderSize}!important;`;
                }
                if (this.customStyles.ui.primaryButton.borderStyle) {
                    variables = variables + `--gs-button-border-style: ${this.customStyles.ui.primaryButton.borderStyle}!important;`;
                }
                if (this.customStyles.ui.primaryButton.borderColor) {
                    variables = variables + `--gs-button-border-color: ${this.customStyles.ui.primaryButton.borderColor}!important;`;
                }
                if (this.customStyles.ui.primaryButton.borderRadius) {
                    variables = variables + `--gs-button-border-radius: ${this.customStyles.ui.primaryButton.borderRadius}!important;`;
                }
                if (this.customStyles.ui.primaryButton.borderTop) {
                    variables = variables + `--gs-button-border-top: ${this.customStyles.ui.primaryButton.borderTop}!important;`;
                }
                if (this.customStyles.ui.primaryButton.borderRight) {
                    variables = variables + `--gs-button-border-right: ${this.customStyles.ui.primaryButton.borderRight}!important;`;
                }
                if (this.customStyles.ui.primaryButton.borderBottom) {
                    variables = variables + `--gs-button-border-bottom: ${this.customStyles.ui.primaryButton.borderBottom}!important;`;
                }
                if (this.customStyles.ui.primaryButton.borderLeft) {
                    variables = variables + `--gs-button-border-left: ${this.customStyles.ui.primaryButton.borderLeft}!important;`;
                }
            }
        }
        return this.sanitizer.bypassSecurityTrustStyle(variables);
    }
    onResize(event) {
        this.setContentWidth();
    }
    setContentWidth() {
        if (!this.noTableData && this.tableStyle === GTableStyle.TABLE) {
            this.tableContentPadding =
                this.tableHeaderElement.nativeElement.offsetWidth - this.tableContentElement.nativeElement.offsetWidth;
        }
    }
    hdlRowAction(action) {
        this.rowActionClick.emit(action);
        this.selectedAdditionalData = null;
    }
    /**
     * Navigate next or previous based on
     * @param next if true navigate next, else previous
     *
     * @deprecated use `onNavigateTo` instead
     */
    onNavigate(next) {
        if (next) {
            // tslint:disable-next-line: deprecation
            this.navigateNext.emit();
            this.navigateTo.emit(this.currentPage + 1);
        }
        else {
            // tslint:disable-next-line: deprecation
            this.navigatePrevious.emit();
            this.navigateTo.emit(this.currentPage - 1);
        }
        this.selectedAdditionalData = null;
    }
    /**
     * Navigate to specific page
     * @param page number of page
     *
     * returns the next page value
     */
    onNavigateTo(page) {
        this.navigateTo.emit(page);
        this.selectedAdditionalData = null;
    }
    onInputDataError() {
        return console.error('GS Table building err: Please provide tableData:' + '\n\n' +
            '1. In your template make sure you have:' + '\n\n' +
            '\xa0' + '<gs-table [tableData]="tableData"></gs-table>' + '\n\n' +
            '2. In your component declare `tableData`:' + '\n\n' +
            '\xa0public tableData = {' + '\n' +
            '\xa0\xa0\xa0' + 'data: Array<object>;' + '\n' +
            '\xa0\xa0\xa0' + 'header?: Array<string>;' + '\n' +
            '\xa0\xa0\xa0' + 'options?: {' + '\n' +
            '\xa0\xa0\xa0\xa0\xa0' + 'style?: GTableStyle;' + '\n' +
            '\xa0\xa0\xa0\xa0\xa0' + 'rowActions?: GTableRowAction;' + '\n' +
            '\xa0\xa0\xa0' + '}' + '\n' +
            '\xa0}');
    }
    toggleAdditionalData(selectedAdditionalData, $event) {
        if (!this.additionalData || ($event && ($event.target.id === 'rowActionButton' ||
            $event.target.id === 'gsbtnany'))) {
            return;
        }
        this.selectedAdditionalData = this.selectedAdditionalData === selectedAdditionalData ? null : selectedAdditionalData;
    }
    /**
     * Selectable methods
     */
    onRowValueChanged(newRowValue) {
        this.tableContent[newRowValue.index || 0].selectable = newRowValue.value;
        this.rowValueChanged.emit(newRowValue);
        this.tableDataChanged.emit(this.tableContent);
    }
    toggleSelectableSelection(newRowValue) {
        this.selectableAllSelected = newRowValue.value;
        // tslint:disable-next-line
        for (let i = 0; i < this.tableContent.length; i++) {
            this.tableContent[i].selectable = this.selectableAllSelected;
        }
        this.tableDataChanged.emit(this.tableContent);
    }
    /**
     * Footer actions
     */
    onFooterActionClicked(action) {
        this.tableActionClick.emit(action);
    }
};
GsTablesComponent.ctorParameters = () => [
    { type: DomSanitizer },
    { type: GsTablesService },
    { type: undefined, decorators: [{ type: Inject, args: ['customStyles',] }] }
];
tslib_1.__decorate([
    Input()
], GsTablesComponent.prototype, "tableData", void 0);
tslib_1.__decorate([
    Input()
], GsTablesComponent.prototype, "currentPage", void 0);
tslib_1.__decorate([
    Input()
], GsTablesComponent.prototype, "totalOfPages", void 0);
tslib_1.__decorate([
    Output()
], GsTablesComponent.prototype, "rowActionClick", void 0);
tslib_1.__decorate([
    Output()
], GsTablesComponent.prototype, "navigateNext", void 0);
tslib_1.__decorate([
    Output()
], GsTablesComponent.prototype, "navigatePrevious", void 0);
tslib_1.__decorate([
    Output()
], GsTablesComponent.prototype, "navigateTo", void 0);
tslib_1.__decorate([
    Output()
], GsTablesComponent.prototype, "rowValueChanged", void 0);
tslib_1.__decorate([
    Output()
], GsTablesComponent.prototype, "tableDataChanged", void 0);
tslib_1.__decorate([
    Output()
], GsTablesComponent.prototype, "tableActionClick", void 0);
tslib_1.__decorate([
    ViewChild('tableContentElement', { static: false })
], GsTablesComponent.prototype, "tableContentElement", void 0);
tslib_1.__decorate([
    ViewChild('tableHeaderElement', { static: false })
], GsTablesComponent.prototype, "tableHeaderElement", void 0);
tslib_1.__decorate([
    HostBinding('attr.style')
], GsTablesComponent.prototype, "valueAsStyle", null);
tslib_1.__decorate([
    HostListener('window:resize', ['$event'])
], GsTablesComponent.prototype, "onResize", null);
GsTablesComponent = tslib_1.__decorate([
    Component({
        selector: 'gs-table',
        template: "<!-- https://material.angular.io/components/table/overview -->\n\n<ng-container>\n  <!-- GTableStyle: TABLE -->\n  <ng-container *ngIf=\"!noTableData; else noTableContent\">\n    <div class=\"gs-table\" *ngIf=\"tableStyle === tableStyleType.TABLE\">\n      <!-- header -->\n      <div class=\"gs-table-header\" [style.padding-right.px]=\"tableContentPadding\" #tableHeaderElement>\n       \n        <!-- checkbox placeholder -->\n        <span *ngIf=\"selectable\">\n          <gs-checkbox\n            class=\"checkbox-aligned\"\n            (valueChanged)=\"toggleSelectableSelection($event)\"\n            [value]=\"selectableAllSelected\">\n          </gs-checkbox>\n        </span>\n\n        <!-- additional data expandable placeholder -->\n        <span *ngIf=\"additionalData\"></span>\n\n        <!-- header keys -->\n        <ng-container *ngFor=\"let title of tableHeader\">\n          <span class=\"gs-table-header-row\">{{ title | translate }}</span>\n        </ng-container>\n\n        <!-- actions -->\n        <ng-container *ngIf=\"tableRowActions && !tableRowActions.hidden\">\n          <span class=\"gs-table-header-row\">{{ tableRowActions.text | translate }}</span>\n        </ng-container>\n      </div>\n      \n      <!-- content -->\n      <ng-container #tableContentElement *ngIf=\"tableContent && tableContentKeys\">\n        <ng-container *ngFor=\"let row of tableContent; let i = index\">\n\n          <div class=\"gs-table-row\" [class.selected-row]=\"selectedAdditionalData === i\" [class.cursor-pointer]=\"additionalData\" (click)=\"toggleAdditionalData(i, $event)\">\n            <!-- checkboxes -->\n            <ng-container *ngIf=\"selectable\">\n              <gs-checkbox\n                class=\"checkbox-aligned\"\n                (valueChanged)=\"onRowValueChanged($event)\"\n                [value]=\"row['selectable']\"\n                [rowIndex]=\"i\">\n              </gs-checkbox>\n            </ng-container>\n            \n            <!-- additional data expandable button -->\n            <ng-container *ngIf=\"additionalData\">\n              <button \n                *ngIf=\"row['additionalData']\"\n                class=\"additional-data-toggle\">\n                <svg [class.addiitonal-data-selected]=\"i === selectedAdditionalData\"  xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" >\n                  <path d=\"M13 8h-8v-1h8v1zm0 2h-8v-1h8v1zm-3 2h-5v-1h5v1zm11.172 12l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z\"/>\n                </svg>\n              </button>\n              <span *ngIf=\"!row['additionalData']\"></span>\n            </ng-container>\n\n            <!-- content -->\n            <ng-container *ngFor=\"let key of tableContentKeys\">\n              <span class=\"gs-table-row_text\" *ngIf=\"row[key]\">\n                <!-- custom template reference -->\n                <ng-container *ngIf=\"row[key]['template']; else simpleValue\">\n                  <ng-container *ngTemplateOutlet=\"row[key]['template']; context:row[key]\"></ng-container>\n                </ng-container>\n\n                <!-- default value rendering -->\n                <ng-template #simpleValue>\n                  {{ row[key] | translate }}\n                </ng-template>\n              </span>\n            </ng-container>\n\n            <!-- actions -->\n            <ng-container *ngIf=\"tableRowActions && !tableRowActions.hidden\">\n              <gs-table-row-actions\n                [rowAction]=\"tableRowActions\"\n                [rowData]=\"row\"\n                (rowActionEvent)=\"hdlRowAction($event)\">\n              </gs-table-row-actions>\n            </ng-container>\n          </div>\n\n          <div class=\"gs-table-row additional-data-row selected-row\" *ngIf=\"additionalData && row['additionalData'] && selectedAdditionalData === i\">\n            <gs-table-additional-data [additionalData]=\"row['additionalData']\">\n            </gs-table-additional-data>\n          </div>\n        </ng-container>\n      </ng-container>\n\n      <!-- footer -->\n      <ng-container *ngTemplateOutlet=\"footer\"></ng-container>\n    </div>\n  </ng-container>\n\n  <!-- GTableStyle: SINGLE -->\n  <div class=\"gs-table-single\" *ngIf=\"tableStyle === tableStyleType.SINGLE\">\n    <!-- content -->\n    <div class=\"gs-table-content\" *ngIf=\"tableContent && tableContentKeys\">\n      <div class=\"gs-table-row\" *ngFor=\"let row of tableContent\">\n        <ng-container *ngFor=\"let key of tableContentKeys\">\n          <span class=\"gs-table-row_text\">{{ row[key] }}</span>\n        </ng-container>\n        <ng-container *ngIf=\"tableRowActions && tableRowActions.actions.length !== 0 && !tableRowActions.hidden\">\n          <gs-table-row-actions\n            [rowAction]=\"tableRowActions\"\n            [rowData]=\"row\"\n            (rowActionEvent)=\"hdlRowAction($event)\">\n          </gs-table-row-actions>\n        </ng-container>\n      </div>\n    </div>\n\n    <!-- footer -->\n    <ng-container *ngTemplateOutlet=\"footer\"></ng-container>\n  </div>\n</ng-container>\n\n<ng-template #footer>\n  <div class=\"gs-table-footer\" *ngIf=\"currentPage && totalOfPages\">\n    <div class=\"gs-table-actions\">\n      <!-- element count -->\n      <span class=\"gs-table-navigation_count\">\n        {{ currentPage }} - {{ totalOfPages }}\n      </span>\n\n      <!-- navigate to first page -->\n      <button\n        type=\"button\"\n        class=\"gs-table-navigation-btn rotate180\"\n        [class.disabled]=\"currentPage === 1\"\n        (click)=\"onNavigateTo(1)\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n          <path d=\"M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205zm18.04 8.205l-8.167 8.205 2.995 2.98 11.132-11.185-11.132-11.186-2.995 2.98 8.167 8.206z\"/>\n        </svg>\n      </button>\n\n      <!-- navigate to next page -->\n      <button\n        type=\"button\"\n        class=\"gs-table-navigation-btn\"\n        [class.disabled]=\"!canNavigatePrevious\"\n        (click)=\"onNavigate(false)\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n          <path d=\"M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z\"/>\n        </svg>\n      </button>\n\n      <!-- navigate to previous page -->\n      <button\n        type=\"button\"\n        class=\"gs-table-navigation-btn\"\n        [class.disabled]=\"!canNavigateNext\"\n        (click)=\"onNavigate(true)\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n          <path d=\"M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z\"/>\n        </svg>\n      </button>\n\n      <!-- navigate to last page -->\n      <button\n        type=\"button\"\n        class=\"gs-table-navigation-btn\"\n        [class.disabled]=\"currentPage === totalOfPages\"\n        (click)=\"onNavigateTo(totalOfPages)\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n          <path d=\"M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205zm18.04 8.205l-8.167 8.205 2.995 2.98 11.132-11.185-11.132-11.186-2.995 2.98 8.167 8.206z\"/>\n        </svg>\n      </button>\n    </div>\n\n    <div class=\"gs-table-custom-actions\" *ngIf=\"customFooterActions\">\n      <button \n        *ngFor=\"let action of customFooterActions\"\n        class=\"gs-table-custom-action-btn\"\n        [class.disabled]=\"action.disabled\"\n        type=\"button\"\n        (click)=\"onFooterActionClicked(action)\">\n        {{ action.label | translate }}\n      </button>\n    </div>\n  </div>\n</ng-template>\n\n<ng-template #noTableContent>\n  <div class=\"no-data\">\n    <span class=\"header\">\n      <span></span>\n      <span></span>\n      <span></span>\n      <span></span>\n    </span>\n    <span class=\"body\">\n      {{ noContentText | translate }}\n    </span>\n    <span class=\"footer\">\n      <span></span>\n      <span></span>\n      <div></div>\n    </span>\n  </div>\n</ng-template>",
        styles: ["*{font-family:Arial,Helvetica,sans-serif;color:var(--gs-font-color,inherit);font-size:var(--gs-font-size,.9rem);outline:0;box-sizing:border-box;line-height:1.4}.disabled{opacity:.5;cursor:default;pointer-events:none}.button{-webkit-transition:.2s ease-in-out;transition:.2s ease-in-out;cursor:pointer;border:none;text-align:center;font-weight:700;outline:0;padding:var(--gs-button-padding,.5rem);color:var(--gs-button-color,#fff);background-color:var(--gs-button-background,#f33959);border:1px solid var(--gs-button-border-color,#f33959);border-radius:var(--gs-button-border-radius,6px)}.button:hover{opacity:.8}:host ::ng-deep .gs-table-row:last-child gs-table-row-actions div.action div.options.dropdown,:host ::ng-deep .gs-table-row:nth-last-child(2) gs-table-row-actions div.action div.options.dropdown,:host ::ng-deep .gs-table-row:nth-last-child(3) gs-table-row-actions div.action div.options.dropdown{top:-30px}input::-moz-focus-inner{border:0!important}a,a:active,a:focus,a:hover,button,button:active,button:focus,button:hover{outline:0!important}.gs-table{border:1px solid var(--gs-border-color,#eee);background-color:var(--gs-white-color,#fff)}.gs-table .gs-table-header span{text-align:left;color:var(--gs-font-color,inherit);fill:var(--gs-font-color,inherit);font-weight:700;font-size:80%;opacity:.6}.gs-table .gs-table-header,.gs-table .gs-table-row{display:grid;grid-template-columns:var(--gs-repeat,repeat(auto-fit,minmax(180px,1fr)))}.gs-table .gs-table-footer,.gs-table .gs-table-header,.gs-table .gs-table-row{height:50px;padding-left:1rem;padding-right:1rem;border-bottom:1px solid var(--gs-border-color,#eee)}.gs-table .gs-table-footer *,.gs-table .gs-table-header *,.gs-table .gs-table-row *{align-self:center}.gs-table .gs-table-footer{border-bottom:none;display:grid;gap:.5rem;grid-template-columns:auto 1fr}.gs-table .gs-table-footer .gs-table-actions{display:grid;gap:.5rem;grid-template-columns:auto repeat(4,1rem) 1fr}.gs-table .gs-table-footer .gs-table-actions .gs-table-action-btn,.gs-table .gs-table-footer .gs-table-actions .gs-table-navigation-btn,.gs-table .gs-table-footer .gs-table-actions .gs-table-navigation_count{align-self:center}.gs-table .gs-table-footer .gs-table-actions .gs-table-navigation_count{padding-right:1rem}.gs-table .gs-table-footer .gs-table-actions .gs-table-action-btn,.gs-table .gs-table-footer .gs-table-actions .gs-table-navigation-btn{outline:0;background:0 0;padding:0;margin:0;border:none;cursor:pointer}.gs-table .gs-table-footer .gs-table-actions .gs-table-navigation-btn svg{width:12px}.gs-table .gs-table-footer .gs-table-actions .gs-table-action-btn svg{width:20px}.gs-table .gs-table-footer .gs-table-actions .rotate180{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}.gs-table .gs-table-footer .gs-table-custom-actions{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;margin-left:auto}.gs-table .gs-table-footer .gs-table-custom-actions .gs-table-custom-action-btn{-webkit-transition:.2s ease-in-out;transition:.2s ease-in-out;align-self:center;margin:0 0 0 .5rem;padding:.5rem;font-size:.8rem;color:var(--gs-button-background,#f33959);background:0 0;border-radius:0;border:1px solid var(--gs-button-background,#f33959);cursor:pointer;line-height:1}.gs-table .gs-table-footer .gs-table-custom-actions .gs-table-custom-action-btn:hover{color:var(--gs-button-color,#fff);background:var(--gs-button-background,#f33959)}.gs-table .gs-table-footer span{color:var(--gs-font-color,inherit);fill:var(--gs-font-color,inherit);font-weight:700;font-size:80%;opacity:.6}.gs-table .gs-table-row .gs-table-row_text{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.gs-table .gs-table-row .gs-table-row_text:hover{line-height:1.5em;max-height:3em;white-space:initial;word-break:break-all}.no-data{display:grid;grid-template-rows:100px}.no-data .footer,.no-data .header{gap:1rem;align-self:center;display:none}.no-data .footer span,.no-data .header span{height:12px;background-color:#eee;border-radius:14px}.no-data .header{grid-template-columns:repeat(4,1fr)}.no-data .footer{grid-template-columns:repeat(2,30px) 1fr}.no-data .body{align-self:center;text-align:center;font-weight:700}.additional-data-toggle{display:block;align-self:center;background:0 0;cursor:pointer;outline:0;border:none;padding:0;margin-right:auto;line-height:.9}.additional-data-toggle svg{width:16px;opacity:.6;-webkit-transition:.2s ease-in-out;transition:.2s ease-in-out}.additional-data-toggle svg.addiitonal-data-selected{fill:var(--gs-button-background,#f33959);opacity:1}.additional-data-row{display:block!important;grid-template-columns:unset!important;height:auto!important}.selected-row{background-color:var(--gs-border-color,#eee)}.cursor-pointer{cursor:pointer}.checkbox-aligned{align-self:center;display:block;height:16px}"]
    }),
    tslib_1.__param(2, Inject('customStyles'))
], GsTablesComponent);
export { GsTablesComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3MtdGFibGVzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0ByYXBwaXBheS9ncy10YWJsZXMvIiwic291cmNlcyI6WyJsaWIvZ3MtdGFibGVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsV0FBVyxFQUNYLFlBQVksRUFDWixTQUFTLEVBRVQsTUFBTSxFQUNOLE1BQU0sRUFDTixZQUFZLEVBR2IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF5QyxXQUFXLEVBQVcsTUFBTSxxQkFBcUIsQ0FBQztBQUNsRyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVqRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFaEQsNkRBQTZEO0FBTzdELElBQWEsaUJBQWlCLEdBQTlCLE1BQWEsaUJBQWlCO0lBMEU1QixZQUNVLFNBQXVCLEVBQ3ZCLFlBQTZCLEVBQ2IsWUFBWTtRQUY1QixjQUFTLEdBQVQsU0FBUyxDQUFjO1FBQ3ZCLGlCQUFZLEdBQVosWUFBWSxDQUFpQjtRQTFEdkM7O1dBRUc7UUFDZSxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFnQixDQUFDO1FBQ3BFOzs7V0FHRztRQUNlLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUMxRDs7O1dBR0c7UUFDZSxxQkFBZ0IsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBQzlEOztXQUVHO1FBQ2UsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDMUQ7O1dBRUc7UUFDZSxvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFvQixDQUFDO1FBQ3pFOztXQUVHO1FBQ2UscUJBQWdCLEdBQUcsSUFBSSxZ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R0Q7SUFEQyxZQUFZLENBQUMsZUFBZSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7aURBR3pDO0FBdlZVLGlCQUFpQjtJQUw3QixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsVUFBVTtRQUNwQiwwclFBQXlDOztLQUUxQyxDQUFDO0lBOEVHLG1CQUFBLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQTtHQTdFZCxpQkFBaUIsQ0F1YjdCO1NBdmJZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIEhvc3RCaW5kaW5nLFxuICBIb3N0TGlzdGVuZXIsXG4gIFZpZXdDaGlsZCxcbiAgRWxlbWVudFJlZixcbiAgSW5qZWN0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgT25DaGFuZ2VzLFxuICBTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgR1RhYmxlLCBHVGFibGVSb3dBY3Rpb24sIEdUYWJsZUFjdGlvbiwgR1RhYmxlU3R5bGUsIEdTdHlsZXMgfSBmcm9tICcuL2dzLXRhYmxlcy53aWRnZXRzJztcbmltcG9ydCB7IEdzVGFibGVzU2VydmljZSB9IGZyb20gJy4vZ3MtdGFibGVzLnNlcnZpY2UnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBMT0NBVElPTiB9IGZyb20gJy4vZ3MtdGFibGVzLmNvbnN0YW50cyc7XG5pbXBvcnQgeyBHS2V5VHlwZSwgR0N1c3RvbVRlbXBsYXRlLCBHU2VsZWN0YWJsZVZhbHVlLCBHVGFibGVEYXRhVmFsdWUsIEdUYWJsZUZvb3RlckFjdGlvbiB9IGZyb20gJy4vZ3MtdGFibGVzLm1vZGVscyc7XG5pbXBvcnQgeyBHVHlwZVJvd0VudW0gfSBmcm9tICcuL2dzLXRhYmxlcy5lbnVtJztcblxuLy8gaHR0cHM6Ly91eGRlc2lnbi5jYy9kZXNpZ24tYmV0dGVyLWRhdGEtdGFibGVzLTRlY2M5OWQyMzM1NlxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdncy10YWJsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9ncy10YWJsZXMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9ncy10YWJsZXMuY29tcG9uZW50LnNhc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBHc1RhYmxlc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIC8qKlxuICAgKiBUYWJsZSBkYXRhXG4gICAqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBBbiBgR1RhYmxlYCBvYmplY3Qgd2l0aCB0YWJsZSBjb25maWd1cmF0aW9uXG4gICAqL1xuICBASW5wdXQoKSBwcml2YXRlIHRhYmxlRGF0YTogR1RhYmxlO1xuICAvKipcbiAgICogQ3VycmVudCBwYWdlIGJlaW5nIGRpc3BsYXllZFxuICAgKiBUaGlzIHZhbHVlIGlzIHJlcXVpcmVkIHRvIGRpc3BsYXkgcGFnaW5hdGlvblxuICAgKi9cbiAgQElucHV0KCkgcHVibGljIGN1cnJlbnRQYWdlOiBudW1iZXI7XG4gIC8qKlxuICAgKiBUb3RhbCBvZiBwYWdlc1xuICAgKiBUaGlzIHZhbHVlIGlzIHJlcXVpcmVkIHRvIGRpc3BsYXkgcGFnaW5hdGlvblxuICAgKi9cbiAgQElucHV0KCkgcHVibGljIHRvdGFsT2ZQYWdlczogbnVtYmVyO1xuICAvKipcbiAgICogRXZlbnQgZW1pdHRlZCB3aGVuIGFuIGFjdGlvbiBpcyBjbGlja2VkXG4gICAqL1xuICBAT3V0cHV0KCkgcHJpdmF0ZSByb3dBY3Rpb25DbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8R1RhYmxlQWN0aW9uPigpO1xuICAvKipcbiAgICogRXZlbnQgZW1pdHRlZCB3aGVuIGBuYXZpZ2F0ZU5leHRgIGJ1dHRvbiBpcyBjbGlja2VkXG4gICAqIEBkZXByZWNhdGVkIHVzZSBgbmF2aWdhdGVUb2AgZXZlbnQgaW5zdGVhZFxuICAgKi9cbiAgQE91dHB1dCgpIHByaXZhdGUgbmF2aWdhdGVOZXh0ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICAvKipcbiAgICogRXZlbnQgZW1pdHRlZCB3aGVuIGBuYXZpZ2F0ZVByZXZpb3VzIGJ1dHRvbiBpcyBjbGlja2VkXG4gICAqIEBkZXByZWNhdGVkIHVzZSBgbmF2aWdhdGVUb2AgZXZlbnQgaW5zdGVhZFxuICAgKi9cbiAgQE91dHB1dCgpIHByaXZhdGUgbmF2aWdhdGVQcmV2aW91cyA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgLyoqXG4gICAqIEV2ZW50IGVtaXR0ZWQgd2hlbiBhbnkgb2YgdGhlIHBhZ2luYXRpb24gYnV0dG9ucyBhcmUgY2xpY2tlZFxuICAgKi9cbiAgQE91dHB1dCgpIHByaXZhdGUgbmF2aWdhdGVUbyA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuICAvKipcbiAgICogRXZlbnQgZW1pdHRlZCB3aGVuIGEgcm93IGlzIHNlbGVjdGVkXG4gICAqL1xuICBAT3V0cHV0KCkgcHJpdmF0ZSByb3dWYWx1ZUNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPEdTZWxlY3RhYmxlVmFsdWU+KCk7XG4gIC8qKlxuICAgKiBFdmVudCBlbWl0dGVkIHdoZW4gYW55IHZhbHVlIG9mIHRoZSB0YWJsZSBpcyBtb2RpZmllZCBieSB0aGlzIGNvbXBvbmVudFxuICAgKi9cbiAgQE91dHB1dCgpIHByaXZhdGUgdGFibGVEYXRhQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8QXJyYXk8R1RhYmxlRGF0YVZhbHVlPj4oKTtcbiAgLyoqXG4gICAqIEV2ZW50IGVtaXR0ZWQgd2hlbiBhIGN1c3RvbSBmb290ZXIgYWN0aW9uIGlzIGNsaWNrZWRcbiAgICovXG4gIEBPdXRwdXQoKSBwcml2YXRlIHRhYmxlQWN0aW9uQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPEdUYWJsZUZvb3RlckFjdGlvbj4oKTtcblxuICBAVmlld0NoaWxkKCd0YWJsZUNvbnRlbnRFbGVtZW50JywgeyBzdGF0aWM6IGZhbHNlIH0pIHByaXZhdGUgdGFibGVDb250ZW50RWxlbWVudDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgndGFibGVIZWFkZXJFbGVtZW50JywgeyBzdGF0aWM6IGZhbHNlIH0pIHByaXZhdGUgdGFibGVIZWFkZXJFbGVtZW50OiBFbGVtZW50UmVmO1xuXG4gIHB1YmxpYyB0YWJsZUhlYWRlcjogQXJyYXk8c3RyaW5nPjtcbiAgcHVibGljIHRhYmxlQ29udGVudEtleXM6IEFycmF5PHN0cmluZz47XG4gIHB1YmxpYyB0YWJsZUNvbnRlbnQ6IEFycmF5PEdUYWJsZURhdGFWYWx1ZT47XG4gIHB1YmxpYyBhZGRpdGlvbmFsRGF0YTogYm9vbGVhbjtcbiAgcHVibGljIHNlbGVjdGFibGU6IGJvb2xlYW47XG4gIHB1YmxpYyBzZWxlY3RhYmxlQWxsU2VsZWN0ZWQ6IGJvb2xlYW47XG4gIHB1YmxpYyBzZWxlY3RlZEFkZGl0aW9uYWxEYXRhOiBudW1iZXI7XG4gIHB1YmxpYyBjdXN0b21Gb290ZXJBY3Rpb25zOiBBcnJheTxHVGFibGVGb290ZXJBY3Rpb24+O1xuICBwdWJsaWMgdGFibGVDb250ZW50UGFkZGluZzogbnVtYmVyO1xuICBwdWJsaWMgdGFibGVSb3dBY3Rpb25zOiBHVGFibGVSb3dBY3Rpb247XG4gIHB1YmxpYyB0YWJsZVN0eWxlOiBHVGFibGVTdHlsZTtcbiAgcHVibGljIHRhYmxlc0tleVR5cGU6IEFycmF5PEdLZXlUeXBlPjtcbiAgcHVibGljIHRhYmxlQ3VzdG9tVGVtcGxhdGVzOiBBcnJheTxHQ3VzdG9tVGVtcGxhdGU+O1xuICBwcml2YXRlIGN1c3RvbVN0eWxlczogR1N0eWxlcztcblxuICBwdWJsaWMgbm9UYWJsZURhdGE6IGJvb2xlYW47XG4gIHB1YmxpYyBub0NvbnRlbnRUZXh0OiBzdHJpbmc7XG4gIHB1YmxpYyB0YWJsZVN0eWxlVHlwZSA9IEdUYWJsZVN0eWxlO1xuXG4gIHB1YmxpYyBjYW5OYXZpZ2F0ZU5leHQ6IGJvb2xlYW47XG4gIHB1YmxpYyBjYW5OYXZpZ2F0ZVByZXZpb3VzOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIsXG4gICAgcHJpdmF0ZSB0YWJsZVNlcnZpY2U6IEdzVGFibGVzU2VydmljZSxcbiAgICBASW5qZWN0KCdjdXN0b21TdHlsZXMnKSBjdXN0b21TdHlsZXNcbiAgKSB7XG4gICAgdGhpcy5jdXN0b21TdHlsZXMgPSBjdXN0b21TdHlsZXM7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKCFjaGFuZ2VzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZXMudGFibGVEYXRhICYmIGNoYW5nZXMudGFibGVEYXRhLmN1cnJlbnRWYWx1ZSkge1xuICAgICAgdGhpcy50YWJsZURhdGEgPSBjaGFuZ2VzLnRhYmxlRGF0YS5jdXJyZW50VmFsdWU7XG5cbiAgICAgIGlmICh0aGlzLnRhYmxlRGF0YS5kYXRhKSB7XG4gICAgICAgIHRoaXMubm9UYWJsZURhdGEgPSBmYWxzZTtcbiAgICAgICAgdGhpcy50YWJsZURhdGFBZGFwdGVyKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm5vVGFibGVEYXRhID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vbklucHV0RGF0YUVycm9yKCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnRhYmxlRGF0YS5vcHRpb25zKSB7XG4gICAgICAgIGlmICh0aGlzLnRhYmxlRGF0YS5vcHRpb25zLmhhc0FkZGl0aW9uYWxEYXRhKSB7XG4gICAgICAgICAgdGhpcy5hZGRpdGlvbmFsRGF0YSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy50YWJsZURhdGEub3B0aW9ucy5zZWxlY3RhYmxlKSB7XG4gICAgICAgICAgdGhpcy5zZWxlY3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnRhYmxlRGF0YS5vcHRpb25zLnRhYmxlQWN0aW9ucykge1xuICAgICAgICAgIHRoaXMuY3VzdG9tRm9vdGVyQWN0aW9ucyA9IHRoaXMudGFibGVEYXRhLm9wdGlvbnMudGFibGVBY3Rpb25zO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZXMuY3VycmVudFBhZ2UgfHwgdGhpcy5jdXJyZW50UGFnZSkge1xuICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IGNoYW5nZXMuY3VycmVudFBhZ2UgPyBjaGFuZ2VzLmN1cnJlbnRQYWdlLmN1cnJlbnRWYWx1ZSA6IHRoaXMuY3VycmVudFBhZ2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSBudWxsO1xuICAgIH1cblxuICAgIGlmIChjaGFuZ2VzLnRvdGFsT2ZQYWdlcyB8fCB0aGlzLnRvdGFsT2ZQYWdlcykge1xuICAgICAgdGhpcy50b3RhbE9mUGFnZXMgPSBjaGFuZ2VzLnRvdGFsT2ZQYWdlcyA/IGNoYW5nZXMudG90YWxPZlBhZ2VzLmN1cnJlbnRWYWx1ZSA6IHRoaXMudG90YWxPZlBhZ2VzO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRvdGFsT2ZQYWdlcyA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY3VycmVudFBhZ2UgJiYgdGhpcy50b3RhbE9mUGFnZXMpIHtcbiAgICAgIHRoaXMuc2V0VGFibGVGb290ZXIoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY3VycmVudFBhZ2UgfHwgdGhpcy50b3RhbE9mUGFnZXMpIHtcbiAgICAgIHJldHVybiBjb25zb2xlLndhcm4oXG4gICAgICAgICdHUyBUYWJsZSBidWlsZGluZyB3YXJuaW5nOicgKyAnXFxuXFxuJyArXG4gICAgICAgICdJZiB5b3Ugd2lzaCB0byBkaXNwbGF5IGN1cnJlbnQgYW5kIHRvdGFsIG9mIHBhZ2VzIHBsZWFzZSBhZGQgdG8geW91ciB0YWJsZSBvcHRpb25zIGBjdXJyZW50UGFnZWAgYW5kIGB0b3RhbE9mUGFnZXNgJ1xuICAgICAgKTtcbiAgICB9XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuc2V0Q29udGVudFdpZHRoKCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHNldFRhYmxlRm9vdGVyKCkge1xuICAgIGlmICh0aGlzLmN1cnJlbnRQYWdlIDw9IDEpIHtcbiAgICAgIHRoaXMuY2FuTmF2aWdhdGVQcmV2aW91cyA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNhbk5hdmlnYXRlUHJldmlvdXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmN1cnJlbnRQYWdlICsgMSA+IHRoaXMudG90YWxPZlBhZ2VzKSB7XG4gICAgICB0aGlzLmNhbk5hdmlnYXRlTmV4dCA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNhbk5hdmlnYXRlTmV4dCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB0YWJsZURhdGFBZGFwdGVyKCkge1xuICAgIHRoaXMudGFibGVTdHlsZSA9IHRoaXMudGFibGVEYXRhLm9wdGlvbnMuc3R5bGUgfHwgR1RhYmxlU3R5bGUuVEFCTEU7XG4gICAgdGhpcy50YWJsZXNLZXlUeXBlID0gdGhpcy50YWJsZURhdGEua2V5VHlwZXMgfHwgbnVsbDtcblxuICAgIGlmICh0aGlzLnRhYmxlc0tleVR5cGUpIHtcbiAgICAgIHRoaXMuZm9ybWF0RGF0YSgpO1xuICAgIH1cblxuICAgIHRoaXMudGFibGVDb250ZW50ID0gdGhpcy50YWJsZURhdGEuZGF0YTtcbiAgICB0aGlzLm5vVGFibGVEYXRhID0gdGhpcy50YWJsZURhdGEuZGF0YS5sZW5ndGggPiAwID8gZmFsc2UgOiB0cnVlO1xuICAgIHRoaXMubm9Db250ZW50VGV4dCA9IHRoaXMudGFibGVEYXRhLm9wdGlvbnMubm9Db250ZW50VGV4dFxuICAgICAgPyB0aGlzLnRhYmxlRGF0YS5vcHRpb25zLm5vQ29udGVudFRleHRcbiAgICAgIDogdGhpcy50YWJsZVNlcnZpY2UuZ2V0VHJhbnNsYXRlKCdOT19DT05URU5UJyk7XG4gICAgdGhpcy50YWJsZVJvd0FjdGlvbnMgPSB0aGlzLnRhYmxlRGF0YS5vcHRpb25zLnJvd0FjdGlvbnMgfHwgbnVsbDtcbiAgICB0aGlzLnRhYmxlQ29udGVudEtleXMgPSB0aGlzLnRhYmxlRGF0YS5rZXlOYW1lcyA/IHRoaXMudGFibGVEYXRhLmtleU5hbWVzIDogdGhpcy50YWJsZVNlcnZpY2Uub2JqZWN0S2V5c1RvQXJyYXkodGhpcy50YWJsZUNvbnRlbnQpO1xuXG4gICAgaWYgKHRoaXMudGFibGVTdHlsZSA9PT0gR1RhYmxlU3R5bGUuU0lOR0xFKSB7XG4gICAgICB0aGlzLnRhYmxlQ29udGVudEtleXMgPSBbdGhpcy50YWJsZUNvbnRlbnRLZXlzWzBdLCB0aGlzLnRhYmxlQ29udGVudEtleXNbMV1dO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRhYmxlSGVhZGVyID0gdGhpcy50YWJsZURhdGEuaGVhZGVyIHx8IHRoaXMudGFibGVDb250ZW50S2V5cztcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGZvcm1hdERhdGEoKSB7XG4gICAgdGhpcy50YWJsZXNLZXlUeXBlLmZvckVhY2godHlwZSA9PiB7XG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHByZWZlci1mb3Itb2ZcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50YWJsZURhdGEuZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICBzd2l0Y2ggKHR5cGUudHlwZSkge1xuICAgICAgICAgIGNhc2UgR1R5cGVSb3dFbnVtLkNVUlJFTkNZOlxuICAgICAgICAgICAgdGhpcy50YWJsZURhdGEuZGF0YVtpXVt0eXBlLmtleV0gPSB0aGlzLmZvcm1hdEN1cnJlbmN5KHRoaXMudGFibGVEYXRhLmRhdGFbaV1bdHlwZS5rZXldLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBHVHlwZVJvd0VudW0uUEhPTkU6XG4gICAgICAgICAgLy8gVE9ETyBjcmVhdGUgZm9ybWF0IFBob25lXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZm9ybWF0Q3VycmVuY3kodmFsdWVUYWJsZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBsZXQgdmFsdWUgPSB2YWx1ZVRhYmxlO1xuICAgIGNvbnN0IGxvY2F0aW9uID0gTE9DQVRJT05bdGhpcy50YWJsZURhdGEub3B0aW9ucy5jb3VudHJ5XSB8fCBMT0NBVElPTltgY29gXTtcblxuICAgIGNvbnN0IHByZWZpeCA9IGxvY2F0aW9uLmN1cnJlbmN5Rm9ybWF0LnN5bWJvbDtcbiAgICBjb25zdCBzdWZmaXggPSBsb2NhdGlvbi5jdXJyZW5jeUZvcm1hdC5jb2RlO1xuICAgIGNvbnN0IHRob3VzYW5kc1NlcGFyYXRvciA9IGxvY2F0aW9uLmN1cnJlbmN5Rm9ybWF0LnRob3VzYW5kcztcbiAgICBjb25zdCBkZWNpbWFsU2VwYXJhdG9yID0gbG9jYXRpb24uY3VycmVuY3lGb3JtYXQuZGVjaW1hbDtcbiAgICBjb25zdCBwcmVjaXNpb24gPSBsb2NhdGlvbi5jdXJyZW5jeUZvcm1hdC5wcmVjaXNpb247XG5cbiAgICBsZXQgaW5wdXRWYWwgPSB2YWx1ZVRhYmxlLnRvU3RyaW5nKCkgfHwgJzAnO1xuXG4gICAgLy8gcmVtb3ZlIGFueSBsZWFkaW5nIHplcm9zXG4gICAgaWYgKGlucHV0VmFsLnN1YnN0cmluZygwLCAxKSA9PT0gJzAnKSB7XG4gICAgICBpbnB1dFZhbCA9IGlucHV0VmFsLnJlcGxhY2UoL15bMHxcXERdKi8sICcnKTtcbiAgICB9XG5cbiAgICAvLyBmb3JtYXQgZGVjaW1hbCBpZiBhcHBsaWVzXG4gICAgaWYgKCFpbnB1dFZhbCB8fCBpbnB1dFZhbC5sZW5ndGggPT09IDEgJiYgaW5wdXRWYWwuc3Vic3RyaW5nKDAsIDEpID09PSAnMCcpIHtcbiAgICAgIGxldCBlbXB0eURlY2ltYWxzID0gJzAnO1xuXG4gICAgICBpZiAocHJlY2lzaW9uID4gMCkge1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcHJlY2lzaW9uOyBpbmRleCsrKSB7XG4gICAgICAgICAgZW1wdHlEZWNpbWFscyA9IGVtcHR5RGVjaW1hbHMgKyAnMCc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlucHV0VmFsID0gZW1wdHlEZWNpbWFscztcbiAgICB9XG5cbiAgICBjb25zdCBjbGVhblZhbHVlID0gaW5wdXRWYWwucmVwbGFjZSgvXFxEL2csICcnKTtcblxuICAgIGxldCBkZWNpbWFscyA9IG51bGw7XG4gICAgbGV0IHRob3VzYW5kcyA9IG51bGw7XG5cbiAgICAvLyBmb3JtYXQgbnVtYmVyIGFzIGN1cnJlbmN5XG4gICAgaWYgKHByZWNpc2lvbiA+IDApIHtcbiAgICAgIGRlY2ltYWxzID0gY2xlYW5WYWx1ZS5zbGljZShwcmVjaXNpb24gLSBwcmVjaXNpb24gKiAyKTtcblxuICAgICAgaWYgKGRlY2ltYWxzLmxlbmd0aCA8IHByZWNpc2lvbikge1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcHJlY2lzaW9uIC0gTnVtYmVyKGRlY2ltYWxzKTsgaW5kZXgrKykge1xuICAgICAgICAgIGRlY2ltYWxzID0gJzAnICsgZGVjaW1hbHM7XG4gICAgICAgIH1cbiAgICAgICAgdGhvdXNhbmRzID0gJzAnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhvdXNhbmRzID0gY2xlYW5WYWx1ZS5zdWJzdHJpbmcoMCwgY2xlYW5WYWx1ZS5sZW5ndGggLSBwcmVjaXNpb24pIHx8ICcwJztcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICB0aG91c2FuZHMgPSBjbGVhblZhbHVlO1xuICAgIH1cblxuICAgIGNvbnN0IGZvcm1hdHRlZFRob3VzYW5kcyA9IHRob3VzYW5kcy5yZXBsYWNlKC9cXEQvZywgJycpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csIHRob3VzYW5kc1NlcGFyYXRvcik7XG5cbiAgICB2YWx1ZSA9IGAke3ByZWZpeH0gJHtmb3JtYXR0ZWRUaG91c2FuZHMgKyAoZGVjaW1hbHMgPyBkZWNpbWFsU2VwYXJhdG9yICsgZGVjaW1hbHMgOiAnJyl9ICR7c3VmZml4fWA7XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2F0dHIuc3R5bGUnKVxuICBwdWJsaWMgZ2V0IHZhbHVlQXNTdHlsZSgpOiBhbnkge1xuICAgIGxldCB2YXJpYWJsZXMgPSAnJztcblxuICAgIC8vIExheW91dFxuICAgIGlmICghdGhpcy5ub1RhYmxlRGF0YSAmJiB0aGlzLnRhYmxlU3R5bGUgPT09IEdUYWJsZVN0eWxlLlRBQkxFICYmIHRoaXMudGFibGVIZWFkZXIubGVuZ3RoKSB7XG4gICAgICBsZXQgZXh0cmFDb2x1bW5zID0gJyc7XG5cbiAgICAgIGlmICh0aGlzLnNlbGVjdGFibGUpIHtcbiAgICAgICAgZXh0cmFDb2x1bW5zID0gYCR7ZXh0cmFDb2x1bW5zfSAzMHB4YDtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuYWRkaXRpb25hbERhdGEpIHtcbiAgICAgICAgZXh0cmFDb2x1bW5zID0gYCR7ZXh0cmFDb2x1bW5zfSAzMHB4YDtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMudGFibGVSb3dBY3Rpb25zICYmICF0aGlzLnRhYmxlUm93QWN0aW9ucy5oaWRkZW4pIHtcbiAgICAgICAgdmFyaWFibGVzID0gdmFyaWFibGVzICsgYC0tZ3MtcmVwZWF0OiAke2V4dHJhQ29sdW1uc30gcmVwZWF0KCR7dGhpcy50YWJsZUhlYWRlci5sZW5ndGh9LCAxZnIpIDkwcHghaW1wb3J0YW50O2A7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZXMgKyBgLS1ncy1yZXBlYXQ6ICR7ZXh0cmFDb2x1bW5zfSByZXBlYXQoJHt0aGlzLnRhYmxlSGVhZGVyLmxlbmd0aH0sIDFmcikhaW1wb3J0YW50O2A7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gVUlcbiAgICBpZiAodGhpcy5jdXN0b21TdHlsZXMpIHtcbiAgICAgIGlmICh0aGlzLmN1c3RvbVN0eWxlcy5jb2xvcikge1xuICAgICAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZXMgKyBgLS1ncy1mb250LWNvbG9yOiAke3RoaXMuY3VzdG9tU3R5bGVzLmNvbG9yfSFpbXBvcnRhbnQ7YDtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmN1c3RvbVN0eWxlcy51aS5mb250U2l6ZSkge1xuICAgICAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZXMgKyBgLS1ncy1mb250LXNpemU6ICR7dGhpcy5jdXN0b21TdHlsZXMudWkuZm9udFNpemV9IWltcG9ydGFudDtgO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuY3VzdG9tU3R5bGVzLmNvbG9yLnByaW1hcnkpIHtcbiAgICAgICAgdmFyaWFibGVzID0gdmFyaWFibGVzICsgYC0tZ3MtcHJpbWFyeS1jb2xvcjogJHt0aGlzLmN1c3RvbVN0eWxlcy5jb2xvci5wcmltYXJ5fSFpbXBvcnRhbnQ7YDtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmN1c3RvbVN0eWxlcy5jb2xvci5zZWNvbmRhcnkpIHtcbiAgICAgICAgdmFyaWFibGVzID0gdmFyaWFibGVzICsgYC0tZ3Mtc2Vjb25kYXJ5LWNvbG9yOiAke3RoaXMuY3VzdG9tU3R5bGVzLmNvbG9yLnNlY29uZGFyeX0haW1wb3J0YW50O2A7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5jdXN0b21TdHlsZXMuY29sb3IubmV1dHJhbCkge1xuICAgICAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZXMgKyBgLS1ncy1uZXV0cmFsLWNvbG9yOiAke3RoaXMuY3VzdG9tU3R5bGVzLmNvbG9yLm5ldXRyYWx9IWltcG9ydGFudDtgO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuY3VzdG9tU3R5bGVzLmNvbG9yLmJvcmRlcikge1xuICAgICAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZXMgKyBgLS1ncy1ib3JkZXItY29sb3I6ICR7dGhpcy5jdXN0b21TdHlsZXMuY29sb3IuYm9yZGVyfSFpbXBvcnRhbnQ7YDtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmN1c3RvbVN0eWxlcy5jb2xvci53aGl0ZSkge1xuICAgICAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZXMgKyBgLS1ncy13aGl0ZS1jb2xvcjogJHt0aGlzLmN1c3RvbVN0eWxlcy5jb2xvci53aGl0ZX0haW1wb3J0YW50O2A7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5jdXN0b21TdHlsZXMudWkucGFkZGluZykge1xuICAgICAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZXMgKyBgLS1ncy1wYWRkaW5nOiAke3RoaXMuY3VzdG9tU3R5bGVzLnVpLnBhZGRpbmd9IWltcG9ydGFudDtgO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuY3VzdG9tU3R5bGVzLnVpLnByaW1hcnlCdXR0b24pIHtcbiAgICAgICAgaWYgKHRoaXMuY3VzdG9tU3R5bGVzLnVpLnByaW1hcnlCdXR0b24ucGFkZGluZykge1xuICAgICAgICAgIHZhcmlhYmxlcyA9IHZhcmlhYmxlcyArIGAtLWdzLWJ1dHRvbi1wYWRkaW5nOiAke3RoaXMuY3VzdG9tU3R5bGVzLnVpLnByaW1hcnlCdXR0b24ucGFkZGluZ30haW1wb3J0YW50O2A7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY3VzdG9tU3R5bGVzLnVpLnByaW1hcnlCdXR0b24uY29sb3IpIHtcbiAgICAgICAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZXMgKyBgLS1ncy1idXR0b24tY29sb3I6ICR7dGhpcy5jdXN0b21TdHlsZXMudWkucHJpbWFyeUJ1dHRvbi5jb2xvcn0haW1wb3J0YW50O2A7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY3VzdG9tU3R5bGVzLnVpLnByaW1hcnlCdXR0b24uYmFja2dyb3VuZCkge1xuICAgICAgICAgIHZhcmlhYmxlcyA9IHZhcmlhYmxlcyArIGAtLWdzLWJ1dHRvbi1iYWNrZ3JvdW5kOiAke3RoaXMuY3VzdG9tU3R5bGVzLnVpLnByaW1hcnlCdXR0b24uYmFja2dyb3VuZH0haW1wb3J0YW50O2A7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY3VzdG9tU3R5bGVzLnVpLnByaW1hcnlCdXR0b24uYm9yZGVyU2l6ZSkge1xuICAgICAgICAgIHZhcmlhYmxlcyA9IHZhcmlhYmxlcyArIGAtLWdzLWJ1dHRvbi1ib3JkZXItc2l6ZTogJHt0aGlzLmN1c3RvbVN0eWxlcy51aS5wcmltYXJ5QnV0dG9uLmJvcmRlclNpemV9IWltcG9ydGFudDtgO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmN1c3RvbVN0eWxlcy51aS5wcmltYXJ5QnV0dG9uLmJvcmRlclN0eWxlKSB7XG4gICAgICAgICAgdmFyaWFibGVzID0gdmFyaWFibGVzICsgYC0tZ3MtYnV0dG9uLWJvcmRlci1zdHlsZTogJHt0aGlzLmN1c3RvbVN0eWxlcy51aS5wcmltYXJ5QnV0dG9uLmJvcmRlclN0eWxlfSFpbXBvcnRhbnQ7YDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jdXN0b21TdHlsZXMudWkucHJpbWFyeUJ1dHRvbi5ib3JkZXJDb2xvcikge1xuICAgICAgICAgIHZhcmlhYmxlcyA9IHZhcmlhYmxlcyArIGAtLWdzLWJ1dHRvbi1ib3JkZXItY29sb3I6ICR7dGhpcy5jdXN0b21TdHlsZXMudWkucHJpbWFyeUJ1dHRvbi5ib3JkZXJDb2xvcn0haW1wb3J0YW50O2A7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY3VzdG9tU3R5bGVzLnVpLnByaW1hcnlCdXR0b24uYm9yZGVyUmFkaXVzKSB7XG4gICAgICAgICAgdmFyaWFibGVzID0gdmFyaWFibGVzICsgYC0tZ3MtYnV0dG9uLWJvcmRlci1yYWRpdXM6ICR7dGhpcy5jdXN0b21TdHlsZXMudWkucHJpbWFyeUJ1dHRvbi5ib3JkZXJSYWRpdXN9IWltcG9ydGFudDtgO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmN1c3RvbVN0eWxlcy51aS5wcmltYXJ5QnV0dG9uLmJvcmRlclRvcCkge1xuICAgICAgICAgIHZhcmlhYmxlcyA9IHZhcmlhYmxlcyArIGAtLWdzLWJ1dHRvbi1ib3JkZXItdG9wOiAke3RoaXMuY3VzdG9tU3R5bGVzLnVpLnByaW1hcnlCdXR0b24uYm9yZGVyVG9wfSFpbXBvcnRhbnQ7YDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jdXN0b21TdHlsZXMudWkucHJpbWFyeUJ1dHRvbi5ib3JkZXJSaWdodCkge1xuICAgICAgICAgIHZhcmlhYmxlcyA9IHZhcmlhYmxlcyArIGAtLWdzLWJ1dHRvbi1ib3JkZXItcmlnaHQ6ICR7dGhpcy5jdXN0b21TdHlsZXMudWkucHJpbWFyeUJ1dHRvbi5ib3JkZXJSaWdodH0haW1wb3J0YW50O2A7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY3VzdG9tU3R5bGVzLnVpLnByaW1hcnlCdXR0b24uYm9yZGVyQm90dG9tKSB7XG4gICAgICAgICAgdmFyaWFibGVzID0gdmFyaWFibGVzICsgYC0tZ3MtYnV0dG9uLWJvcmRlci1ib3R0b206ICR7dGhpcy5jdXN0b21TdHlsZXMudWkucHJpbWFyeUJ1dHRvbi5ib3JkZXJCb3R0b219IWltcG9ydGFudDtgO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmN1c3RvbVN0eWxlcy51aS5wcmltYXJ5QnV0dG9uLmJvcmRlckxlZnQpIHtcbiAgICAgICAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZXMgKyBgLS1ncy1idXR0b24tYm9yZGVyLWxlZnQ6ICR7dGhpcy5jdXN0b21TdHlsZXMudWkucHJpbWFyeUJ1dHRvbi5ib3JkZXJMZWZ0fSFpbXBvcnRhbnQ7YDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0U3R5bGUoXG4gICAgICB2YXJpYWJsZXNcbiAgICApO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OnJlc2l6ZScsIFsnJGV2ZW50J10pXG4gIHB1YmxpYyBvblJlc2l6ZShldmVudCkge1xuICAgIHRoaXMuc2V0Q29udGVudFdpZHRoKCk7XG4gIH1cblxuICBwcml2YXRlIHNldENvbnRlbnRXaWR0aCgpIHtcbiAgICBpZiAoIXRoaXMubm9UYWJsZURhdGEgJiYgdGhpcy50YWJsZVN0eWxlID09PSBHVGFibGVTdHlsZS5UQUJMRSkge1xuICAgICAgdGhpcy50YWJsZUNvbnRlbnRQYWRkaW5nID1cbiAgICAgICAgdGhpcy50YWJsZUhlYWRlckVsZW1lbnQubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCAtIHRoaXMudGFibGVDb250ZW50RWxlbWVudC5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBoZGxSb3dBY3Rpb24oYWN0aW9uOiBHVGFibGVBY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLnJvd0FjdGlvbkNsaWNrLmVtaXQoYWN0aW9uKTtcbiAgICB0aGlzLnNlbGVjdGVkQWRkaXRpb25hbERhdGEgPSBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIE5hdmlnYXRlIG5leHQgb3IgcHJldmlvdXMgYmFzZWQgb25cbiAgICogQHBhcmFtIG5leHQgaWYgdHJ1ZSBuYXZpZ2F0ZSBuZXh0LCBlbHNlIHByZXZpb3VzXG4gICAqXG4gICAqIEBkZXByZWNhdGVkIHVzZSBgb25OYXZpZ2F0ZVRvYCBpbnN0ZWFkXG4gICAqL1xuICBwdWJsaWMgb25OYXZpZ2F0ZShuZXh0OiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKG5leHQpIHtcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogZGVwcmVjYXRpb25cbiAgICAgIHRoaXMubmF2aWdhdGVOZXh0LmVtaXQoKTtcbiAgICAgIHRoaXMubmF2aWdhdGVUby5lbWl0KHRoaXMuY3VycmVudFBhZ2UgKyAxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBkZXByZWNhdGlvblxuICAgICAgdGhpcy5uYXZpZ2F0ZVByZXZpb3VzLmVtaXQoKTtcbiAgICAgIHRoaXMubmF2aWdhdGVUby5lbWl0KHRoaXMuY3VycmVudFBhZ2UgLSAxKTtcbiAgICB9XG4gICAgdGhpcy5zZWxlY3RlZEFkZGl0aW9uYWxEYXRhID0gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBOYXZpZ2F0ZSB0byBzcGVjaWZpYyBwYWdlXG4gICAqIEBwYXJhbSBwYWdlIG51bWJlciBvZiBwYWdlXG4gICAqXG4gICAqIHJldHVybnMgdGhlIG5leHQgcGFnZSB2YWx1ZVxuICAgKi9cbiAgcHVibGljIG9uTmF2aWdhdGVUbyhwYWdlOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLm5hdmlnYXRlVG8uZW1pdChwYWdlKTtcbiAgICB0aGlzLnNlbGVjdGVkQWRkaXRpb25hbERhdGEgPSBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBvbklucHV0RGF0YUVycm9yKCk6IHZvaWQge1xuICAgIHJldHVybiBjb25zb2xlLmVycm9yKFxuICAgICAgJ0dTIFRhYmxlIGJ1aWxkaW5nIGVycjogUGxlYXNlIHByb3ZpZGUgdGFibGVEYXRhOicgKyAnXFxuXFxuJyArXG4gICAgICAnMS4gSW4geW91ciB0ZW1wbGF0ZSBtYWtlIHN1cmUgeW91IGhhdmU6JyArICdcXG5cXG4nICtcbiAgICAgICdcXHhhMCcgKyAnPGdzLXRhYmxlIFt0YWJsZURhdGFdPVwidGFibGVEYXRhXCI+PC9ncy10YWJsZT4nICsgJ1xcblxcbicgK1xuICAgICAgJzIuIEluIHlvdXIgY29tcG9uZW50IGRlY2xhcmUgYHRhYmxlRGF0YWA6JyArICdcXG5cXG4nICtcbiAgICAgICdcXHhhMHB1YmxpYyB0YWJsZURhdGEgPSB7JyArICdcXG4nICtcbiAgICAgICdcXHhhMFxceGEwXFx4YTAnICsgJ2RhdGE6IEFycmF5PG9iamVjdD47JyArICdcXG4nICtcbiAgICAgICdcXHhhMFxceGEwXFx4YTAnICsgJ2hlYWRlcj86IEFycmF5PHN0cmluZz47JyArICdcXG4nICtcbiAgICAgICdcXHhhMFxceGEwXFx4YTAnICsgJ29wdGlvbnM/OiB7JyArICdcXG4nICtcbiAgICAgICdcXHhhMFxceGEwXFx4YTBcXHhhMFxceGEwJyArICdzdHlsZT86IEdUYWJsZVN0eWxlOycgKyAnXFxuJyArXG4gICAgICAnXFx4YTBcXHhhMFxceGEwXFx4YTBcXHhhMCcgKyAncm93QWN0aW9ucz86IEdUYWJsZVJvd0FjdGlvbjsnICsgJ1xcbicgK1xuICAgICAgJ1xceGEwXFx4YTBcXHhhMCcgKyAnfScgKyAnXFxuJyArXG4gICAgICAnXFx4YTB9J1xuICAgICk7XG4gIH1cblxuICBwdWJsaWMgdG9nZ2xlQWRkaXRpb25hbERhdGEoc2VsZWN0ZWRBZGRpdGlvbmFsRGF0YTogbnVtYmVyLCAkZXZlbnQ/OiB7IHRhcmdldDogeyBpZDogc3RyaW5nLCBub2RlTmFtZTogc3RyaW5nIH0gfSk6IHZvaWQge1xuICAgIGlmICghdGhpcy5hZGRpdGlvbmFsRGF0YSB8fCAoJGV2ZW50ICYmIChcbiAgICAgICRldmVudC50YXJnZXQuaWQgPT09ICdyb3dBY3Rpb25CdXR0b24nIHx8XG4gICAgICAkZXZlbnQudGFyZ2V0LmlkID09PSAnZ3NidG5hbnknXG4gICAgKSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNlbGVjdGVkQWRkaXRpb25hbERhdGEgPSB0aGlzLnNlbGVjdGVkQWRkaXRpb25hbERhdGEgPT09IHNlbGVjdGVkQWRkaXRpb25hbERhdGEgPyBudWxsIDogc2VsZWN0ZWRBZGRpdGlvbmFsRGF0YTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZWxlY3RhYmxlIG1ldGhvZHNcbiAgICovXG4gIHB1YmxpYyBvblJvd1ZhbHVlQ2hhbmdlZChuZXdSb3dWYWx1ZTogR1NlbGVjdGFibGVWYWx1ZSk6IHZvaWQge1xuICAgIHRoaXMudGFibGVDb250ZW50W25ld1Jvd1ZhbHVlLmluZGV4IHx8IDBdLnNlbGVjdGFibGUgPSBuZXdSb3dWYWx1ZS52YWx1ZTtcbiAgICB0aGlzLnJvd1ZhbHVlQ2hhbmdlZC5lbWl0KG5ld1Jvd1ZhbHVlKTtcbiAgICB0aGlzLnRhYmxlRGF0YUNoYW5nZWQuZW1pdCh0aGlzLnRhYmxlQ29udGVudCk7XG4gIH1cblxuICBwdWJsaWMgdG9nZ2xlU2VsZWN0YWJsZVNlbGVjdGlvbihuZXdSb3dWYWx1ZTogR1NlbGVjdGFibGVWYWx1ZSk6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0YWJsZUFsbFNlbGVjdGVkID0gbmV3Um93VmFsdWUudmFsdWU7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRhYmxlQ29udGVudC5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy50YWJsZUNvbnRlbnRbaV0uc2VsZWN0YWJsZSA9IHRoaXMuc2VsZWN0YWJsZUFsbFNlbGVjdGVkO1xuICAgIH1cbiAgICB0aGlzLnRhYmxlRGF0YUNoYW5nZWQuZW1pdCh0aGlzLnRhYmxlQ29udGVudCk7XG4gIH1cblxuICAvKipcbiAgICogRm9vdGVyIGFjdGlvbnNcbiAgICovXG4gIHB1YmxpYyBvbkZvb3RlckFjdGlvbkNsaWNrZWQoYWN0aW9uOiBHVGFibGVGb290ZXJBY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLnRhYmxlQWN0aW9uQ2xpY2suZW1pdChhY3Rpb24pO1xuICB9XG59XG4iXX0=