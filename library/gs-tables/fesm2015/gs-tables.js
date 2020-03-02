import { __decorate, __param } from 'tslib';
import { ɵɵdefineInjectable, Injectable, EventEmitter, Inject, Input, Output, ViewChild, HostBinding, HostListener, Component, NgModule } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';

let GsTablesService = class GsTablesService {
    constructor() { }
    objectKeysToArray(rawArray) {
        const contentKeys = [];
        for (const keys in rawArray[0]) {
            if (Object.prototype.hasOwnProperty.call(rawArray[0], keys) && rawArray[0][keys]) {
                contentKeys.push(keys);
            }
        }
        return contentKeys;
    }
};
GsTablesService.ngInjectableDef = ɵɵdefineInjectable({ factory: function GsTablesService_Factory() { return new GsTablesService(); }, token: GsTablesService, providedIn: "root" });
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
], GsTablesComponent.prototype, "rowActionEvent", void 0);
__decorate([
    Output()
], GsTablesComponent.prototype, "navigateNext", void 0);
__decorate([
    Output()
], GsTablesComponent.prototype, "navigatePrevious", void 0);
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
        template: "<!-- https://material.angular.io/components/table/overview -->\r\n\r\n<ng-container *ngIf=\"!noTableData\">\r\n  <!-- GTableStyle: TABLE -->\r\n  <div class=\"gs-table\" *ngIf=\"tableStyle === tableStyleType.TABLE\">\r\n    <!-- header -->\r\n    <div class=\"gs-table-header\" [style.padding-right.px]=\"tableContentPadding\" #tableHeaderElement>\r\n      <ng-container *ngFor=\"let title of tableHeader\">\r\n        <span class=\"gs-table-header-row\">{{ title | translate }}</span>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"tableRowActions && tableRowActions.display\">\r\n        <span class=\"gs-table-header-row\">{{ tableRowActions.text }}</span>\r\n      </ng-container>\r\n    </div>\r\n    \r\n    <!-- content -->\r\n    <ng-container #tableContentElement *ngIf=\"tableContent && tableContentKeys\">\r\n      <div class=\"gs-table-row\" *ngFor=\"let row of tableContent\">\r\n        <ng-container *ngFor=\"let key of tableContentKeys\">\r\n          <span class=\"gs-table-row_text\">{{ row[key] | translate }}</span>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"tableRowActions && tableRowActions.display\">\r\n          <gs-table-row-actions\r\n            [rowAction]=\"tableRowActions\"\r\n            [rowData]=\"row\"\r\n            (rowActionEvent)=\"hdlRowAction($event)\">\r\n          </gs-table-row-actions>\r\n        </ng-container>\r\n      </div>\r\n    </ng-container>\r\n\r\n    <!-- footer -->\r\n    <ng-container *ngTemplateOutlet=\"footer\"></ng-container>\r\n  </div>\r\n\r\n  <!-- GTableStyle: SINGLE -->\r\n  <div class=\"gs-table-single\" *ngIf=\"tableStyle === tableStyleType.SINGLE\">\r\n    <!-- content -->\r\n    <div class=\"gs-table-content\" *ngIf=\"tableContent && tableContentKeys\">\r\n      <div class=\"gs-table-row\" *ngFor=\"let row of tableContent\">\r\n        <ng-container *ngFor=\"let key of tableContentKeys\">\r\n          <span class=\"gs-table-row_text\">{{ row[key] }}</span>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"tableRowActions && tableRowActions.display\">\r\n          <gs-table-row-actions\r\n            [rowAction]=\"tableRowActions\"\r\n            [rowData]=\"row\"\r\n            (rowActionEvent)=\"hdlRowAction($event)\">\r\n          </gs-table-row-actions>\r\n        </ng-container>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- footer -->\r\n    <ng-container *ngTemplateOutlet=\"footer\"></ng-container>\r\n  </div>\r\n</ng-container>\r\n\r\n<ng-template #footer>\r\n  <div class=\"gs-table-footer\" *ngIf=\"currentPage && totalOfPages\">\r\n\r\n      <!-- element count -->\r\n      <span class=\"gs-table-navigation_count\">\r\n        {{ currentPage }} - {{ totalOfPages }}\r\n      </span>\r\n\r\n      <!-- navigation controlls -->\r\n      <button\r\n        type=\"button\"\r\n        class=\"gs-table-navigation-left\"\r\n        [class.disabled]=\"!canNavigatePrevious\"\r\n        (click)=\"onNavigate(true)\"\r\n      >\r\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\r\n          <path d=\"M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z\"/>\r\n        </svg>\r\n      </button>\r\n\r\n      <button\r\n        type=\"button\"\r\n        class=\"gs-table-navigation-right\"\r\n        [class.disabled]=\"!canNavigateNext\"\r\n        (click)=\"onNavigate(false)\"\r\n      >\r\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\r\n          <path d=\"M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z\"/>\r\n        </svg>\r\n      </button>\r\n\r\n  </div>\r\n</ng-template>",
        styles: ["*{font-family:Arial,Helvetica,sans-serif;color:var(--gs-font-color,inherit);font-size:var(--gs-font-size,.9rem);outline:0;box-sizing:border-box;line-height:1.4}.disabled{opacity:.7;cursor:default;pointer-events:none}.button{-webkit-transition:.2s ease-in-out;transition:.2s ease-in-out;cursor:pointer;border:none;text-align:center;font-weight:700;outline:0;padding:var(--gs-button-padding,.5rem);color:var(--gs-button-color,#fff);background-color:var(--gs-button-background,#f33959);border:1px solid var(--gs-button-border-color,#f33959);border-radius:var(--gs-button-border-radius,6px)}.button:hover{opacity:.8}:host ::ng-deep .gs-table-row:last-child gs-table-row-actions div.action div.options.dropdown,:host ::ng-deep .gs-table-row:nth-last-child(2) gs-table-row-actions div.action div.options.dropdown,:host ::ng-deep .gs-table-row:nth-last-child(3) gs-table-row-actions div.action div.options.dropdown{top:-70px}.gs-table{border:1px solid var(--gs-border-color,#eee);background-color:var(--gs-white-color,#fff)}.gs-table .gs-table-header span{text-align:left;color:var(--gs-font-color,inherit);fill:var(--gs-font-color,inherit);font-weight:700;font-size:80%;opacity:.6}.gs-table .gs-table-header,.gs-table .gs-table-row{display:grid;grid-template-columns:var(--gs-repeat,repeat(auto-fit,minmax(180px,1fr)))}.gs-table .gs-table-footer,.gs-table .gs-table-header,.gs-table .gs-table-row{height:50px;padding-left:1rem;padding-right:1rem;border-bottom:1px solid var(--gs-border-color,#eee)}.gs-table .gs-table-footer *,.gs-table .gs-table-header *,.gs-table .gs-table-row *{align-self:center}.gs-table .gs-table-footer{border-bottom:none;display:grid;gap:2rem;grid-template-columns:-webkit-max-content auto repeat(2,-webkit-min-content);grid-template-columns:max-content auto repeat(2,min-content)}.gs-table .gs-table-footer span{color:var(--gs-font-color,inherit);fill:var(--gs-font-color,inherit);font-weight:700;font-size:80%;opacity:.6}.gs-table .gs-table-footer .gs-table-navigation-left,.gs-table .gs-table-footer .gs-table-navigation-right,.gs-table .gs-table-footer .gs-table-navigation_count{align-self:center}.gs-table .gs-table-footer .gs-table-navigation_count{grid-column:1}.gs-table .gs-table-footer .gs-table-navigation-left{grid-column:3}.gs-table .gs-table-footer .gs-table-navigation-right{grid-column:4}.gs-table .gs-table-footer .gs-table-navigation-left,.gs-table .gs-table-footer .gs-table-navigation-right{outline:0;background:0 0;padding:0;margin:0;border:none;cursor:pointer}.gs-table .gs-table-footer .gs-table-navigation-left svg,.gs-table .gs-table-footer .gs-table-navigation-right svg{width:12px}"]
    }),
    __param(2, Inject('customStyles'))
], GsTablesComponent);

let GsTableRowActionsComponent = class GsTableRowActionsComponent {
    constructor() {
        this.rowActionEvent = new EventEmitter();
    }
    clickout(event) {
        if (this.optionsButton.nativeElement.contains(event.target)) {
            this.onToggleShowActions();
        }
        else if (this.showActions && !this.optionsContainer.nativeElement.contains(event.target)) {
            this.showActions = false;
        }
    }
    hdlAction(action) {
        this.showActions = false;
        action.row = this.rowData;
        this.rowActionEvent.emit(action);
    }
    onToggleShowActions() {
        this.showActions = !this.showActions;
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
        template: "<div class=\"action\">\r\n  <button class=\"button button-secondary\" #optionsButton>\r\n    {{ rowAction.text }}\r\n    <svg *ngIf=\"!showActions\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\r\n      <path d=\"M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z\"/>\r\n    </svg>\r\n    <svg *ngIf=\"showActions\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\r\n      <path d=\"M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z\"/>\r\n    </svg>\r\n  </button>\r\n  <ng-container *ngIf=\"showActions\">\r\n    <div class=\"options dropdown\" #optionsContainer>\r\n      <ng-container *ngFor=\"let action of rowAction.actions\">\r\n        <span (click)=\"hdlAction(action)\" *ngIf=\"action.display\">\r\n          {{ action.text }}\r\n        </span>\r\n      </ng-container>\r\n    </div>\r\n  </ng-container>\r\n</div>",
        styles: ["*{font-family:Arial,Helvetica,sans-serif;color:var(--gs-font-color,inherit);font-size:var(--gs-font-size,.9rem);outline:0;box-sizing:border-box;line-height:1.4}.disabled{opacity:.7;cursor:default;pointer-events:none}.button{-webkit-transition:.2s ease-in-out;transition:.2s ease-in-out;cursor:pointer;border:none;text-align:center;outline:0;padding:var(--gs-button-padding,.5rem);color:var(--gs-button-color,#fff);background-color:var(--gs-button-background,#f33959);border:1px solid var(--gs-button-border-color,#f33959);border-radius:var(--gs-button-border-radius,6px);display:inherit;font-size:70%;font-weight:700;padding:var(--gs-button-padding,.5rem);margin:7px auto}.button:hover{opacity:.8}:host ::ng-deep .gs-table-row:last-child gs-table-row-actions div.action div.options.dropdown,:host ::ng-deep .gs-table-row:nth-last-child(2) gs-table-row-actions div.action div.options.dropdown,:host ::ng-deep .gs-table-row:nth-last-child(3) gs-table-row-actions div.action div.options.dropdown{top:-70px}.button svg{fill:var(--gs-font-color,inherit);width:8px;height:8px;margin-left:3px}.action{position:relative}.options{position:absolute;font-size:80%;z-index:1000;padding:4px;background:var(--gs-white-color,#fff);box-shadow:0 8px 14px rgba(0,0,0,.08),0 10px 10px rgba(0,0,0,.1);border-radius:6px;width:-webkit-max-content;width:-moz-max-content;width:max-content;line-height:1}.options span{-webkit-transition:.2s ease-in-out;transition:.2s ease-in-out;display:inline-block;width:160px;padding:6px;line-height:1;cursor:pointer;color:var(--gs-font-color,inherit);text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.options span:hover{opacity:.8}.options.dropdown{width:100px;top:28px;right:calc(40% - 10px)}.options.dropdown span{width:100%}"]
    })
], GsTableRowActionsComponent);

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
            GsTableRowActionsComponent
        ],
        imports: [
            CommonModule,
            TranslateModule,
            HttpClientModule
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

export { GTableStyle, GsTablesComponent, GsTablesModule, GsTablesService, GsTableRowActionsComponent as ɵa };
//# sourceMappingURL=gs-tables.js.map
