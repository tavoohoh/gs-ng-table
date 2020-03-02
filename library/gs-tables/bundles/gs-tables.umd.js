(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/platform-browser'), require('@angular/common'), require('@ngx-translate/core'), require('@angular/common/http')) :
    typeof define === 'function' && define.amd ? define('gs-tables', ['exports', '@angular/core', '@angular/platform-browser', '@angular/common', '@ngx-translate/core', '@angular/common/http'], factory) :
    (global = global || self, factory(global['gs-tables'] = {}, global.ng.core, global.ng.platformBrowser, global.ng.common, global.core$1, global.ng.common.http));
}(this, (function (exports, core, platformBrowser, common, core$1, http) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    var GsTablesService = /** @class */ (function () {
        function GsTablesService() {
        }
        GsTablesService.prototype.objectKeysToArray = function (rawArray) {
            var contentKeys = [];
            for (var keys in rawArray[0]) {
                if (Object.prototype.hasOwnProperty.call(rawArray[0], keys) && rawArray[0][keys]) {
                    contentKeys.push(keys);
                }
            }
            return contentKeys;
        };
        GsTablesService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function GsTablesService_Factory() { return new GsTablesService(); }, token: GsTablesService, providedIn: "root" });
        GsTablesService = __decorate([
            core.Injectable({
                providedIn: 'root'
            })
        ], GsTablesService);
        return GsTablesService;
    }());

    /**
     * Table design
     */

    (function (GTableStyle) {
        /**
         * Display the table with all its columns, a header. Actions are optional.
         */
        GTableStyle["TABLE"] = "TABLE";
        /**
         * Disply only the first and second column, no header. Actions are optional.
         */
        GTableStyle["SINGLE"] = "SINGLE";
    })(exports.GTableStyle || (exports.GTableStyle = {}));

    // https://uxdesign.cc/design-better-data-tables-4ecc99d23356
    var GsTablesComponent = /** @class */ (function () {
        function GsTablesComponent(sanitizer, tableService, customStyles) {
            this.sanitizer = sanitizer;
            this.tableService = tableService;
            this.rowActionEvent = new core.EventEmitter();
            this.navigateNext = new core.EventEmitter();
            this.navigatePrevious = new core.EventEmitter();
            this.tableStyleType = exports.GTableStyle;
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
            this.tableStyle = this.tableData.options.style || exports.GTableStyle.TABLE;
            this.tableContent = this.tableData.data;
            this.tableRowActions = this.tableData.options.rowActions || null;
            this.tableContentKeys = this.tableData.keyNames ? this.tableData.keyNames : this.tableService.objectKeysToArray(this.tableContent);
            if (this.tableStyle === exports.GTableStyle.SINGLE) {
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
                if (!this.noTableData && this.tableStyle === exports.GTableStyle.TABLE && this.tableHeader.length) {
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
            if (!this.noTableData && this.tableStyle === exports.GTableStyle.TABLE) {
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
            { type: platformBrowser.DomSanitizer },
            { type: GsTablesService },
            { type: undefined, decorators: [{ type: core.Inject, args: ['customStyles',] }] }
        ]; };
        __decorate([
            core.Input()
        ], GsTablesComponent.prototype, "tableData", void 0);
        __decorate([
            core.Input()
        ], GsTablesComponent.prototype, "currentPage", void 0);
        __decorate([
            core.Input()
        ], GsTablesComponent.prototype, "totalOfPages", void 0);
        __decorate([
            core.Output()
        ], GsTablesComponent.prototype, "rowActionEvent", void 0);
        __decorate([
            core.Output()
        ], GsTablesComponent.prototype, "navigateNext", void 0);
        __decorate([
            core.Output()
        ], GsTablesComponent.prototype, "navigatePrevious", void 0);
        __decorate([
            core.ViewChild('tableContentElement', { static: false })
        ], GsTablesComponent.prototype, "tableContentElement", void 0);
        __decorate([
            core.ViewChild('tableHeaderElement', { static: false })
        ], GsTablesComponent.prototype, "tableHeaderElement", void 0);
        __decorate([
            core.HostBinding('attr.style')
        ], GsTablesComponent.prototype, "valueAsStyle", null);
        __decorate([
            core.HostListener('window:resize', ['$event'])
        ], GsTablesComponent.prototype, "onResize", null);
        GsTablesComponent = __decorate([
            core.Component({
                selector: 'gs-table',
                template: "<!-- https://material.angular.io/components/table/overview -->\r\n\r\n<ng-container *ngIf=\"!noTableData\">\r\n  <!-- GTableStyle: TABLE -->\r\n  <div class=\"gs-table\" *ngIf=\"tableStyle === tableStyleType.TABLE\">\r\n    <!-- header -->\r\n    <div class=\"gs-table-header\" [style.padding-right.px]=\"tableContentPadding\" #tableHeaderElement>\r\n      <ng-container *ngFor=\"let title of tableHeader\">\r\n        <span class=\"gs-table-header-row\">{{ title | translate }}</span>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"tableRowActions && tableRowActions.display\">\r\n        <span class=\"gs-table-header-row\">{{ tableRowActions.text }}</span>\r\n      </ng-container>\r\n    </div>\r\n    \r\n    <!-- content -->\r\n    <ng-container #tableContentElement *ngIf=\"tableContent && tableContentKeys\">\r\n      <div class=\"gs-table-row\" *ngFor=\"let row of tableContent\">\r\n        <ng-container *ngFor=\"let key of tableContentKeys\">\r\n          <span class=\"gs-table-row_text\">{{ row[key] | translate }}</span>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"tableRowActions && tableRowActions.display\">\r\n          <gs-table-row-actions\r\n            [rowAction]=\"tableRowActions\"\r\n            [rowData]=\"row\"\r\n            (rowActionEvent)=\"hdlRowAction($event)\">\r\n          </gs-table-row-actions>\r\n        </ng-container>\r\n      </div>\r\n    </ng-container>\r\n\r\n    <!-- footer -->\r\n    <ng-container *ngTemplateOutlet=\"footer\"></ng-container>\r\n  </div>\r\n\r\n  <!-- GTableStyle: SINGLE -->\r\n  <div class=\"gs-table-single\" *ngIf=\"tableStyle === tableStyleType.SINGLE\">\r\n    <!-- content -->\r\n    <div class=\"gs-table-content\" *ngIf=\"tableContent && tableContentKeys\">\r\n      <div class=\"gs-table-row\" *ngFor=\"let row of tableContent\">\r\n        <ng-container *ngFor=\"let key of tableContentKeys\">\r\n          <span class=\"gs-table-row_text\">{{ row[key] }}</span>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"tableRowActions && tableRowActions.display\">\r\n          <gs-table-row-actions\r\n            [rowAction]=\"tableRowActions\"\r\n            [rowData]=\"row\"\r\n            (rowActionEvent)=\"hdlRowAction($event)\">\r\n          </gs-table-row-actions>\r\n        </ng-container>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- footer -->\r\n    <ng-container *ngTemplateOutlet=\"footer\"></ng-container>\r\n  </div>\r\n</ng-container>\r\n\r\n<ng-template #footer>\r\n  <div class=\"gs-table-footer\" *ngIf=\"currentPage && totalOfPages\">\r\n\r\n      <!-- element count -->\r\n      <span class=\"gs-table-navigation_count\">\r\n        {{ currentPage }} - {{ totalOfPages }}\r\n      </span>\r\n\r\n      <!-- navigation controlls -->\r\n      <button\r\n        type=\"button\"\r\n        class=\"gs-table-navigation-left\"\r\n        [class.disabled]=\"!canNavigatePrevious\"\r\n        (click)=\"onNavigate(true)\"\r\n      >\r\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\r\n          <path d=\"M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z\"/>\r\n        </svg>\r\n      </button>\r\n\r\n      <button\r\n        type=\"button\"\r\n        class=\"gs-table-navigation-right\"\r\n        [class.disabled]=\"!canNavigateNext\"\r\n        (click)=\"onNavigate(false)\"\r\n      >\r\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\r\n          <path d=\"M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z\"/>\r\n        </svg>\r\n      </button>\r\n\r\n  </div>\r\n</ng-template>",
                styles: ["*{font-family:Arial,Helvetica,sans-serif;color:var(--gs-font-color,inherit);font-size:var(--gs-font-size,.9rem);outline:0;box-sizing:border-box;line-height:1.4}.disabled{opacity:.7;cursor:default;pointer-events:none}.button{-webkit-transition:.2s ease-in-out;transition:.2s ease-in-out;cursor:pointer;border:none;text-align:center;font-weight:700;outline:0;padding:var(--gs-button-padding,.5rem);color:var(--gs-button-color,#fff);background-color:var(--gs-button-background,#f33959);border:1px solid var(--gs-button-border-color,#f33959);border-radius:var(--gs-button-border-radius,6px)}.button:hover{opacity:.8}:host ::ng-deep .gs-table-row:last-child gs-table-row-actions div.action div.options.dropdown,:host ::ng-deep .gs-table-row:nth-last-child(2) gs-table-row-actions div.action div.options.dropdown,:host ::ng-deep .gs-table-row:nth-last-child(3) gs-table-row-actions div.action div.options.dropdown{top:-70px}.gs-table{border:1px solid var(--gs-border-color,#eee);background-color:var(--gs-white-color,#fff)}.gs-table .gs-table-header span{text-align:left;color:var(--gs-font-color,inherit);fill:var(--gs-font-color,inherit);font-weight:700;font-size:80%;opacity:.6}.gs-table .gs-table-header,.gs-table .gs-table-row{display:grid;grid-template-columns:var(--gs-repeat,repeat(auto-fit,minmax(180px,1fr)))}.gs-table .gs-table-footer,.gs-table .gs-table-header,.gs-table .gs-table-row{height:50px;padding-left:1rem;padding-right:1rem;border-bottom:1px solid var(--gs-border-color,#eee)}.gs-table .gs-table-footer *,.gs-table .gs-table-header *,.gs-table .gs-table-row *{align-self:center}.gs-table .gs-table-footer{border-bottom:none;display:grid;gap:2rem;grid-template-columns:-webkit-max-content auto repeat(2,-webkit-min-content);grid-template-columns:max-content auto repeat(2,min-content)}.gs-table .gs-table-footer span{color:var(--gs-font-color,inherit);fill:var(--gs-font-color,inherit);font-weight:700;font-size:80%;opacity:.6}.gs-table .gs-table-footer .gs-table-navigation-left,.gs-table .gs-table-footer .gs-table-navigation-right,.gs-table .gs-table-footer .gs-table-navigation_count{align-self:center}.gs-table .gs-table-footer .gs-table-navigation_count{grid-column:1}.gs-table .gs-table-footer .gs-table-navigation-left{grid-column:3}.gs-table .gs-table-footer .gs-table-navigation-right{grid-column:4}.gs-table .gs-table-footer .gs-table-navigation-left,.gs-table .gs-table-footer .gs-table-navigation-right{outline:0;background:0 0;padding:0;margin:0;border:none;cursor:pointer}.gs-table .gs-table-footer .gs-table-navigation-left svg,.gs-table .gs-table-footer .gs-table-navigation-right svg{width:12px}"]
            }),
            __param(2, core.Inject('customStyles'))
        ], GsTablesComponent);
        return GsTablesComponent;
    }());

    var GsTableRowActionsComponent = /** @class */ (function () {
        function GsTableRowActionsComponent() {
            this.rowActionEvent = new core.EventEmitter();
        }
        GsTableRowActionsComponent.prototype.clickout = function (event) {
            if (this.optionsButton.nativeElement.contains(event.target)) {
                this.onToggleShowActions();
            }
            else if (this.showActions && !this.optionsContainer.nativeElement.contains(event.target)) {
                this.showActions = false;
            }
        };
        GsTableRowActionsComponent.prototype.hdlAction = function (action) {
            this.showActions = false;
            action.row = this.rowData;
            this.rowActionEvent.emit(action);
        };
        GsTableRowActionsComponent.prototype.onToggleShowActions = function () {
            this.showActions = !this.showActions;
        };
        __decorate([
            core.ViewChild('optionsContainer', { static: false })
        ], GsTableRowActionsComponent.prototype, "optionsContainer", void 0);
        __decorate([
            core.ViewChild('optionsButton', { static: true })
        ], GsTableRowActionsComponent.prototype, "optionsButton", void 0);
        __decorate([
            core.Input()
        ], GsTableRowActionsComponent.prototype, "rowAction", void 0);
        __decorate([
            core.Input()
        ], GsTableRowActionsComponent.prototype, "rowData", void 0);
        __decorate([
            core.Output()
        ], GsTableRowActionsComponent.prototype, "rowActionEvent", void 0);
        __decorate([
            core.HostListener('document:click', ['$event'])
        ], GsTableRowActionsComponent.prototype, "clickout", null);
        GsTableRowActionsComponent = __decorate([
            core.Component({
                selector: 'gs-table-row-actions',
                template: "<div class=\"action\">\r\n  <button class=\"button button-secondary\" #optionsButton>\r\n    {{ rowAction.text }}\r\n    <svg *ngIf=\"!showActions\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\r\n      <path d=\"M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z\"/>\r\n    </svg>\r\n    <svg *ngIf=\"showActions\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\r\n      <path d=\"M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z\"/>\r\n    </svg>\r\n  </button>\r\n  <ng-container *ngIf=\"showActions\">\r\n    <div class=\"options dropdown\" #optionsContainer>\r\n      <ng-container *ngFor=\"let action of rowAction.actions\">\r\n        <span (click)=\"hdlAction(action)\" *ngIf=\"action.display\">\r\n          {{ action.text }}\r\n        </span>\r\n      </ng-container>\r\n    </div>\r\n  </ng-container>\r\n</div>",
                styles: ["*{font-family:Arial,Helvetica,sans-serif;color:var(--gs-font-color,inherit);font-size:var(--gs-font-size,.9rem);outline:0;box-sizing:border-box;line-height:1.4}.disabled{opacity:.7;cursor:default;pointer-events:none}.button{-webkit-transition:.2s ease-in-out;transition:.2s ease-in-out;cursor:pointer;border:none;text-align:center;outline:0;padding:var(--gs-button-padding,.5rem);color:var(--gs-button-color,#fff);background-color:var(--gs-button-background,#f33959);border:1px solid var(--gs-button-border-color,#f33959);border-radius:var(--gs-button-border-radius,6px);display:inherit;font-size:70%;font-weight:700;padding:var(--gs-button-padding,.5rem);margin:7px auto}.button:hover{opacity:.8}:host ::ng-deep .gs-table-row:last-child gs-table-row-actions div.action div.options.dropdown,:host ::ng-deep .gs-table-row:nth-last-child(2) gs-table-row-actions div.action div.options.dropdown,:host ::ng-deep .gs-table-row:nth-last-child(3) gs-table-row-actions div.action div.options.dropdown{top:-70px}.button svg{fill:var(--gs-font-color,inherit);width:8px;height:8px;margin-left:3px}.action{position:relative}.options{position:absolute;font-size:80%;z-index:1000;padding:4px;background:var(--gs-white-color,#fff);box-shadow:0 8px 14px rgba(0,0,0,.08),0 10px 10px rgba(0,0,0,.1);border-radius:6px;width:-webkit-max-content;width:-moz-max-content;width:max-content;line-height:1}.options span{-webkit-transition:.2s ease-in-out;transition:.2s ease-in-out;display:inline-block;width:160px;padding:6px;line-height:1;cursor:pointer;color:var(--gs-font-color,inherit);text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.options span:hover{opacity:.8}.options.dropdown{width:100px;top:28px;right:calc(40% - 10px)}.options.dropdown span{width:100%}"]
            })
        ], GsTableRowActionsComponent);
        return GsTableRowActionsComponent;
    }());

    var GsTablesModule = /** @class */ (function () {
        function GsTablesModule() {
        }
        GsTablesModule_1 = GsTablesModule;
        GsTablesModule.forRoot = function (styles) {
            return {
                ngModule: GsTablesModule_1,
                providers: [
                    {
                        provide: 'customStyles',
                        useValue: styles
                    }
                ]
            };
        };
        var GsTablesModule_1;
        GsTablesModule = GsTablesModule_1 = __decorate([
            core.NgModule({
                declarations: [
                    GsTablesComponent,
                    GsTableRowActionsComponent
                ],
                imports: [
                    common.CommonModule,
                    core$1.TranslateModule,
                    http.HttpClientModule
                ],
                exports: [GsTablesComponent]
            })
        ], GsTablesModule);
        return GsTablesModule;
    }());

    exports.GsTablesComponent = GsTablesComponent;
    exports.GsTablesModule = GsTablesModule;
    exports.GsTablesService = GsTablesService;
    exports.ɵa = GsTableRowActionsComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=gs-tables.umd.js.map
