import { __decorate, __param } from 'tslib';
import { ɵɵdefineInjectable, ɵɵinject, Injectable, EventEmitter, Inject, Input, Output, ViewChild, HostBinding, HostListener, Component, NgModule } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

const LOCATION = {
    ar: {
        tax: [
            {
                name: 'CUIT (Código Único de Identificación Tributaria)',
                value: 'CUIT'
            }
        ],
        country: {
            name: 'Argentina',
            alpha2Code: 'AR'
        },
        phoneFormat: {
            code: '54',
            mask: '000 00000000'
        },
        currencyFormat: {
            code: 'ARS',
            symbol: '$',
            thousands: '.',
            decimal: ',',
            precision: 2
        }
    },
    bo: {
        tax: [
            {
                name: 'RUC (Registro Único de Contribuyentes)',
                value: 'RUC'
            }
        ],
        country: {
            name: 'Bolivia',
            alpha2Code: 'BO'
        },
        phoneFormat: {
            code: '591',
            mask: '000 - 0000000'
        },
        currencyFormat: {
            code: 'BOB',
            symbol: 'Bs.',
            thousands: '.',
            decimal: ',',
            precision: 2
        }
    },
    br: {
        tax: [
            {
                name: 'CPF (Cadastro de Persona Física)',
                value: 'CPF'
            },
            {
                name: 'CNPJ (Cadastro de Persona Jurídica)',
                value: 'CNPJ'
            }
        ],
        country: {
            name: 'Brazil',
            alpha2Code: 'BR'
        },
        phoneFormat: {
            code: '55',
            mask: '00 0 0000 0000'
        },
        currencyFormat: {
            code: 'BRL',
            symbol: 'R$',
            thousands: '.',
            decimal: ',',
            precision: 2
        }
    },
    ca: {
        disabled: true,
        tax: [
            {
                name: 'SIN (Social Insurance Number)',
                value: 'SIN'
            },
            {
                name: `NAS (numéro d'assurance social)`,
                value: 'NAS'
            }
        ],
        country: {
            name: 'Canada',
            alpha2Code: 'CA'
        },
        phoneFormat: {
            code: '1',
            mask: '000 000 0000'
        },
        currencyFormat: {
            code: 'CAD',
            symbol: '$',
            thousands: ',',
            decimal: '.',
            precision: 2
        }
    },
    cl: {
        tax: [
            {
                name: 'RUT (Rol Único Tributario)',
                value: 'RUT'
            }
        ],
        country: {
            name: 'Chile',
            alpha2Code: 'CL'
        },
        phoneFormat: {
            code: '56',
            mask: '00 0000000'
        },
        currencyFormat: {
            code: 'CLP',
            symbol: '$',
            thousands: ',',
            decimal: '.',
            precision: 0
        }
    },
    co: {
        tax: [
            {
                name: 'NIT (Número de Identificación Tributaria)',
                value: 'NIT'
            }
        ],
        country: {
            name: 'Colombia',
            alpha2Code: 'CO'
        },
        phoneFormat: {
            code: '57',
            mask: '000 000 0000'
        },
        currencyFormat: {
            code: 'COP',
            symbol: '$',
            thousands: '.',
            decimal: ',',
            precision: 0
        }
    },
    cr: {
        disabled: true,
        tax: [
            {
                name: 'NITE (Número de Identificación Tributaria Especial)',
                value: 'NITE'
            }
        ],
        country: {
            name: 'Costa Rica',
            alpha2Code: 'CR'
        },
        phoneFormat: {
            code: '506',
            mask: '000000000000'
        },
        currencyFormat: {
            code: 'CRC',
            symbol: '₡',
            thousands: '.',
            decimal: ',',
            precision: 2
        }
    },
    ec: {
        disabled: true,
        tax: [
            {
                name: 'RUC (Registro Único de Contribuyentes)',
                value: 'RUC'
            }
        ],
        country: {
            name: 'Ecuador',
            alpha2Code: 'EC'
        },
        phoneFormat: {
            code: '593',
            mask: '000000000000'
        },
        currencyFormat: {
            code: 'USD',
            symbol: '$',
            thousands: ',',
            decimal: '.',
            precision: 2
        }
    },
    mx: {
        tax: [
            {
                name: 'RFC (Registro Federal de Contribuyentes)',
                value: 'RFC'
            }
        ],
        country: {
            name: 'Mexico',
            alpha2Code: 'MX'
        },
        phoneFormat: {
            code: '52',
            mask: '00 00000 0000'
        },
        currencyFormat: {
            code: 'MXN',
            symbol: '$',
            thousands: ',',
            decimal: '.',
            precision: 2
        }
    },
    pe: {
        tax: [
            {
                name: 'RUC (Registro Único de Contribuyentes)',
                value: 'RUC'
            }
        ],
        country: {
            name: 'Peru',
            alpha2Code: 'PE'
        },
        phoneFormat: {
            code: '51',
            mask: '000000000000'
        },
        currencyFormat: {
            code: 'PEN',
            symbol: 'S/.',
            thousands: '.',
            decimal: ',',
            precision: 2
        }
    },
    us: {
        disabled: true,
        tax: [
            {
                name: 'TIN (Taxpayer Identification Number)',
                value: 'TIN'
            }
        ],
        country: {
            name: 'United States',
            alpha2Code: 'US'
        },
        phoneFormat: {
            code: '1',
            mask: '000 000 0000'
        },
        currencyFormat: {
            code: 'USD',
            symbol: '$',
            thousands: ',',
            decimal: '.',
            precision: 2
        }
    },
    uy: {
        tax: [
            {
                name: 'RUT (Registro Único Tributario)',
                value: 'RUT'
            }
        ],
        country: {
            name: 'Uruguay',
            alpha2Code: 'UY'
        },
        phoneFormat: {
            code: '598',
            mask: '000000000000'
        },
        currencyFormat: {
            code: 'UYU',
            symbol: '$',
            thousands: ',',
            decimal: '.',
            precision: 2
        }
    },
    ve: {
        disabled: true,
        tax: [
            {
                name: 'RIF (Registro de Información Fiscal)',
                value: 'RIF'
            }
        ],
        country: {
            name: 'Venezuela',
            alpha2Code: 'VE'
        },
        phoneFormat: {
            code: '58',
            mask: '000 000 0000'
        },
        currencyFormat: {
            code: 'VEF',
            symbol: 'Bs.',
            thousands: '.',
            decimal: ',',
            precision: 0
        }
    }
};
const TEXT_TABLE = {
    es: {
        NO_CONTENT: 'No hay registros en esta tabla',
    },
    en: {
        NO_CONTENT: 'There are no records in this table',
    },
    pr: {
        NO_CONTENT: 'Não há registros nesta tabela',
    }
};

let GsTablesService = class GsTablesService {
    constructor(translateService) {
        this.translateService = translateService;
    }
    objectKeysToArray(rawArray) {
        const contentKeys = [];
        for (const keys in rawArray[0]) {
            if (Object.prototype.hasOwnProperty.call(rawArray[0], keys) && rawArray[0][keys]) {
                contentKeys.push(keys);
            }
        }
        return contentKeys;
    }
    getTranslate(key, param) {
        let lang = this.translateService.currentLang;
        if (!lang) {
            console.warn(`translateService.currentLang is not set, using default language: 'es'`);
            lang = 'es';
        }
        const messageLang = !TEXT_TABLE[lang] ?
            console.warn(`We don't have support for language ${lang}. Please email us to hi@tavoohoh.com. Using default language: 'es'`) :
            TEXT_TABLE[lang];
        let message = messageLang[key];
        if (param) {
            message = message.replace('${param}', param);
        }
        return message;
    }
};
GsTablesService.ctorParameters = () => [
    { type: TranslateService }
];
GsTablesService.ngInjectableDef = ɵɵdefineInjectable({ factory: function GsTablesService_Factory() { return new GsTablesService(ɵɵinject(TranslateService)); }, token: GsTablesService, providedIn: "root" });
GsTablesService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], GsTablesService);

/**
 * Table design
 */
var GTableStyle;
(function (GTableStyle) {
    /**
     * Display the table with all its columns, a header. Actions are optional.
     */
    GTableStyle["TABLE"] = "TABLE";
    /**
     * Disply only the first and second column, no header. Actions are optional.
     */
    GTableStyle["SINGLE"] = "SINGLE";
})(GTableStyle || (GTableStyle = {}));

var GCountryCode;
(function (GCountryCode) {
    GCountryCode["AR"] = "ar";
    GCountryCode["BO"] = "bo";
    GCountryCode["BR"] = "br";
    GCountryCode["CA"] = "ca";
    GCountryCode["CL"] = "cl";
    GCountryCode["CO"] = "co";
    GCountryCode["CR"] = "cr";
    GCountryCode["EC"] = "ec";
    GCountryCode["MX"] = "mx";
    GCountryCode["PE"] = "pe";
    GCountryCode["US"] = "us";
    GCountryCode["UY"] = "uy";
    GCountryCode["VE"] = "ve";
})(GCountryCode || (GCountryCode = {}));
var GTypeRowEnum;
(function (GTypeRowEnum) {
    GTypeRowEnum["PHONE"] = "phone";
    GTypeRowEnum["CURRENCY"] = "currency";
})(GTypeRowEnum || (GTypeRowEnum = {}));

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
__decorate([
    Input()
], GsTablesComponent.prototype, "tableData", void 0);
__decorate([
    Input()
], GsTablesComponent.prototype, "currentPage", void 0);
__decorate([
    Input()
], GsTablesComponent.prototype, "totalOfPages", void 0);
__decorate([
    Output()
], GsTablesComponent.prototype, "rowActionClick", void 0);
__decorate([
    Output()
], GsTablesComponent.prototype, "navigateNext", void 0);
__decorate([
    Output()
], GsTablesComponent.prototype, "navigatePrevious", void 0);
__decorate([
    Output()
], GsTablesComponent.prototype, "navigateTo", void 0);
__decorate([
    Output()
], GsTablesComponent.prototype, "rowValueChanged", void 0);
__decorate([
    Output()
], GsTablesComponent.prototype, "tableDataChanged", void 0);
__decorate([
    Output()
], GsTablesComponent.prototype, "tableActionClick", void 0);
__decorate([
    ViewChild('tableContentElement', { static: false })
], GsTablesComponent.prototype, "tableContentElement", void 0);
__decorate([
    ViewChild('tableHeaderElement', { static: false })
], GsTablesComponent.prototype, "tableHeaderElement", void 0);
__decorate([
    HostBinding('attr.style')
], GsTablesComponent.prototype, "valueAsStyle", null);
__decorate([
    HostListener('window:resize', ['$event'])
], GsTablesComponent.prototype, "onResize", null);
GsTablesComponent = __decorate([
    Component({
        selector: 'gs-table',
        template: "<!-- https://material.angular.io/components/table/overview -->\n\n<ng-container>\n  <!-- GTableStyle: TABLE -->\n  <ng-container *ngIf=\"!noTableData; else noTableContent\">\n    <div class=\"gs-table\" *ngIf=\"tableStyle === tableStyleType.TABLE\">\n      <!-- header -->\n      <div class=\"gs-table-header\" [style.padding-right.px]=\"tableContentPadding\" #tableHeaderElement>\n       \n        <!-- checkbox placeholder -->\n        <span *ngIf=\"selectable\">\n          <gs-checkbox\n            class=\"checkbox-aligned\"\n            (valueChanged)=\"toggleSelectableSelection($event)\"\n            [value]=\"selectableAllSelected\">\n          </gs-checkbox>\n        </span>\n\n        <!-- additional data expandable placeholder -->\n        <span *ngIf=\"additionalData\"></span>\n\n        <!-- header keys -->\n        <ng-container *ngFor=\"let title of tableHeader\">\n          <span class=\"gs-table-header-row\">{{ title | translate }}</span>\n        </ng-container>\n\n        <!-- actions -->\n        <ng-container *ngIf=\"tableRowActions && !tableRowActions.hidden\">\n          <span class=\"gs-table-header-row\">{{ tableRowActions.text | translate }}</span>\n        </ng-container>\n      </div>\n      \n      <!-- content -->\n      <ng-container #tableContentElement *ngIf=\"tableContent && tableContentKeys\">\n        <ng-container *ngFor=\"let row of tableContent; let i = index\">\n\n          <div class=\"gs-table-row\" [class.selected-row]=\"selectedAdditionalData === i\" [class.cursor-pointer]=\"additionalData\" (click)=\"toggleAdditionalData(i, $event)\">\n            <!-- checkboxes -->\n            <ng-container *ngIf=\"selectable\">\n              <gs-checkbox\n                class=\"checkbox-aligned\"\n                (valueChanged)=\"onRowValueChanged($event)\"\n                [value]=\"row['selectable']\"\n                [rowIndex]=\"i\">\n              </gs-checkbox>\n            </ng-container>\n            \n            <!-- additional data expandable button -->\n            <ng-container *ngIf=\"additionalData\">\n              <button \n                *ngIf=\"row['additionalData']\"\n                class=\"additional-data-toggle\">\n                <svg [class.addiitonal-data-selected]=\"i === selectedAdditionalData\"  xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" >\n                  <path d=\"M13 8h-8v-1h8v1zm0 2h-8v-1h8v1zm-3 2h-5v-1h5v1zm11.172 12l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z\"/>\n                </svg>\n              </button>\n              <span *ngIf=\"!row['additionalData']\"></span>\n            </ng-container>\n\n            <!-- content -->\n            <ng-container *ngFor=\"let key of tableContentKeys\">\n              <span class=\"gs-table-row_text\" *ngIf=\"row[key]\">\n                <!-- custom template reference -->\n                <ng-container *ngIf=\"row[key]['template']; else simpleValue\">\n                  <ng-container *ngTemplateOutlet=\"row[key]['template']; context:row[key]\"></ng-container>\n                </ng-container>\n\n                <!-- default value rendering -->\n                <ng-template #simpleValue>\n                  {{ row[key] | translate }}\n                </ng-template>\n              </span>\n            </ng-container>\n\n            <!-- actions -->\n            <ng-container *ngIf=\"tableRowActions && !tableRowActions.hidden\">\n              <gs-table-row-actions\n                [rowAction]=\"tableRowActions\"\n                [rowData]=\"row\"\n                (rowActionEvent)=\"hdlRowAction($event)\">\n              </gs-table-row-actions>\n            </ng-container>\n          </div>\n\n          <div class=\"gs-table-row additional-data-row selected-row\" *ngIf=\"additionalData && row['additionalData'] && selectedAdditionalData === i\">\n            <gs-table-additional-data [additionalData]=\"row['additionalData']\">\n            </gs-table-additional-data>\n          </div>\n        </ng-container>\n      </ng-container>\n\n      <!-- footer -->\n      <ng-container *ngTemplateOutlet=\"footer\"></ng-container>\n    </div>\n  </ng-container>\n\n  <!-- GTableStyle: SINGLE -->\n  <div class=\"gs-table-single\" *ngIf=\"tableStyle === tableStyleType.SINGLE\">\n    <!-- content -->\n    <div class=\"gs-table-content\" *ngIf=\"tableContent && tableContentKeys\">\n      <div class=\"gs-table-row\" *ngFor=\"let row of tableContent\">\n        <ng-container *ngFor=\"let key of tableContentKeys\">\n          <span class=\"gs-table-row_text\">{{ row[key] }}</span>\n        </ng-container>\n        <ng-container *ngIf=\"tableRowActions && tableRowActions.actions.length !== 0 && !tableRowActions.hidden\">\n          <gs-table-row-actions\n            [rowAction]=\"tableRowActions\"\n            [rowData]=\"row\"\n            (rowActionEvent)=\"hdlRowAction($event)\">\n          </gs-table-row-actions>\n        </ng-container>\n      </div>\n    </div>\n\n    <!-- footer -->\n    <ng-container *ngTemplateOutlet=\"footer\"></ng-container>\n  </div>\n</ng-container>\n\n<ng-template #footer>\n  <div class=\"gs-table-footer\" *ngIf=\"currentPage && totalOfPages\">\n    <div class=\"gs-table-actions\">\n      <!-- element count -->\n      <span class=\"gs-table-navigation_count\">\n        {{ currentPage }} - {{ totalOfPages }}\n      </span>\n\n      <!-- navigate to first page -->\n      <button\n        type=\"button\"\n        class=\"gs-table-navigation-btn rotate180\"\n        [class.disabled]=\"currentPage === 1\"\n        (click)=\"onNavigateTo(1)\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n          <path d=\"M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205zm18.04 8.205l-8.167 8.205 2.995 2.98 11.132-11.185-11.132-11.186-2.995 2.98 8.167 8.206z\"/>\n        </svg>\n      </button>\n\n      <!-- navigate to next page -->\n      <button\n        type=\"button\"\n        class=\"gs-table-navigation-btn\"\n        [class.disabled]=\"!canNavigatePrevious\"\n        (click)=\"onNavigate(false)\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n          <path d=\"M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z\"/>\n        </svg>\n      </button>\n\n      <!-- navigate to previous page -->\n      <button\n        type=\"button\"\n        class=\"gs-table-navigation-btn\"\n        [class.disabled]=\"!canNavigateNext\"\n        (click)=\"onNavigate(true)\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n          <path d=\"M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z\"/>\n        </svg>\n      </button>\n\n      <!-- navigate to last page -->\n      <button\n        type=\"button\"\n        class=\"gs-table-navigation-btn\"\n        [class.disabled]=\"currentPage === totalOfPages\"\n        (click)=\"onNavigateTo(totalOfPages)\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n          <path d=\"M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205zm18.04 8.205l-8.167 8.205 2.995 2.98 11.132-11.185-11.132-11.186-2.995 2.98 8.167 8.206z\"/>\n        </svg>\n      </button>\n    </div>\n\n    <div class=\"gs-table-custom-actions\" *ngIf=\"customFooterActions\">\n      <button \n        *ngFor=\"let action of customFooterActions\"\n        class=\"gs-table-custom-action-btn\"\n        [class.disabled]=\"action.disabled\"\n        type=\"button\"\n        (click)=\"onFooterActionClicked(action)\">\n        {{ action.label | translate }}\n      </button>\n    </div>\n  </div>\n</ng-template>\n\n<ng-template #noTableContent>\n  <div class=\"no-data\">\n    <span class=\"header\">\n      <span></span>\n      <span></span>\n      <span></span>\n      <span></span>\n    </span>\n    <span class=\"body\">\n      {{ noContentText | translate }}\n    </span>\n    <span class=\"footer\">\n      <span></span>\n      <span></span>\n      <div></div>\n    </span>\n  </div>\n</ng-template>",
        styles: ["*{font-family:Arial,Helvetica,sans-serif;color:var(--gs-font-color,inherit);font-size:var(--gs-font-size,.9rem);outline:0;box-sizing:border-box;line-height:1.4}.disabled{opacity:.5;cursor:default;pointer-events:none}.button{-webkit-transition:.2s ease-in-out;transition:.2s ease-in-out;cursor:pointer;border:none;text-align:center;font-weight:700;outline:0;padding:var(--gs-button-padding,.5rem);color:var(--gs-button-color,#fff);background-color:var(--gs-button-background,#f33959);border:1px solid var(--gs-button-border-color,#f33959);border-radius:var(--gs-button-border-radius,6px)}.button:hover{opacity:.8}:host ::ng-deep .gs-table-row:last-child gs-table-row-actions div.action div.options.dropdown,:host ::ng-deep .gs-table-row:nth-last-child(2) gs-table-row-actions div.action div.options.dropdown,:host ::ng-deep .gs-table-row:nth-last-child(3) gs-table-row-actions div.action div.options.dropdown{top:-30px}input::-moz-focus-inner{border:0!important}a,a:active,a:focus,a:hover,button,button:active,button:focus,button:hover{outline:0!important}.gs-table{border:1px solid var(--gs-border-color,#eee);background-color:var(--gs-white-color,#fff)}.gs-table .gs-table-header span{text-align:left;color:var(--gs-font-color,inherit);fill:var(--gs-font-color,inherit);font-weight:700;font-size:80%;opacity:.6}.gs-table .gs-table-header,.gs-table .gs-table-row{display:grid;grid-template-columns:var(--gs-repeat,repeat(auto-fit,minmax(180px,1fr)))}.gs-table .gs-table-footer,.gs-table .gs-table-header,.gs-table .gs-table-row{height:50px;padding-left:1rem;padding-right:1rem;border-bottom:1px solid var(--gs-border-color,#eee)}.gs-table .gs-table-footer *,.gs-table .gs-table-header *,.gs-table .gs-table-row *{align-self:center}.gs-table .gs-table-footer{border-bottom:none;display:grid;gap:.5rem;grid-template-columns:auto 1fr}.gs-table .gs-table-footer .gs-table-actions{display:grid;gap:.5rem;grid-template-columns:auto repeat(4,1rem) 1fr}.gs-table .gs-table-footer .gs-table-actions .gs-table-action-btn,.gs-table .gs-table-footer .gs-table-actions .gs-table-navigation-btn,.gs-table .gs-table-footer .gs-table-actions .gs-table-navigation_count{align-self:center}.gs-table .gs-table-footer .gs-table-actions .gs-table-navigation_count{padding-right:1rem}.gs-table .gs-table-footer .gs-table-actions .gs-table-action-btn,.gs-table .gs-table-footer .gs-table-actions .gs-table-navigation-btn{outline:0;background:0 0;padding:0;margin:0;border:none;cursor:pointer}.gs-table .gs-table-footer .gs-table-actions .gs-table-navigation-btn svg{width:12px}.gs-table .gs-table-footer .gs-table-actions .gs-table-action-btn svg{width:20px}.gs-table .gs-table-footer .gs-table-actions .rotate180{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}.gs-table .gs-table-footer .gs-table-custom-actions{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;margin-left:auto}.gs-table .gs-table-footer .gs-table-custom-actions .gs-table-custom-action-btn{-webkit-transition:.2s ease-in-out;transition:.2s ease-in-out;align-self:center;margin:0 0 0 .5rem;padding:.5rem;font-size:.8rem;color:var(--gs-button-background,#f33959);background:0 0;border-radius:0;border:1px solid var(--gs-button-background,#f33959);cursor:pointer;line-height:1}.gs-table .gs-table-footer .gs-table-custom-actions .gs-table-custom-action-btn:hover{color:var(--gs-button-color,#fff);background:var(--gs-button-background,#f33959)}.gs-table .gs-table-footer span{color:var(--gs-font-color,inherit);fill:var(--gs-font-color,inherit);font-weight:700;font-size:80%;opacity:.6}.gs-table .gs-table-row .gs-table-row_text{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.gs-table .gs-table-row .gs-table-row_text:hover{line-height:1.5em;max-height:3em;white-space:initial;word-break:break-all}.no-data{display:grid;grid-template-rows:100px}.no-data .footer,.no-data .header{gap:1rem;align-self:center;display:none}.no-data .footer span,.no-data .header span{height:12px;background-color:#eee;border-radius:14px}.no-data .header{grid-template-columns:repeat(4,1fr)}.no-data .footer{grid-template-columns:repeat(2,30px) 1fr}.no-data .body{align-self:center;text-align:center;font-weight:700}.additional-data-toggle{display:block;align-self:center;background:0 0;cursor:pointer;outline:0;border:none;padding:0;margin-right:auto;line-height:.9}.additional-data-toggle svg{width:16px;opacity:.6;-webkit-transition:.2s ease-in-out;transition:.2s ease-in-out}.additional-data-toggle svg.addiitonal-data-selected{fill:var(--gs-button-background,#f33959);opacity:1}.additional-data-row{display:block!important;grid-template-columns:unset!important;height:auto!important}.selected-row{background-color:var(--gs-border-color,#eee)}.cursor-pointer{cursor:pointer}.checkbox-aligned{align-self:center;display:block;height:16px}"]
    }),
    __param(2, Inject('customStyles'))
], GsTablesComponent);

let GsTableRowActionsComponent = class GsTableRowActionsComponent {
    constructor() {
        this.menuHasActions = false;
        this.rowActionEvent = new EventEmitter();
    }
    clickout(event) {
        if (this.optionsButton && this.optionsButton.nativeElement.contains(event.target)) {
            this.onToggleActionsMenu();
        }
        else if (this.openMenu && !this.optionsContainer.nativeElement.contains(event.target)) {
            this.openMenu = false;
        }
    }
    ngOnChanges(changes) {
        if (changes.rowAction && changes.rowAction.currentValue && changes.rowAction.currentValue.actions) {
            changes.rowAction.currentValue.actions.forEach((action) => {
                if (this.displayActionIf(action)) {
                    this.menuHasActions = true;
                }
            });
        }
        else {
            this.menuHasActions = false;
        }
    }
    hdlAction(action) {
        this.openMenu = false;
        action.row = this.rowData;
        this.rowActionEvent.emit(action);
    }
    onToggleActionsMenu() {
        this.openMenu = !this.openMenu;
    }
    displayActionIf(action) {
        if (action.hidden) {
            return false;
        }
        else if (action.displayIf) {
            return this.rowData[action.displayIf.model].toString() === action.displayIf.hasValue.toString() ? true : false;
        }
        else {
            return true;
        }
    }
};
__decorate([
    ViewChild('optionsContainer', { static: false })
], GsTableRowActionsComponent.prototype, "optionsContainer", void 0);
__decorate([
    ViewChild('optionsButton', { static: true })
], GsTableRowActionsComponent.prototype, "optionsButton", void 0);
__decorate([
    Input()
], GsTableRowActionsComponent.prototype, "rowAction", void 0);
__decorate([
    Input()
], GsTableRowActionsComponent.prototype, "rowData", void 0);
__decorate([
    Output()
], GsTableRowActionsComponent.prototype, "rowActionEvent", void 0);
__decorate([
    HostListener('document:click', ['$event'])
], GsTableRowActionsComponent.prototype, "clickout", null);
GsTableRowActionsComponent = __decorate([
    Component({
        selector: 'gs-table-row-actions',
        template: "<div class=\"action\" [class.show]=\"menuHasActions\">\n  <button class=\"button button-secondary\" #optionsButton id=\"rowActionButton\">\n    {{ rowAction.text | translate }}\n    <svg *ngIf=\"!openMenu\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" id=\"gsbtnany\">\n      <path d=\"M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z\" id=\"gsbtnany\"/>\n    </svg>\n    <svg *ngIf=\"openMenu\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" id=\"gsbtnany\">\n      <path d=\"M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z\" id=\"gsbtnany\"/>\n    </svg>\n  </button>\n  <ng-container *ngIf=\"openMenu\">\n    <div class=\"options dropdown\" #optionsContainer id=\"gsbtnany\">\n      <ng-container *ngFor=\"let action of rowAction.actions\">\n        <span (click)=\"hdlAction(action)\" *ngIf=\"displayActionIf(action)\" id=\"gsbtnany\">\n          {{ action.text | translate }}\n        </span>\n      </ng-container>\n    </div>\n  </ng-container>\n</div>",
        styles: ["*{font-family:Arial,Helvetica,sans-serif;color:var(--gs-font-color,inherit);font-size:var(--gs-font-size,.9rem);outline:0;box-sizing:border-box;line-height:1.4}.disabled{opacity:.5;cursor:default;pointer-events:none}.button{-webkit-transition:.2s ease-in-out;transition:.2s ease-in-out;cursor:pointer;border:none;text-align:center;outline:0;padding:var(--gs-button-padding,.5rem);color:var(--gs-button-color,#fff);background-color:var(--gs-button-background,#f33959);border:1px solid var(--gs-button-border-color,#f33959);border-radius:var(--gs-button-border-radius,6px);display:inherit;font-size:70%;font-weight:700;padding:var(--gs-button-padding,.5rem);margin:7px auto}.button:hover{opacity:.8}:host ::ng-deep .gs-table-row:last-child gs-table-row-actions div.action div.options.dropdown,:host ::ng-deep .gs-table-row:nth-last-child(2) gs-table-row-actions div.action div.options.dropdown,:host ::ng-deep .gs-table-row:nth-last-child(3) gs-table-row-actions div.action div.options.dropdown{top:-30px}input::-moz-focus-inner{border:0!important}a,a:active,a:focus,a:hover,button,button:active,button:focus,button:hover{outline:0!important}.button svg{fill:var(--gs-font-color,inherit);width:8px;height:8px;margin-left:3px}.action{position:relative;display:none}.options{position:absolute;font-size:80%;z-index:1000;padding:4px;background:var(--gs-white-color,#fff);box-shadow:0 8px 14px rgba(0,0,0,.08),0 10px 10px rgba(0,0,0,.1);border-radius:6px;line-height:1}.options span{-webkit-transition:.2s ease-in-out;transition:.2s ease-in-out;display:inline-block;padding:6px;line-height:1;cursor:pointer;color:var(--gs-font-color,inherit);text-overflow:ellipsis;overflow:hidden;white-space:nowrap;max-width:160px}.options span:hover{opacity:.8}.options.dropdown{top:28px;right:calc(40% - 10px)}.options.dropdown span{width:100%}.show{display:block}"]
    })
], GsTableRowActionsComponent);

let GsAdditionalDataComponent = class GsAdditionalDataComponent {
    ngOnChanges(changes) {
        if (changes.additionalData.currentValue) {
            this.additionalData = changes.additionalData.currentValue;
        }
    }
};
__decorate([
    Input()
], GsAdditionalDataComponent.prototype, "additionalData", void 0);
GsAdditionalDataComponent = __decorate([
    Component({
        selector: 'gs-table-additional-data',
        template: "<div class=\"additional-data\">\n  <div *ngFor=\"let data of additionalData; let i = index\">\n    <b>{{ data.label | translate }}: </b>\n\n    <!-- custom template reference -->\n    <ng-container *ngIf=\"data.value['template']; else simpleValue\">\n      <ng-container *ngTemplateOutlet=\"data.value['template']; context:data.value\"></ng-container>\n    </ng-container>\n\n    <!-- default value rendering -->\n    <ng-template #simpleValue>\n      <span>{{ data.value | translate }}</span>\n    </ng-template>\n  </div>\n</div>",
        styles: ["*{font-family:Arial,Helvetica,sans-serif;color:var(--gs-font-color,inherit);font-size:var(--gs-font-size,.9rem);outline:0;box-sizing:border-box;line-height:1.4}.disabled{opacity:.5;cursor:default;pointer-events:none}.button{-webkit-transition:.2s ease-in-out;transition:.2s ease-in-out;cursor:pointer;border:none;text-align:center;font-weight:700;outline:0;padding:var(--gs-button-padding,.5rem);color:var(--gs-button-color,#fff);background-color:var(--gs-button-background,#f33959);border:1px solid var(--gs-button-border-color,#f33959);border-radius:var(--gs-button-border-radius,6px)}.button:hover{opacity:.8}:host ::ng-deep .gs-table-row:last-child gs-table-row-actions div.action div.options.dropdown,:host ::ng-deep .gs-table-row:nth-last-child(2) gs-table-row-actions div.action div.options.dropdown,:host ::ng-deep .gs-table-row:nth-last-child(3) gs-table-row-actions div.action div.options.dropdown{top:-30px}input::-moz-focus-inner{border:0!important}a,a:active,a:focus,a:hover,button,button:active,button:focus,button:hover{outline:0!important}.additional-data{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:1rem;padding:1rem 0;background:0 0}.additional-data div b{color:var(--gs-font-color,inherit);opacity:.6}.additional-data div span{color:var(--gs-font-color,inherit)}"]
    })
], GsAdditionalDataComponent);

let GsCheckboxComponent = class GsCheckboxComponent {
    constructor() {
        this.valueChanged = new EventEmitter();
    }
    ngOnChanges(changes) {
        if (changes) {
            if (changes.value && changes.value.currentValue) {
                this.value = changes.value.currentValue;
            }
            if (changes.rowIndex && changes.rowIndex.currentValue) {
                this.rowIndex = changes.rowIndex.currentValue;
            }
        }
    }
    onValueChanged() {
        this.valueChanged.emit({
            value: this.value,
            index: this.rowIndex || null
        });
    }
};
__decorate([
    Input()
], GsCheckboxComponent.prototype, "value", void 0);
__decorate([
    Input()
], GsCheckboxComponent.prototype, "rowIndex", void 0);
__decorate([
    Output()
], GsCheckboxComponent.prototype, "valueChanged", void 0);
GsCheckboxComponent = __decorate([
    Component({
        selector: 'gs-checkbox',
        template: "<label class=\"gs-checkbox\" id=\"gsbtnany\">\n  <input\n    id=\"gsbtnany\"\n    type=\"checkbox\"\n    (change)=\"onValueChanged()\"\n    [(ngModel)]=\"value\"\n    [checked]=\"value\">\n  <div class=\"gs-checkmark\"id=\"gsbtnany\" [class.gs-checked]=\"value\">\n    <svg id=\"gsbtnany\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n      <path d=\"M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z\"/>\n    </svg>\n  </div>\n</label>\n",
        styles: ["*{font-family:Arial,Helvetica,sans-serif;color:var(--gs-font-color,inherit);font-size:var(--gs-font-size,.9rem);outline:0;box-sizing:border-box;line-height:1.4}.disabled{opacity:.5;cursor:default;pointer-events:none}.button{-webkit-transition:.2s ease-in-out;transition:.2s ease-in-out;cursor:pointer;border:none;text-align:center;font-weight:700;outline:0;padding:var(--gs-button-padding,.5rem);color:var(--gs-button-color,#fff);background-color:var(--gs-button-background,#f33959);border:1px solid var(--gs-button-border-color,#f33959);border-radius:var(--gs-button-border-radius,6px)}.button:hover{opacity:.8}:host ::ng-deep .gs-table-row:last-child gs-table-row-actions div.action div.options.dropdown,:host ::ng-deep .gs-table-row:nth-last-child(2) gs-table-row-actions div.action div.options.dropdown,:host ::ng-deep .gs-table-row:nth-last-child(3) gs-table-row-actions div.action div.options.dropdown{top:-30px}input::-moz-focus-inner{border:0!important}a,a:active,a:focus,a:hover,button,button:active,button:focus,button:hover{outline:0!important}.gs-checkbox{-webkit-transition:.2s ease-in-out;transition:.2s ease-in-out;display:block;position:relative;align-self:center;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin:0;padding:0;height:16px;width:16px;background-color:var(--gs-border-color,#eee)}.gs-checkbox:hover{opacity:.5;background:var(--gs-button-background,#f33959)}.gs-checkbox input{position:absolute;opacity:0;cursor:pointer;height:0;width:0;padding:0;margin:0;pointer-events:none}.gs-checkbox .gs-checkmark{display:grid;height:16px;width:16px;padding:0;outline:0;border:none}.gs-checkbox .gs-checkmark svg{position:relative;display:none;align-self:center;height:10.6666666667px;width:10.6666666667px;margin:0 auto;fill:var(--gs-white-color,#fff)}.gs-checkbox .gs-checkmark.gs-checked{background:var(--gs-button-background,#f33959)}.gs-checkbox .gs-checkmark.gs-checked svg{display:block}"]
    })
], GsCheckboxComponent);

var GsTablesModule_1;
let GsTablesModule = GsTablesModule_1 = class GsTablesModule {
    static forRoot(styles) {
        return {
            ngModule: GsTablesModule_1,
            providers: [
                {
                    provide: 'customStyles',
                    useValue: styles
                }
            ]
        };
    }
};
GsTablesModule = GsTablesModule_1 = __decorate([
    NgModule({
        declarations: [
            GsTablesComponent,
            GsTableRowActionsComponent,
            GsAdditionalDataComponent,
            GsCheckboxComponent
        ],
        imports: [
            CommonModule,
            TranslateModule,
            HttpClientModule,
            FormsModule
        ],
        exports: [GsTablesComponent]
    })
], GsTablesModule);

/*
 * Public API Surface of gs-tables
 */

/**
 * Generated bundle index. Do not edit.
 */

export { GCountryCode, GTableStyle, GTypeRowEnum, GsTablesComponent, GsTablesModule, GsTablesService, LOCATION, TEXT_TABLE, GsTableRowActionsComponent as ɵa, GsAdditionalDataComponent as ɵb, GsCheckboxComponent as ɵc };
//# sourceMappingURL=rappipay-gs-tables.js.map
