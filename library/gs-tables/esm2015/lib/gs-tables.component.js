import * as tslib_1 from "tslib";
import { Component, Input, HostBinding, HostListener, ViewChild, Inject, Output, EventEmitter } from '@angular/core';
import { GTableStyle } from './gs-tables.widgets';
import { GsTablesService } from './gs-tables.service';
import { DomSanitizer } from '@angular/platform-browser';
// https://uxdesign.cc/design-better-data-tables-4ecc99d23356
let GsTablesComponent = class GsTablesComponent {
    constructor(sanitizer, tableService, customStyles) {
        this.sanitizer = sanitizer;
        this.tableService = tableService;
        this.rowActionEvent = new EventEmitter();
        this.navigateNext = new EventEmitter();
        this.navigatePrevious = new EventEmitter();
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
        this.tableContent = this.tableData.data;
        this.tableRowActions = this.tableData.options.rowActions || null;
        this.tableContentKeys = this.tableData.keyNames ? this.tableData.keyNames : this.tableService.objectKeysToArray(this.tableContent);
        if (this.tableStyle === GTableStyle.SINGLE) {
            this.tableContentKeys = [this.tableContentKeys[0], this.tableContentKeys[1]];
        }
        else {
            this.tableHeader = this.tableData.header || this.tableContentKeys;
        }
    }
    get valueAsStyle() {
        let variables = '';
        // Layout
        if (!this.noTableData && this.tableStyle === GTableStyle.TABLE && this.tableHeader.length) {
            if (this.tableRowActions && this.tableRowActions.display) {
                variables = variables + `--gs-repeat: repeat(${this.tableHeader.length + 1}, 1fr)!important;`;
            }
            else {
                variables = variables + `--gs-repeat: repeat(${this.tableHeader.length}, 1fr)!important;`;
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
        this.rowActionEvent.emit(action);
    }
    onNavigate(next) {
        if (next) {
            this.navigateNext.emit();
        }
        else {
            this.navigatePrevious.emit();
        }
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
], GsTablesComponent.prototype, "rowActionEvent", void 0);
tslib_1.__decorate([
    Output()
], GsTablesComponent.prototype, "navigateNext", void 0);
tslib_1.__decorate([
    Output()
], GsTablesComponent.prototype, "navigatePrevious", void 0);
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
        template: "<!-- https://material.angular.io/components/table/overview -->\r\n\r\n<ng-container *ngIf=\"!noTableData\">\r\n  <!-- GTableStyle: TABLE -->\r\n  <div class=\"gs-table\" *ngIf=\"tableStyle === tableStyleType.TABLE\">\r\n    <!-- header -->\r\n    <div class=\"gs-table-header\" [style.padding-right.px]=\"tableContentPadding\" #tableHeaderElement>\r\n      <ng-container *ngFor=\"let title of tableHeader\">\r\n        <span class=\"gs-table-header-row\">{{ title | translate }}</span>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"tableRowActions && tableRowActions.display\">\r\n        <span class=\"gs-table-header-row\">{{ tableRowActions.text }}</span>\r\n      </ng-container>\r\n    </div>\r\n    \r\n    <!-- content -->\r\n    <ng-container #tableContentElement *ngIf=\"tableContent && tableContentKeys\">\r\n      <div class=\"gs-table-row\" *ngFor=\"let row of tableContent\">\r\n        <ng-container *ngFor=\"let key of tableContentKeys\">\r\n          <span class=\"gs-table-row_text\">{{ row[key] | translate }}</span>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"tableRowActions && tableRowActions.display\">\r\n          <gs-table-row-actions\r\n            [rowAction]=\"tableRowActions\"\r\n            [rowData]=\"row\"\r\n            (rowActionEvent)=\"hdlRowAction($event)\">\r\n          </gs-table-row-actions>\r\n        </ng-container>\r\n      </div>\r\n    </ng-container>\r\n\r\n    <!-- footer -->\r\n    <ng-container *ngTemplateOutlet=\"footer\"></ng-container>\r\n  </div>\r\n\r\n  <!-- GTableStyle: SINGLE -->\r\n  <div class=\"gs-table-single\" *ngIf=\"tableStyle === tableStyleType.SINGLE\">\r\n    <!-- content -->\r\n    <div class=\"gs-table-content\" *ngIf=\"tableContent && tableContentKeys\">\r\n      <div class=\"gs-table-row\" *ngFor=\"let row of tableContent\">\r\n        <ng-container *ngFor=\"let key of tableContentKeys\">\r\n          <span class=\"gs-table-row_text\">{{ row[key] }}</span>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"tableRowActions && tableRowActions.display\">\r\n          <gs-table-row-actions\r\n            [rowAction]=\"tableRowActions\"\r\n            [rowData]=\"row\"\r\n            (rowActionEvent)=\"hdlRowAction($event)\">\r\n          </gs-table-row-actions>\r\n        </ng-container>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- footer -->\r\n    <ng-container *ngTemplateOutlet=\"footer\"></ng-container>\r\n  </div>\r\n</ng-container>\r\n\r\n<ng-template #footer>\r\n  <div class=\"gs-table-footer\" *ngIf=\"currentPage && totalOfPages\">\r\n\r\n      <!-- element count -->\r\n      <span class=\"gs-table-navigation_count\">\r\n        {{ currentPage }} - {{ totalOfPages }}\r\n      </span>\r\n\r\n      <!-- navigation controlls -->\r\n      <button\r\n        type=\"button\"\r\n        class=\"gs-table-navigation-left\"\r\n        [class.disabled]=\"!canNavigatePrevious\"\r\n        (click)=\"onNavigate(true)\"\r\n      >\r\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\r\n          <path d=\"M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z\"/>\r\n        </svg>\r\n      </button>\r\n\r\n      <button\r\n        type=\"button\"\r\n        class=\"gs-table-navigation-right\"\r\n        [class.disabled]=\"!canNavigateNext\"\r\n        (click)=\"onNavigate(false)\"\r\n      >\r\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\r\n          <path d=\"M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z\"/>\r\n        </svg>\r\n      </button>\r\n\r\n  </div>\r\n</ng-template>",
        styles: ["*{font-family:Arial,Helvetica,sans-serif;color:var(--gs-font-color,inherit);font-size:var(--gs-font-size,.9rem);outline:0;box-sizing:border-box;line-height:1.4}.disabled{opacity:.7;cursor:default;pointer-events:none}.button{-webkit-transition:.2s ease-in-out;transition:.2s ease-in-out;cursor:pointer;border:none;text-align:center;font-weight:700;outline:0;padding:var(--gs-button-padding,.5rem);color:var(--gs-button-color,#fff);background-color:var(--gs-button-background,#f33959);border:1px solid var(--gs-button-border-color,#f33959);border-radius:var(--gs-button-border-radius,6px)}.button:hover{opacity:.8}:host ::ng-deep .gs-table-row:last-child gs-table-row-actions div.action div.options.dropdown,:host ::ng-deep .gs-table-row:nth-last-child(2) gs-table-row-actions div.action div.options.dropdown,:host ::ng-deep .gs-table-row:nth-last-child(3) gs-table-row-actions div.action div.options.dropdown{top:-70px}.gs-table{border:1px solid var(--gs-border-color,#eee);background-color:var(--gs-white-color,#fff)}.gs-table .gs-table-header span{text-align:left;color:var(--gs-font-color,inherit);fill:var(--gs-font-color,inherit);font-weight:700;font-size:80%;opacity:.6}.gs-table .gs-table-header,.gs-table .gs-table-row{display:grid;grid-template-columns:var(--gs-repeat,repeat(auto-fit,minmax(180px,1fr)))}.gs-table .gs-table-footer,.gs-table .gs-table-header,.gs-table .gs-table-row{height:50px;padding-left:1rem;padding-right:1rem;border-bottom:1px solid var(--gs-border-color,#eee)}.gs-table .gs-table-footer *,.gs-table .gs-table-header *,.gs-table .gs-table-row *{align-self:center}.gs-table .gs-table-footer{border-bottom:none;display:grid;gap:2rem;grid-template-columns:-webkit-max-content auto repeat(2,-webkit-min-content);grid-template-columns:max-content auto repeat(2,min-content)}.gs-table .gs-table-footer span{color:var(--gs-font-color,inherit);fill:var(--gs-font-color,inherit);font-weight:700;font-size:80%;opacity:.6}.gs-table .gs-table-footer .gs-table-navigation-left,.gs-table .gs-table-footer .gs-table-navigation-right,.gs-table .gs-table-footer .gs-table-navigation_count{align-self:center}.gs-table .gs-table-footer .gs-table-navigation_count{grid-column:1}.gs-table .gs-table-footer .gs-table-navigation-left{grid-column:3}.gs-table .gs-table-footer .gs-table-navigation-right{grid-column:4}.gs-table .gs-table-footer .gs-table-navigation-left,.gs-table .gs-table-footer .gs-table-navigation-right{outline:0;background:0 0;padding:0;margin:0;border:none;cursor:pointer}.gs-table .gs-table-footer .gs-table-navigation-left svg,.gs-table .gs-table-footer .gs-table-navigation-right svg{width:12px}"]
    }),
    tslib_1.__param(2, Inject('customStyles'))
], GsTablesComponent);
export { GsTablesComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3MtdGFibGVzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dzLXRhYmxlcy8iLCJzb3VyY2VzIjpbImxpYi9ncy10YWJsZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxXQUFXLEVBQ1gsWUFBWSxFQUNaLFNBQVMsRUFFVCxNQUFNLEVBQ04sTUFBTSxFQUNOLFlBQVksRUFHYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXlDLFdBQVcsRUFBVyxNQUFNLHFCQUFxQixDQUFDO0FBQ2xHLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFekQsNkRBQTZEO0FBTzdELElBQWEsaUJBQWlCLEdBQTlCLE1BQWEsaUJBQWlCO0lBd0I1QixZQUNVLFNBQXVCLEVBQ3ZCLFlBQTZCLEVBQ2IsWUFBWTtRQUY1QixjQUFTLEdBQVQsU0FBUyxDQUFjO1FBQ3ZCLGlCQUFZLEdBQVosWUFBWSxDQUFpQjtRQXRCckIsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBZ0IsQ0FBQztRQUNsRCxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFDeEMscUJBQWdCLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQWF2RCxtQkFBYyxHQUFHLFdBQVcsQ0FBQztRQVVsQyxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztJQUNuQyxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDWixPQUFPO1NBQ1I7UUFFRCxJQUFJLE9BQU8sQ0FBQyxTQUFTLElBQUksT0FBTyxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUU7WUFDdkQsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQztZQUVoRCxJQUFJ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QUFULE1BQU0sRUFBRTt5REFBMkQ7QUFDMUQ7SUFBVCxNQUFNLEVBQUU7dURBQWlEO0FBQ2hEO0lBQVQsTUFBTSxFQUFFOzJEQUFxRDtBQUNUO0lBQXBELFNBQVMsQ0FBQyxxQkFBcUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQzs4REFBeUM7QUFDekM7SUFBbkQsU0FBUyxDQUFDLG9CQUFvQixFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDOzZEQUF3QztBQWdHM0Y7SUFEQyxXQUFXLENBQUMsWUFBWSxDQUFDO3FEQStFekI7QUFHRDtJQURDLFlBQVksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztpREFHekM7QUEzTFUsaUJBQWlCO0lBTDdCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxVQUFVO1FBQ3BCLDJsSEFBeUM7O0tBRTFDLENBQUM7SUE0QkcsbUJBQUEsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFBO0dBM0JkLGlCQUFpQixDQWdPN0I7U0FoT1ksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgSG9zdEJpbmRpbmcsXG4gIEhvc3RMaXN0ZW5lcixcbiAgVmlld0NoaWxkLFxuICBFbGVtZW50UmVmLFxuICBJbmplY3QsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBPbkNoYW5nZXMsXG4gIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBHVGFibGUsIEdUYWJsZVJvd0FjdGlvbiwgR1RhYmxlQWN0aW9uLCBHVGFibGVTdHlsZSwgR1N0eWxlcyB9IGZyb20gJy4vZ3MtdGFibGVzLndpZGdldHMnO1xuaW1wb3J0IHsgR3NUYWJsZXNTZXJ2aWNlIH0gZnJvbSAnLi9ncy10YWJsZXMuc2VydmljZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuLy8gaHR0cHM6Ly91eGRlc2lnbi5jYy9kZXNpZ24tYmV0dGVyLWRhdGEtdGFibGVzLTRlY2M5OWQyMzM1NlxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdncy10YWJsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9ncy10YWJsZXMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9ncy10YWJsZXMuY29tcG9uZW50LnNhc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBHc1RhYmxlc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIHByaXZhdGUgdGFibGVEYXRhOiBHVGFibGU7XG4gIEBJbnB1dCgpIHB1YmxpYyBjdXJyZW50UGFnZTogbnVtYmVyO1xuICBASW5wdXQoKSBwdWJsaWMgdG90YWxPZlBhZ2VzOiBudW1iZXI7XG4gIEBPdXRwdXQoKSBwcml2YXRlIHJvd0FjdGlvbkV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxHVGFibGVBY3Rpb24+KCk7XG4gIEBPdXRwdXQoKSBwcml2YXRlIG5hdmlnYXRlTmV4dCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgQE91dHB1dCgpIHByaXZhdGUgbmF2aWdhdGVQcmV2aW91cyA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgQFZpZXdDaGlsZCgndGFibGVDb250ZW50RWxlbWVudCcsIHsgc3RhdGljOiBmYWxzZSB9KSBwcml2YXRlIHRhYmxlQ29udGVudEVsZW1lbnQ6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ3RhYmxlSGVhZGVyRWxlbWVudCcsIHsgc3RhdGljOiBmYWxzZSB9KSBwcml2YXRlIHRhYmxlSGVhZGVyRWxlbWVudDogRWxlbWVudFJlZjtcblxuICBwdWJsaWMgdGFibGVIZWFkZXI6IEFycmF5PHN0cmluZz47XG4gIHB1YmxpYyB0YWJsZUNvbnRlbnRLZXlzOiBBcnJheTxzdHJpbmc+O1xuICBwdWJsaWMgdGFibGVDb250ZW50OiBBcnJheTxvYmplY3Q+O1xuICBwdWJsaWMgdGFibGVDb250ZW50UGFkZGluZzogbnVtYmVyO1xuICBwdWJsaWMgdGFibGVSb3dBY3Rpb25zOiBHVGFibGVSb3dBY3Rpb247XG4gIHB1YmxpYyB0YWJsZVN0eWxlOiBHVGFibGVTdHlsZTtcbiAgcHJpdmF0ZSBjdXN0b21TdHlsZXM6IEdTdHlsZXM7XG5cbiAgcHVibGljIG5vVGFibGVEYXRhOiBib29sZWFuO1xuICBwdWJsaWMgdGFibGVTdHlsZVR5cGUgPSBHVGFibGVTdHlsZTtcblxuICBwdWJsaWMgY2FuTmF2aWdhdGVOZXh0OiBib29sZWFuO1xuICBwdWJsaWMgY2FuTmF2aWdhdGVQcmV2aW91czogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyLFxuICAgIHByaXZhdGUgdGFibGVTZXJ2aWNlOiBHc1RhYmxlc1NlcnZpY2UsXG4gICAgQEluamVjdCgnY3VzdG9tU3R5bGVzJykgY3VzdG9tU3R5bGVzXG4gICkge1xuICAgIHRoaXMuY3VzdG9tU3R5bGVzID0gY3VzdG9tU3R5bGVzO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmICghY2hhbmdlcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChjaGFuZ2VzLnRhYmxlRGF0YSAmJiBjaGFuZ2VzLnRhYmxlRGF0YS5jdXJyZW50VmFsdWUpIHtcbiAgICAgIHRoaXMudGFibGVEYXRhID0gY2hhbmdlcy50YWJsZURhdGEuY3VycmVudFZhbHVlO1xuXG4gICAgICBpZiAodGhpcy50YWJsZURhdGEuZGF0YSkge1xuICAgICAgICB0aGlzLm5vVGFibGVEYXRhID0gZmFsc2U7XG4gICAgICAgIHRoaXMudGFibGVEYXRhQWRhcHRlcigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5ub1RhYmxlRGF0YSA9IHRydWU7XG4gICAgICAgIHRoaXMub25JbnB1dERhdGFFcnJvcigpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjaGFuZ2VzLmN1cnJlbnRQYWdlIHx8IHRoaXMuY3VycmVudFBhZ2UpIHtcbiAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSBjaGFuZ2VzLmN1cnJlbnRQYWdlID8gY2hhbmdlcy5jdXJyZW50UGFnZS5jdXJyZW50VmFsdWUgOiB0aGlzLmN1cnJlbnRQYWdlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmN1cnJlbnRQYWdlID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlcy50b3RhbE9mUGFnZXMgfHwgdGhpcy50b3RhbE9mUGFnZXMpIHtcbiAgICAgIHRoaXMudG90YWxPZlBhZ2VzID0gY2hhbmdlcy50b3RhbE9mUGFnZXMgPyBjaGFuZ2VzLnRvdGFsT2ZQYWdlcy5jdXJyZW50VmFsdWUgOiB0aGlzLnRvdGFsT2ZQYWdlcztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50b3RhbE9mUGFnZXMgPSBudWxsO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmN1cnJlbnRQYWdlICYmIHRoaXMudG90YWxPZlBhZ2VzKSB7XG4gICAgICB0aGlzLnNldFRhYmxlRm9vdGVyKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmN1cnJlbnRQYWdlIHx8IHRoaXMudG90YWxPZlBhZ2VzKSB7XG4gICAgICByZXR1cm4gY29uc29sZS53YXJuKFxuICAgICAgICAnR1MgVGFibGUgYnVpbGRpbmcgd2FybmluZzonICsgJ1xcblxcbicgK1xuICAgICAgICAnSWYgeW91IHdpc2ggdG8gZGlzcGxheSBjdXJyZW50IGFuZCB0b3RhbCBvZiBwYWdlcyBwbGVhc2UgYWRkIHRvIHlvdXIgdGFibGUgb3B0aW9ucyBgY3VycmVudFBhZ2VgIGFuZCBgdG90YWxPZlBhZ2VzYCdcbiAgICAgICk7XG4gICAgfVxuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnNldENvbnRlbnRXaWR0aCgpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRUYWJsZUZvb3RlcigpIHtcbiAgICBpZiAodGhpcy5jdXJyZW50UGFnZSA8PSAxKSB7XG4gICAgICB0aGlzLmNhbk5hdmlnYXRlUHJldmlvdXMgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jYW5OYXZpZ2F0ZVByZXZpb3VzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jdXJyZW50UGFnZSArIDEgPiB0aGlzLnRvdGFsT2ZQYWdlcykge1xuICAgICAgdGhpcy5jYW5OYXZpZ2F0ZU5leHQgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jYW5OYXZpZ2F0ZU5leHQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdGFibGVEYXRhQWRhcHRlcigpIHtcbiAgICB0aGlzLnRhYmxlU3R5bGUgPSB0aGlzLnRhYmxlRGF0YS5vcHRpb25zLnN0eWxlIHx8IEdUYWJsZVN0eWxlLlRBQkxFO1xuICAgIHRoaXMudGFibGVDb250ZW50ID0gdGhpcy50YWJsZURhdGEuZGF0YTtcbiAgICB0aGlzLnRhYmxlUm93QWN0aW9ucyA9IHRoaXMudGFibGVEYXRhLm9wdGlvbnMucm93QWN0aW9ucyB8fCBudWxsO1xuICAgIHRoaXMudGFibGVDb250ZW50S2V5cyA9IHRoaXMudGFibGVEYXRhLmtleU5hbWVzID8gdGhpcy50YWJsZURhdGEua2V5TmFtZXMgOiB0aGlzLnRhYmxlU2VydmljZS5vYmplY3RLZXlzVG9BcnJheSh0aGlzLnRhYmxlQ29udGVudCk7XG5cbiAgICBpZiAodGhpcy50YWJsZVN0eWxlID09PSBHVGFibGVTdHlsZS5TSU5HTEUpIHtcbiAgICAgIHRoaXMudGFibGVDb250ZW50S2V5cyA9IFt0aGlzLnRhYmxlQ29udGVudEtleXNbMF0sIHRoaXMudGFibGVDb250ZW50S2V5c1sxXV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudGFibGVIZWFkZXIgPSB0aGlzLnRhYmxlRGF0YS5oZWFkZXIgfHwgdGhpcy50YWJsZUNvbnRlbnRLZXlzO1xuICAgIH1cblxuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnN0eWxlJylcbiAgcHVibGljIGdldCB2YWx1ZUFzU3R5bGUoKTogYW55IHtcbiAgICBsZXQgdmFyaWFibGVzID0gJyc7XG5cbiAgICAvLyBMYXlvdXRcbiAgICBpZiAoIXRoaXMubm9UYWJsZURhdGEgJiYgdGhpcy50YWJsZVN0eWxlID09PSBHVGFibGVTdHlsZS5UQUJMRSAmJiB0aGlzLnRhYmxlSGVhZGVyLmxlbmd0aCkge1xuICAgICAgaWYgKHRoaXMudGFibGVSb3dBY3Rpb25zICYmIHRoaXMudGFibGVSb3dBY3Rpb25zLmRpc3BsYXkpIHtcbiAgICAgICAgdmFyaWFibGVzID0gdmFyaWFibGVzICsgYC0tZ3MtcmVwZWF0OiByZXBlYXQoJHt0aGlzLnRhYmxlSGVhZGVyLmxlbmd0aCArIDF9LCAxZnIpIWltcG9ydGFudDtgO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyaWFibGVzID0gdmFyaWFibGVzICsgYC0tZ3MtcmVwZWF0OiByZXBlYXQoJHt0aGlzLnRhYmxlSGVhZGVyLmxlbmd0aH0sIDFmcikhaW1wb3J0YW50O2A7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gVUlcbiAgICBpZiAodGhpcy5jdXN0b21TdHlsZXMpIHtcbiAgICAgIGlmICh0aGlzLmN1c3RvbVN0eWxlcy5jb2xvcikge1xuICAgICAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZXMgKyBgLS1ncy1mb250LWNvbG9yOiAke3RoaXMuY3VzdG9tU3R5bGVzLmNvbG9yfSFpbXBvcnRhbnQ7YDtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmN1c3RvbVN0eWxlcy51aS5mb250U2l6ZSkge1xuICAgICAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZXMgKyBgLS1ncy1mb250LXNpemU6ICR7dGhpcy5jdXN0b21TdHlsZXMudWkuZm9udFNpemV9IWltcG9ydGFudDtgO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuY3VzdG9tU3R5bGVzLmNvbG9yLnByaW1hcnkpIHtcbiAgICAgICAgdmFyaWFibGVzID0gdmFyaWFibGVzICsgYC0tZ3MtcHJpbWFyeS1jb2xvcjogJHt0aGlzLmN1c3RvbVN0eWxlcy5jb2xvci5wcmltYXJ5fSFpbXBvcnRhbnQ7YDtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmN1c3RvbVN0eWxlcy5jb2xvci5zZWNvbmRhcnkpIHtcbiAgICAgICAgdmFyaWFibGVzID0gdmFyaWFibGVzICsgYC0tZ3Mtc2Vjb25kYXJ5LWNvbG9yOiAke3RoaXMuY3VzdG9tU3R5bGVzLmNvbG9yLnNlY29uZGFyeX0haW1wb3J0YW50O2A7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5jdXN0b21TdHlsZXMuY29sb3IubmV1dHJhbCkge1xuICAgICAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZXMgKyBgLS1ncy1uZXV0cmFsLWNvbG9yOiAke3RoaXMuY3VzdG9tU3R5bGVzLmNvbG9yLm5ldXRyYWx9IWltcG9ydGFudDtgO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuY3VzdG9tU3R5bGVzLmNvbG9yLmJvcmRlcikge1xuICAgICAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZXMgKyBgLS1ncy1ib3JkZXItY29sb3I6ICR7dGhpcy5jdXN0b21TdHlsZXMuY29sb3IuYm9yZGVyfSFpbXBvcnRhbnQ7YDtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmN1c3RvbVN0eWxlcy5jb2xvci53aGl0ZSkge1xuICAgICAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZXMgKyBgLS1ncy13aGl0ZS1jb2xvcjogJHt0aGlzLmN1c3RvbVN0eWxlcy5jb2xvci53aGl0ZX0haW1wb3J0YW50O2A7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5jdXN0b21TdHlsZXMudWkucGFkZGluZykge1xuICAgICAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZXMgKyBgLS1ncy1wYWRkaW5nOiAke3RoaXMuY3VzdG9tU3R5bGVzLnVpLnBhZGRpbmd9IWltcG9ydGFudDtgO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuY3VzdG9tU3R5bGVzLnVpLnByaW1hcnlCdXR0b24pIHtcbiAgICAgICAgaWYgKHRoaXMuY3VzdG9tU3R5bGVzLnVpLnByaW1hcnlCdXR0b24ucGFkZGluZykge1xuICAgICAgICAgIHZhcmlhYmxlcyA9IHZhcmlhYmxlcyArIGAtLWdzLWJ1dHRvbi1wYWRkaW5nOiAke3RoaXMuY3VzdG9tU3R5bGVzLnVpLnByaW1hcnlCdXR0b24ucGFkZGluZ30haW1wb3J0YW50O2A7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY3VzdG9tU3R5bGVzLnVpLnByaW1hcnlCdXR0b24uY29sb3IpIHtcbiAgICAgICAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZXMgKyBgLS1ncy1idXR0b24tY29sb3I6ICR7dGhpcy5jdXN0b21TdHlsZXMudWkucHJpbWFyeUJ1dHRvbi5jb2xvcn0haW1wb3J0YW50O2A7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY3VzdG9tU3R5bGVzLnVpLnByaW1hcnlCdXR0b24uYmFja2dyb3VuZCkge1xuICAgICAgICAgIHZhcmlhYmxlcyA9IHZhcmlhYmxlcyArIGAtLWdzLWJ1dHRvbi1iYWNrZ3JvdW5kOiAke3RoaXMuY3VzdG9tU3R5bGVzLnVpLnByaW1hcnlCdXR0b24uYmFja2dyb3VuZH0haW1wb3J0YW50O2A7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY3VzdG9tU3R5bGVzLnVpLnByaW1hcnlCdXR0b24uYm9yZGVyU2l6ZSkge1xuICAgICAgICAgIHZhcmlhYmxlcyA9IHZhcmlhYmxlcyArIGAtLWdzLWJ1dHRvbi1ib3JkZXItc2l6ZTogJHt0aGlzLmN1c3RvbVN0eWxlcy51aS5wcmltYXJ5QnV0dG9uLmJvcmRlclNpemV9IWltcG9ydGFudDtgO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmN1c3RvbVN0eWxlcy51aS5wcmltYXJ5QnV0dG9uLmJvcmRlclN0eWxlKSB7XG4gICAgICAgICAgdmFyaWFibGVzID0gdmFyaWFibGVzICsgYC0tZ3MtYnV0dG9uLWJvcmRlci1zdHlsZTogJHt0aGlzLmN1c3RvbVN0eWxlcy51aS5wcmltYXJ5QnV0dG9uLmJvcmRlclN0eWxlfSFpbXBvcnRhbnQ7YDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jdXN0b21TdHlsZXMudWkucHJpbWFyeUJ1dHRvbi5ib3JkZXJDb2xvcikge1xuICAgICAgICAgIHZhcmlhYmxlcyA9IHZhcmlhYmxlcyArIGAtLWdzLWJ1dHRvbi1ib3JkZXItY29sb3I6ICR7dGhpcy5jdXN0b21TdHlsZXMudWkucHJpbWFyeUJ1dHRvbi5ib3JkZXJDb2xvcn0haW1wb3J0YW50O2A7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY3VzdG9tU3R5bGVzLnVpLnByaW1hcnlCdXR0b24uYm9yZGVyUmFkaXVzKSB7XG4gICAgICAgICAgdmFyaWFibGVzID0gdmFyaWFibGVzICsgYC0tZ3MtYnV0dG9uLWJvcmRlci1yYWRpdXM6ICR7dGhpcy5jdXN0b21TdHlsZXMudWkucHJpbWFyeUJ1dHRvbi5ib3JkZXJSYWRpdXN9IWltcG9ydGFudDtgO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmN1c3RvbVN0eWxlcy51aS5wcmltYXJ5QnV0dG9uLmJvcmRlclRvcCkge1xuICAgICAgICAgIHZhcmlhYmxlcyA9IHZhcmlhYmxlcyArIGAtLWdzLWJ1dHRvbi1ib3JkZXItdG9wOiAke3RoaXMuY3VzdG9tU3R5bGVzLnVpLnByaW1hcnlCdXR0b24uYm9yZGVyVG9wfSFpbXBvcnRhbnQ7YDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jdXN0b21TdHlsZXMudWkucHJpbWFyeUJ1dHRvbi5ib3JkZXJSaWdodCkge1xuICAgICAgICAgIHZhcmlhYmxlcyA9IHZhcmlhYmxlcyArIGAtLWdzLWJ1dHRvbi1ib3JkZXItcmlnaHQ6ICR7dGhpcy5jdXN0b21TdHlsZXMudWkucHJpbWFyeUJ1dHRvbi5ib3JkZXJSaWdodH0haW1wb3J0YW50O2A7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY3VzdG9tU3R5bGVzLnVpLnByaW1hcnlCdXR0b24uYm9yZGVyQm90dG9tKSB7XG4gICAgICAgICAgdmFyaWFibGVzID0gdmFyaWFibGVzICsgYC0tZ3MtYnV0dG9uLWJvcmRlci1ib3R0b206ICR7dGhpcy5jdXN0b21TdHlsZXMudWkucHJpbWFyeUJ1dHRvbi5ib3JkZXJCb3R0b219IWltcG9ydGFudDtgO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmN1c3RvbVN0eWxlcy51aS5wcmltYXJ5QnV0dG9uLmJvcmRlckxlZnQpIHtcbiAgICAgICAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZXMgKyBgLS1ncy1idXR0b24tYm9yZGVyLWxlZnQ6ICR7dGhpcy5jdXN0b21TdHlsZXMudWkucHJpbWFyeUJ1dHRvbi5ib3JkZXJMZWZ0fSFpbXBvcnRhbnQ7YDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0U3R5bGUoXG4gICAgICB2YXJpYWJsZXNcbiAgICApO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OnJlc2l6ZScsIFsnJGV2ZW50J10pXG4gIHB1YmxpYyBvblJlc2l6ZShldmVudCkge1xuICAgIHRoaXMuc2V0Q29udGVudFdpZHRoKCk7XG4gIH1cblxuICBwcml2YXRlIHNldENvbnRlbnRXaWR0aCgpIHtcbiAgICBpZiAoIXRoaXMubm9UYWJsZURhdGEgJiYgdGhpcy50YWJsZVN0eWxlID09PSBHVGFibGVTdHlsZS5UQUJMRSkge1xuICAgICAgdGhpcy50YWJsZUNvbnRlbnRQYWRkaW5nID1cbiAgICAgICAgdGhpcy50YWJsZUhlYWRlckVsZW1lbnQubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCAtIHRoaXMudGFibGVDb250ZW50RWxlbWVudC5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBoZGxSb3dBY3Rpb24oYWN0aW9uOiBHVGFibGVBY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLnJvd0FjdGlvbkV2ZW50LmVtaXQoYWN0aW9uKTtcbiAgfVxuXG4gIHB1YmxpYyBvbk5hdmlnYXRlKG5leHQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAobmV4dCkge1xuICAgICAgdGhpcy5uYXZpZ2F0ZU5leHQuZW1pdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm5hdmlnYXRlUHJldmlvdXMuZW1pdCgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgb25JbnB1dERhdGFFcnJvcigpOiB2b2lkIHtcbiAgICByZXR1cm4gY29uc29sZS5lcnJvcihcbiAgICAgICdHUyBUYWJsZSBidWlsZGluZyBlcnI6IFBsZWFzZSBwcm92aWRlIHRhYmxlRGF0YTonICsgJ1xcblxcbicgK1xuICAgICAgJzEuIEluIHlvdXIgdGVtcGxhdGUgbWFrZSBzdXJlIHlvdSBoYXZlOicgKyAnXFxuXFxuJyArXG4gICAgICAnXFx4YTAnICsgJzxncy10YWJsZSBbdGFibGVEYXRhXT1cInRhYmxlRGF0YVwiPjwvZ3MtdGFibGU+JyArICdcXG5cXG4nICtcbiAgICAgICcyLiBJbiB5b3VyIGNvbXBvbmVudCBkZWNsYXJlIGB0YWJsZURhdGFgOicgKyAnXFxuXFxuJyArXG4gICAgICAnXFx4YTBwdWJsaWMgdGFibGVEYXRhID0geycgKyAnXFxuJyArXG4gICAgICAnXFx4YTBcXHhhMFxceGEwJyArICdkYXRhOiBBcnJheTxvYmplY3Q+OycgKyAnXFxuJyArXG4gICAgICAnXFx4YTBcXHhhMFxceGEwJyArICdoZWFkZXI/OiBBcnJheTxzdHJpbmc+OycgKyAnXFxuJyArXG4gICAgICAnXFx4YTBcXHhhMFxceGEwJyArICdvcHRpb25zPzogeycgKyAnXFxuJyArXG4gICAgICAnXFx4YTBcXHhhMFxceGEwXFx4YTBcXHhhMCcgKyAnc3R5bGU/OiBHVGFibGVTdHlsZTsnICsgJ1xcbicgK1xuICAgICAgJ1xceGEwXFx4YTBcXHhhMFxceGEwXFx4YTAnICsgJ3Jvd0FjdGlvbnM/OiBHVGFibGVSb3dBY3Rpb247JyArICdcXG4nICtcbiAgICAgICdcXHhhMFxceGEwXFx4YTAnICsgJ30nICsgJ1xcbicgK1xuICAgICAgJ1xceGEwfSdcbiAgICApO1xuICB9XG59XG4iXX0=