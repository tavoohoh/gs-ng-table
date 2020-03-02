import * as tslib_1 from "tslib";
import { Component, Input, HostBinding, HostListener, ViewChild, Inject, Output, EventEmitter } from '@angular/core';
import { GTableStyle } from './gs-tables.widgets';
import { GsTablesService } from './gs-tables.service';
import { DomSanitizer } from '@angular/platform-browser';
// https://uxdesign.cc/design-better-data-tables-4ecc99d23356
var GsTablesComponent = /** @class */ (function () {
    function GsTablesComponent(sanitizer, tableService, customStyles) {
        this.sanitizer = sanitizer;
        this.tableService = tableService;
        this.rowActionEvent = new EventEmitter();
        this.navigateNext = new EventEmitter();
        this.navigatePrevious = new EventEmitter();
        this.tableStyleType = GTableStyle;
        this.customStyles = customStyles;
    }
    GsTablesComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
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
        setTimeout(function () {
            _this.setContentWidth();
        });
    };
    GsTablesComponent.prototype.setTableFooter = function () {
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
    };
    GsTablesComponent.prototype.tableDataAdapter = function () {
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
    };
    Object.defineProperty(GsTablesComponent.prototype, "valueAsStyle", {
        get: function () {
            var variables = '';
            // Layout
            if (!this.noTableData && this.tableStyle === GTableStyle.TABLE && this.tableHeader.length) {
                if (this.tableRowActions && this.tableRowActions.display) {
                    variables = variables + ("--gs-repeat: repeat(" + (this.tableHeader.length + 1) + ", 1fr)!important;");
                }
                else {
                    variables = variables + ("--gs-repeat: repeat(" + this.tableHeader.length + ", 1fr)!important;");
                }
            }
            // UI
            if (this.customStyles) {
                if (this.customStyles.color) {
                    variables = variables + ("--gs-font-color: " + this.customStyles.color + "!important;");
                }
                if (this.customStyles.ui.fontSize) {
                    variables = variables + ("--gs-font-size: " + this.customStyles.ui.fontSize + "!important;");
                }
                if (this.customStyles.color.primary) {
                    variables = variables + ("--gs-primary-color: " + this.customStyles.color.primary + "!important;");
                }
                if (this.customStyles.color.secondary) {
                    variables = variables + ("--gs-secondary-color: " + this.customStyles.color.secondary + "!important;");
                }
                if (this.customStyles.color.neutral) {
                    variables = variables + ("--gs-neutral-color: " + this.customStyles.color.neutral + "!important;");
                }
                if (this.customStyles.color.border) {
                    variables = variables + ("--gs-border-color: " + this.customStyles.color.border + "!important;");
                }
                if (this.customStyles.color.white) {
                    variables = variables + ("--gs-white-color: " + this.customStyles.color.white + "!important;");
                }
                if (this.customStyles.ui.padding) {
                    variables = variables + ("--gs-padding: " + this.customStyles.ui.padding + "!important;");
                }
                if (this.customStyles.ui.primaryButton) {
                    if (this.customStyles.ui.primaryButton.padding) {
                        variables = variables + ("--gs-button-padding: " + this.customStyles.ui.primaryButton.padding + "!important;");
                    }
                    if (this.customStyles.ui.primaryButton.color) {
                        variables = variables + ("--gs-button-color: " + this.customStyles.ui.primaryButton.color + "!important;");
                    }
                    if (this.customStyles.ui.primaryButton.background) {
                        variables = variables + ("--gs-button-background: " + this.customStyles.ui.primaryButton.background + "!important;");
                    }
                    if (this.customStyles.ui.primaryButton.borderSize) {
                        variables = variables + ("--gs-button-border-size: " + this.customStyles.ui.primaryButton.borderSize + "!important;");
                    }
                    if (this.customStyles.ui.primaryButton.borderStyle) {
                        variables = variables + ("--gs-button-border-style: " + this.customStyles.ui.primaryButton.borderStyle + "!important;");
                    }
                    if (this.customStyles.ui.primaryButton.borderColor) {
                        variables = variables + ("--gs-button-border-color: " + this.customStyles.ui.primaryButton.borderColor + "!important;");
                    }
                    if (this.customStyles.ui.primaryButton.borderRadius) {
                        variables = variables + ("--gs-button-border-radius: " + this.customStyles.ui.primaryButton.borderRadius + "!important;");
                    }
                    if (this.customStyles.ui.primaryButton.borderTop) {
                        variables = variables + ("--gs-button-border-top: " + this.customStyles.ui.primaryButton.borderTop + "!important;");
                    }
                    if (this.customStyles.ui.primaryButton.borderRight) {
                        variables = variables + ("--gs-button-border-right: " + this.customStyles.ui.primaryButton.borderRight + "!important;");
                    }
                    if (this.customStyles.ui.primaryButton.borderBottom) {
                        variables = variables + ("--gs-button-border-bottom: " + this.customStyles.ui.primaryButton.borderBottom + "!important;");
                    }
                    if (this.customStyles.ui.primaryButton.borderLeft) {
                        variables = variables + ("--gs-button-border-left: " + this.customStyles.ui.primaryButton.borderLeft + "!important;");
                    }
                }
            }
            return this.sanitizer.bypassSecurityTrustStyle(variables);
        },
        enumerable: true,
        configurable: true
    });
    GsTablesComponent.prototype.onResize = function (event) {
        this.setContentWidth();
    };
    GsTablesComponent.prototype.setContentWidth = function () {
        if (!this.noTableData && this.tableStyle === GTableStyle.TABLE) {
            this.tableContentPadding =
                this.tableHeaderElement.nativeElement.offsetWidth - this.tableContentElement.nativeElement.offsetWidth;
        }
    };
    GsTablesComponent.prototype.hdlRowAction = function (action) {
        this.rowActionEvent.emit(action);
    };
    GsTablesComponent.prototype.onNavigate = function (next) {
        if (next) {
            this.navigateNext.emit();
        }
        else {
            this.navigatePrevious.emit();
        }
    };
    GsTablesComponent.prototype.onInputDataError = function () {
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
    };
    GsTablesComponent.ctorParameters = function () { return [
        { type: DomSanitizer },
        { type: GsTablesService },
        { type: undefined, decorators: [{ type: Inject, args: ['customStyles',] }] }
    ]; };
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
    return GsTablesComponent;
}());
export { GsTablesComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3MtdGFibGVzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dzLXRhYmxlcy8iLCJzb3VyY2VzIjpbImxpYi9ncy10YWJsZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxXQUFXLEVBQ1gsWUFBWSxFQUNaLFNBQVMsRUFFVCxNQUFNLEVBQ04sTUFBTSxFQUNOLFlBQVksRUFHYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXlDLFdBQVcsRUFBVyxNQUFNLHFCQUFxQixDQUFDO0FBQ2xHLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFekQsNkRBQTZEO0FBTzdEO0lBd0JFLDJCQUNVLFNBQXVCLEVBQ3ZCLFlBQTZCLEVBQ2IsWUFBWTtRQUY1QixjQUFTLEdBQVQsU0FBUyxDQUFjO1FBQ3ZCLGlCQUFZLEdBQVosWUFBWSxDQUFpQjtRQXRCckIsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBZ0IsQ0FBQztRQUNsRCxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFDeEMscUJBQWdCLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQWF2RCxtQkFBYyxHQUFHLFdBQVcsQ0FBQztRQVVsQyxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztJQUNuQyxDQUFDO0lBRUQsdUNBQVcsR0FBWCxVQUFZLE9BQXNCO1FBQWxDLGlCQXlDQztRQXhDQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ1osT0FBTztTQUNSO1FBRUQsSUFBSSxPQUFPLENBQUMsU0FBUyxJQUFJLE9BQU8sQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFO1lBQ3ZELElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUM7WUFFaEQsSUFBSSxJQUFJLENBQUMs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SUFBSTtZQUMzQixPQUFPLENBQ1IsQ0FBQztJQUNKLENBQUM7O2dCQXRNb0IsWUFBWTtnQkFDVCxlQUFlO2dEQUNwQyxNQUFNLFNBQUMsY0FBYzs7SUExQmY7UUFBUixLQUFLLEVBQUU7d0RBQTJCO0lBQzFCO1FBQVIsS0FBSyxFQUFFOzBEQUE0QjtJQUMzQjtRQUFSLEtBQUssRUFBRTsyREFBNkI7SUFDM0I7UUFBVCxNQUFNLEVBQUU7NkRBQTJEO0lBQzFEO1FBQVQsTUFBTSxFQUFFOzJEQUFpRDtJQUNoRDtRQUFULE1BQU0sRUFBRTsrREFBcUQ7SUFDVDtRQUFwRCxTQUFTLENBQUMscUJBQXFCLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUM7a0VBQXlDO0lBQ3pDO1FBQW5ELFNBQVMsQ0FBQyxvQkFBb0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQztpRUFBd0M7SUFnRzNGO1FBREMsV0FBVyxDQUFDLFlBQVksQ0FBQzt5REErRXpCO0lBR0Q7UUFEQyxZQUFZLENBQUMsZUFBZSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7cURBR3pDO0lBM0xVLGlCQUFpQjtRQUw3QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsVUFBVTtZQUNwQiwybEhBQXlDOztTQUUxQyxDQUFDO1FBNEJHLG1CQUFBLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQTtPQTNCZCxpQkFBaUIsQ0FnTzdCO0lBQUQsd0JBQUM7Q0FBQSxBQWhPRCxJQWdPQztTQWhPWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBIb3N0QmluZGluZyxcbiAgSG9zdExpc3RlbmVyLFxuICBWaWV3Q2hpbGQsXG4gIEVsZW1lbnRSZWYsXG4gIEluamVjdCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIE9uQ2hhbmdlcyxcbiAgU2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEdUYWJsZSwgR1RhYmxlUm93QWN0aW9uLCBHVGFibGVBY3Rpb24sIEdUYWJsZVN0eWxlLCBHU3R5bGVzIH0gZnJvbSAnLi9ncy10YWJsZXMud2lkZ2V0cyc7XG5pbXBvcnQgeyBHc1RhYmxlc1NlcnZpY2UgfSBmcm9tICcuL2dzLXRhYmxlcy5zZXJ2aWNlJztcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG4vLyBodHRwczovL3V4ZGVzaWduLmNjL2Rlc2lnbi1iZXR0ZXItZGF0YS10YWJsZXMtNGVjYzk5ZDIzMzU2XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dzLXRhYmxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2dzLXRhYmxlcy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2dzLXRhYmxlcy5jb21wb25lbnQuc2FzcyddXG59KVxuZXhwb3J0IGNsYXNzIEdzVGFibGVzQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgcHJpdmF0ZSB0YWJsZURhdGE6IEdUYWJsZTtcbiAgQElucHV0KCkgcHVibGljIGN1cnJlbnRQYWdlOiBudW1iZXI7XG4gIEBJbnB1dCgpIHB1YmxpYyB0b3RhbE9mUGFnZXM6IG51bWJlcjtcbiAgQE91dHB1dCgpIHByaXZhdGUgcm93QWN0aW9uRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyPEdUYWJsZUFjdGlvbj4oKTtcbiAgQE91dHB1dCgpIHByaXZhdGUgbmF2aWdhdGVOZXh0ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBAT3V0cHV0KCkgcHJpdmF0ZSBuYXZpZ2F0ZVByZXZpb3VzID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBAVmlld0NoaWxkKCd0YWJsZUNvbnRlbnRFbGVtZW50JywgeyBzdGF0aWM6IGZhbHNlIH0pIHByaXZhdGUgdGFibGVDb250ZW50RWxlbWVudDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgndGFibGVIZWFkZXJFbGVtZW50JywgeyBzdGF0aWM6IGZhbHNlIH0pIHByaXZhdGUgdGFibGVIZWFkZXJFbGVtZW50OiBFbGVtZW50UmVmO1xuXG4gIHB1YmxpYyB0YWJsZUhlYWRlcjogQXJyYXk8c3RyaW5nPjtcbiAgcHVibGljIHRhYmxlQ29udGVudEtleXM6IEFycmF5PHN0cmluZz47XG4gIHB1YmxpYyB0YWJsZUNvbnRlbnQ6IEFycmF5PG9iamVjdD47XG4gIHB1YmxpYyB0YWJsZUNvbnRlbnRQYWRkaW5nOiBudW1iZXI7XG4gIHB1YmxpYyB0YWJsZVJvd0FjdGlvbnM6IEdUYWJsZVJvd0FjdGlvbjtcbiAgcHVibGljIHRhYmxlU3R5bGU6IEdUYWJsZVN0eWxlO1xuICBwcml2YXRlIGN1c3RvbVN0eWxlczogR1N0eWxlcztcblxuICBwdWJsaWMgbm9UYWJsZURhdGE6IGJvb2xlYW47XG4gIHB1YmxpYyB0YWJsZVN0eWxlVHlwZSA9IEdUYWJsZVN0eWxlO1xuXG4gIHB1YmxpYyBjYW5OYXZpZ2F0ZU5leHQ6IGJvb2xlYW47XG4gIHB1YmxpYyBjYW5OYXZpZ2F0ZVByZXZpb3VzOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIsXG4gICAgcHJpdmF0ZSB0YWJsZVNlcnZpY2U6IEdzVGFibGVzU2VydmljZSxcbiAgICBASW5qZWN0KCdjdXN0b21TdHlsZXMnKSBjdXN0b21TdHlsZXNcbiAgKSB7XG4gICAgdGhpcy5jdXN0b21TdHlsZXMgPSBjdXN0b21TdHlsZXM7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKCFjaGFuZ2VzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZXMudGFibGVEYXRhICYmIGNoYW5nZXMudGFibGVEYXRhLmN1cnJlbnRWYWx1ZSkge1xuICAgICAgdGhpcy50YWJsZURhdGEgPSBjaGFuZ2VzLnRhYmxlRGF0YS5jdXJyZW50VmFsdWU7XG5cbiAgICAgIGlmICh0aGlzLnRhYmxlRGF0YS5kYXRhKSB7XG4gICAgICAgIHRoaXMubm9UYWJsZURhdGEgPSBmYWxzZTtcbiAgICAgICAgdGhpcy50YWJsZURhdGFBZGFwdGVyKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm5vVGFibGVEYXRhID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vbklucHV0RGF0YUVycm9yKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZXMuY3VycmVudFBhZ2UgfHwgdGhpcy5jdXJyZW50UGFnZSkge1xuICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IGNoYW5nZXMuY3VycmVudFBhZ2UgPyBjaGFuZ2VzLmN1cnJlbnRQYWdlLmN1cnJlbnRWYWx1ZSA6IHRoaXMuY3VycmVudFBhZ2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSBudWxsO1xuICAgIH1cblxuICAgIGlmIChjaGFuZ2VzLnRvdGFsT2ZQYWdlcyB8fCB0aGlzLnRvdGFsT2ZQYWdlcykge1xuICAgICAgdGhpcy50b3RhbE9mUGFnZXMgPSBjaGFuZ2VzLnRvdGFsT2ZQYWdlcyA/IGNoYW5nZXMudG90YWxPZlBhZ2VzLmN1cnJlbnRWYWx1ZSA6IHRoaXMudG90YWxPZlBhZ2VzO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRvdGFsT2ZQYWdlcyA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY3VycmVudFBhZ2UgJiYgdGhpcy50b3RhbE9mUGFnZXMpIHtcbiAgICAgIHRoaXMuc2V0VGFibGVGb290ZXIoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY3VycmVudFBhZ2UgfHwgdGhpcy50b3RhbE9mUGFnZXMpIHtcbiAgICAgIHJldHVybiBjb25zb2xlLndhcm4oXG4gICAgICAgICdHUyBUYWJsZSBidWlsZGluZyB3YXJuaW5nOicgKyAnXFxuXFxuJyArXG4gICAgICAgICdJZiB5b3Ugd2lzaCB0byBkaXNwbGF5IGN1cnJlbnQgYW5kIHRvdGFsIG9mIHBhZ2VzIHBsZWFzZSBhZGQgdG8geW91ciB0YWJsZSBvcHRpb25zIGBjdXJyZW50UGFnZWAgYW5kIGB0b3RhbE9mUGFnZXNgJ1xuICAgICAgKTtcbiAgICB9XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuc2V0Q29udGVudFdpZHRoKCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHNldFRhYmxlRm9vdGVyKCkge1xuICAgIGlmICh0aGlzLmN1cnJlbnRQYWdlIDw9IDEpIHtcbiAgICAgIHRoaXMuY2FuTmF2aWdhdGVQcmV2aW91cyA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNhbk5hdmlnYXRlUHJldmlvdXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmN1cnJlbnRQYWdlICsgMSA+IHRoaXMudG90YWxPZlBhZ2VzKSB7XG4gICAgICB0aGlzLmNhbk5hdmlnYXRlTmV4dCA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNhbk5hdmlnYXRlTmV4dCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB0YWJsZURhdGFBZGFwdGVyKCkge1xuICAgIHRoaXMudGFibGVTdHlsZSA9IHRoaXMudGFibGVEYXRhLm9wdGlvbnMuc3R5bGUgfHwgR1RhYmxlU3R5bGUuVEFCTEU7XG4gICAgdGhpcy50YWJsZUNvbnRlbnQgPSB0aGlzLnRhYmxlRGF0YS5kYXRhO1xuICAgIHRoaXMudGFibGVSb3dBY3Rpb25zID0gdGhpcy50YWJsZURhdGEub3B0aW9ucy5yb3dBY3Rpb25zIHx8IG51bGw7XG4gICAgdGhpcy50YWJsZUNvbnRlbnRLZXlzID0gdGhpcy50YWJsZURhdGEua2V5TmFtZXMgPyB0aGlzLnRhYmxlRGF0YS5rZXlOYW1lcyA6IHRoaXMudGFibGVTZXJ2aWNlLm9iamVjdEtleXNUb0FycmF5KHRoaXMudGFibGVDb250ZW50KTtcblxuICAgIGlmICh0aGlzLnRhYmxlU3R5bGUgPT09IEdUYWJsZVN0eWxlLlNJTkdMRSkge1xuICAgICAgdGhpcy50YWJsZUNvbnRlbnRLZXlzID0gW3RoaXMudGFibGVDb250ZW50S2V5c1swXSwgdGhpcy50YWJsZUNvbnRlbnRLZXlzWzFdXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50YWJsZUhlYWRlciA9IHRoaXMudGFibGVEYXRhLmhlYWRlciB8fCB0aGlzLnRhYmxlQ29udGVudEtleXM7XG4gICAgfVxuXG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2F0dHIuc3R5bGUnKVxuICBwdWJsaWMgZ2V0IHZhbHVlQXNTdHlsZSgpOiBhbnkge1xuICAgIGxldCB2YXJpYWJsZXMgPSAnJztcblxuICAgIC8vIExheW91dFxuICAgIGlmICghdGhpcy5ub1RhYmxlRGF0YSAmJiB0aGlzLnRhYmxlU3R5bGUgPT09IEdUYWJsZVN0eWxlLlRBQkxFICYmIHRoaXMudGFibGVIZWFkZXIubGVuZ3RoKSB7XG4gICAgICBpZiAodGhpcy50YWJsZVJvd0FjdGlvbnMgJiYgdGhpcy50YWJsZVJvd0FjdGlvbnMuZGlzcGxheSkge1xuICAgICAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZXMgKyBgLS1ncy1yZXBlYXQ6IHJlcGVhdCgke3RoaXMudGFibGVIZWFkZXIubGVuZ3RoICsgMX0sIDFmcikhaW1wb3J0YW50O2A7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZXMgKyBgLS1ncy1yZXBlYXQ6IHJlcGVhdCgke3RoaXMudGFibGVIZWFkZXIubGVuZ3RofSwgMWZyKSFpbXBvcnRhbnQ7YDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBVSVxuICAgIGlmICh0aGlzLmN1c3RvbVN0eWxlcykge1xuICAgICAgaWYgKHRoaXMuY3VzdG9tU3R5bGVzLmNvbG9yKSB7XG4gICAgICAgIHZhcmlhYmxlcyA9IHZhcmlhYmxlcyArIGAtLWdzLWZvbnQtY29sb3I6ICR7dGhpcy5jdXN0b21TdHlsZXMuY29sb3J9IWltcG9ydGFudDtgO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuY3VzdG9tU3R5bGVzLnVpLmZvbnRTaXplKSB7XG4gICAgICAgIHZhcmlhYmxlcyA9IHZhcmlhYmxlcyArIGAtLWdzLWZvbnQtc2l6ZTogJHt0aGlzLmN1c3RvbVN0eWxlcy51aS5mb250U2l6ZX0haW1wb3J0YW50O2A7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5jdXN0b21TdHlsZXMuY29sb3IucHJpbWFyeSkge1xuICAgICAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZXMgKyBgLS1ncy1wcmltYXJ5LWNvbG9yOiAke3RoaXMuY3VzdG9tU3R5bGVzLmNvbG9yLnByaW1hcnl9IWltcG9ydGFudDtgO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuY3VzdG9tU3R5bGVzLmNvbG9yLnNlY29uZGFyeSkge1xuICAgICAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZXMgKyBgLS1ncy1zZWNvbmRhcnktY29sb3I6ICR7dGhpcy5jdXN0b21TdHlsZXMuY29sb3Iuc2Vjb25kYXJ5fSFpbXBvcnRhbnQ7YDtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmN1c3RvbVN0eWxlcy5jb2xvci5uZXV0cmFsKSB7XG4gICAgICAgIHZhcmlhYmxlcyA9IHZhcmlhYmxlcyArIGAtLWdzLW5ldXRyYWwtY29sb3I6ICR7dGhpcy5jdXN0b21TdHlsZXMuY29sb3IubmV1dHJhbH0haW1wb3J0YW50O2A7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5jdXN0b21TdHlsZXMuY29sb3IuYm9yZGVyKSB7XG4gICAgICAgIHZhcmlhYmxlcyA9IHZhcmlhYmxlcyArIGAtLWdzLWJvcmRlci1jb2xvcjogJHt0aGlzLmN1c3RvbVN0eWxlcy5jb2xvci5ib3JkZXJ9IWltcG9ydGFudDtgO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuY3VzdG9tU3R5bGVzLmNvbG9yLndoaXRlKSB7XG4gICAgICAgIHZhcmlhYmxlcyA9IHZhcmlhYmxlcyArIGAtLWdzLXdoaXRlLWNvbG9yOiAke3RoaXMuY3VzdG9tU3R5bGVzLmNvbG9yLndoaXRlfSFpbXBvcnRhbnQ7YDtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmN1c3RvbVN0eWxlcy51aS5wYWRkaW5nKSB7XG4gICAgICAgIHZhcmlhYmxlcyA9IHZhcmlhYmxlcyArIGAtLWdzLXBhZGRpbmc6ICR7dGhpcy5jdXN0b21TdHlsZXMudWkucGFkZGluZ30haW1wb3J0YW50O2A7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5jdXN0b21TdHlsZXMudWkucHJpbWFyeUJ1dHRvbikge1xuICAgICAgICBpZiAodGhpcy5jdXN0b21TdHlsZXMudWkucHJpbWFyeUJ1dHRvbi5wYWRkaW5nKSB7XG4gICAgICAgICAgdmFyaWFibGVzID0gdmFyaWFibGVzICsgYC0tZ3MtYnV0dG9uLXBhZGRpbmc6ICR7dGhpcy5jdXN0b21TdHlsZXMudWkucHJpbWFyeUJ1dHRvbi5wYWRkaW5nfSFpbXBvcnRhbnQ7YDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jdXN0b21TdHlsZXMudWkucHJpbWFyeUJ1dHRvbi5jb2xvcikge1xuICAgICAgICAgIHZhcmlhYmxlcyA9IHZhcmlhYmxlcyArIGAtLWdzLWJ1dHRvbi1jb2xvcjogJHt0aGlzLmN1c3RvbVN0eWxlcy51aS5wcmltYXJ5QnV0dG9uLmNvbG9yfSFpbXBvcnRhbnQ7YDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jdXN0b21TdHlsZXMudWkucHJpbWFyeUJ1dHRvbi5iYWNrZ3JvdW5kKSB7XG4gICAgICAgICAgdmFyaWFibGVzID0gdmFyaWFibGVzICsgYC0tZ3MtYnV0dG9uLWJhY2tncm91bmQ6ICR7dGhpcy5jdXN0b21TdHlsZXMudWkucHJpbWFyeUJ1dHRvbi5iYWNrZ3JvdW5kfSFpbXBvcnRhbnQ7YDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jdXN0b21TdHlsZXMudWkucHJpbWFyeUJ1dHRvbi5ib3JkZXJTaXplKSB7XG4gICAgICAgICAgdmFyaWFibGVzID0gdmFyaWFibGVzICsgYC0tZ3MtYnV0dG9uLWJvcmRlci1zaXplOiAke3RoaXMuY3VzdG9tU3R5bGVzLnVpLnByaW1hcnlCdXR0b24uYm9yZGVyU2l6ZX0haW1wb3J0YW50O2A7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY3VzdG9tU3R5bGVzLnVpLnByaW1hcnlCdXR0b24uYm9yZGVyU3R5bGUpIHtcbiAgICAgICAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZXMgKyBgLS1ncy1idXR0b24tYm9yZGVyLXN0eWxlOiAke3RoaXMuY3VzdG9tU3R5bGVzLnVpLnByaW1hcnlCdXR0b24uYm9yZGVyU3R5bGV9IWltcG9ydGFudDtgO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmN1c3RvbVN0eWxlcy51aS5wcmltYXJ5QnV0dG9uLmJvcmRlckNvbG9yKSB7XG4gICAgICAgICAgdmFyaWFibGVzID0gdmFyaWFibGVzICsgYC0tZ3MtYnV0dG9uLWJvcmRlci1jb2xvcjogJHt0aGlzLmN1c3RvbVN0eWxlcy51aS5wcmltYXJ5QnV0dG9uLmJvcmRlckNvbG9yfSFpbXBvcnRhbnQ7YDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jdXN0b21TdHlsZXMudWkucHJpbWFyeUJ1dHRvbi5ib3JkZXJSYWRpdXMpIHtcbiAgICAgICAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZXMgKyBgLS1ncy1idXR0b24tYm9yZGVyLXJhZGl1czogJHt0aGlzLmN1c3RvbVN0eWxlcy51aS5wcmltYXJ5QnV0dG9uLmJvcmRlclJhZGl1c30haW1wb3J0YW50O2A7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY3VzdG9tU3R5bGVzLnVpLnByaW1hcnlCdXR0b24uYm9yZGVyVG9wKSB7XG4gICAgICAgICAgdmFyaWFibGVzID0gdmFyaWFibGVzICsgYC0tZ3MtYnV0dG9uLWJvcmRlci10b3A6ICR7dGhpcy5jdXN0b21TdHlsZXMudWkucHJpbWFyeUJ1dHRvbi5ib3JkZXJUb3B9IWltcG9ydGFudDtgO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmN1c3RvbVN0eWxlcy51aS5wcmltYXJ5QnV0dG9uLmJvcmRlclJpZ2h0KSB7XG4gICAgICAgICAgdmFyaWFibGVzID0gdmFyaWFibGVzICsgYC0tZ3MtYnV0dG9uLWJvcmRlci1yaWdodDogJHt0aGlzLmN1c3RvbVN0eWxlcy51aS5wcmltYXJ5QnV0dG9uLmJvcmRlclJpZ2h0fSFpbXBvcnRhbnQ7YDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jdXN0b21TdHlsZXMudWkucHJpbWFyeUJ1dHRvbi5ib3JkZXJCb3R0b20pIHtcbiAgICAgICAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZXMgKyBgLS1ncy1idXR0b24tYm9yZGVyLWJvdHRvbTogJHt0aGlzLmN1c3RvbVN0eWxlcy51aS5wcmltYXJ5QnV0dG9uLmJvcmRlckJvdHRvbX0haW1wb3J0YW50O2A7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY3VzdG9tU3R5bGVzLnVpLnByaW1hcnlCdXR0b24uYm9yZGVyTGVmdCkge1xuICAgICAgICAgIHZhcmlhYmxlcyA9IHZhcmlhYmxlcyArIGAtLWdzLWJ1dHRvbi1ib3JkZXItbGVmdDogJHt0aGlzLmN1c3RvbVN0eWxlcy51aS5wcmltYXJ5QnV0dG9uLmJvcmRlckxlZnR9IWltcG9ydGFudDtgO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZShcbiAgICAgIHZhcmlhYmxlc1xuICAgICk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6cmVzaXplJywgWyckZXZlbnQnXSlcbiAgcHVibGljIG9uUmVzaXplKGV2ZW50KSB7XG4gICAgdGhpcy5zZXRDb250ZW50V2lkdGgoKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0Q29udGVudFdpZHRoKCkge1xuICAgIGlmICghdGhpcy5ub1RhYmxlRGF0YSAmJiB0aGlzLnRhYmxlU3R5bGUgPT09IEdUYWJsZVN0eWxlLlRBQkxFKSB7XG4gICAgICB0aGlzLnRhYmxlQ29udGVudFBhZGRpbmcgPVxuICAgICAgICB0aGlzLnRhYmxlSGVhZGVyRWxlbWVudC5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoIC0gdGhpcy50YWJsZUNvbnRlbnRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGhkbFJvd0FjdGlvbihhY3Rpb246IEdUYWJsZUFjdGlvbik6IHZvaWQge1xuICAgIHRoaXMucm93QWN0aW9uRXZlbnQuZW1pdChhY3Rpb24pO1xuICB9XG5cbiAgcHVibGljIG9uTmF2aWdhdGUobmV4dDogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmIChuZXh0KSB7XG4gICAgICB0aGlzLm5hdmlnYXRlTmV4dC5lbWl0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubmF2aWdhdGVQcmV2aW91cy5lbWl0KCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBvbklucHV0RGF0YUVycm9yKCk6IHZvaWQge1xuICAgIHJldHVybiBjb25zb2xlLmVycm9yKFxuICAgICAgJ0dTIFRhYmxlIGJ1aWxkaW5nIGVycjogUGxlYXNlIHByb3ZpZGUgdGFibGVEYXRhOicgKyAnXFxuXFxuJyArXG4gICAgICAnMS4gSW4geW91ciB0ZW1wbGF0ZSBtYWtlIHN1cmUgeW91IGhhdmU6JyArICdcXG5cXG4nICtcbiAgICAgICdcXHhhMCcgKyAnPGdzLXRhYmxlIFt0YWJsZURhdGFdPVwidGFibGVEYXRhXCI+PC9ncy10YWJsZT4nICsgJ1xcblxcbicgK1xuICAgICAgJzIuIEluIHlvdXIgY29tcG9uZW50IGRlY2xhcmUgYHRhYmxlRGF0YWA6JyArICdcXG5cXG4nICtcbiAgICAgICdcXHhhMHB1YmxpYyB0YWJsZURhdGEgPSB7JyArICdcXG4nICtcbiAgICAgICdcXHhhMFxceGEwXFx4YTAnICsgJ2RhdGE6IEFycmF5PG9iamVjdD47JyArICdcXG4nICtcbiAgICAgICdcXHhhMFxceGEwXFx4YTAnICsgJ2hlYWRlcj86IEFycmF5PHN0cmluZz47JyArICdcXG4nICtcbiAgICAgICdcXHhhMFxceGEwXFx4YTAnICsgJ29wdGlvbnM/OiB7JyArICdcXG4nICtcbiAgICAgICdcXHhhMFxceGEwXFx4YTBcXHhhMFxceGEwJyArICdzdHlsZT86IEdUYWJsZVN0eWxlOycgKyAnXFxuJyArXG4gICAgICAnXFx4YTBcXHhhMFxceGEwXFx4YTBcXHhhMCcgKyAncm93QWN0aW9ucz86IEdUYWJsZVJvd0FjdGlvbjsnICsgJ1xcbicgK1xuICAgICAgJ1xceGEwXFx4YTBcXHhhMCcgKyAnfScgKyAnXFxuJyArXG4gICAgICAnXFx4YTB9J1xuICAgICk7XG4gIH1cbn1cbiJdfQ==