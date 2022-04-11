import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TEXT_TABLE } from './gs-tables.constants';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-translate/core";
var GsTablesService = /** @class */ (function () {
    function GsTablesService(translateService) {
        this.translateService = translateService;
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
    GsTablesService.prototype.getTranslate = function (key, param) {
        var lang = this.translateService.currentLang;
        if (!lang) {
            console.warn("translateService.currentLang is not set, using default language: 'es'");
            lang = 'es';
        }
        var messageLang = !TEXT_TABLE[lang] ?
            console.warn("We don't have support for language " + lang + ". Please email us to hi@tavoohoh.com. Using default language: 'es'") :
            TEXT_TABLE[lang];
        var message = messageLang[key];
        if (param) {
            message = message.replace('${param}', param);
        }
        return message;
    };
    GsTablesService.ctorParameters = function () { return [
        { type: TranslateService }
    ]; };
    GsTablesService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function GsTablesService_Factory() { return new GsTablesService(i0.ɵɵinject(i1.TranslateService)); }, token: GsTablesService, providedIn: "root" });
    GsTablesService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        })
    ], GsTablesService);
    return GsTablesService;
}());
export { GsTablesService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3MtdGFibGVzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcmFwcGlwYXkvZ3MtdGFibGVzLyIsInNvdXJjZXMiOlsibGliL2dzLXRhYmxlcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXZELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7O0FBS25EO0lBQ0UseUJBQW9CLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQUksQ0FBQztJQUVwRCwyQ0FBaUIsR0FBeEIsVUFBeUIsUUFBdUI7UUFDOUMsSUFBTSxXQUFXLEdBQUcsRUFBRSxDQUFDO1FBRXZCLEtBQUssSUFBTSxJQUFJLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQzlCLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ2hGLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDeEI7U0FDRjtRQUVELE9BQU8sV0FBVyxDQUFDO0lBQ3JCLENBQUM7SUFFTSxzQ0FBWSxHQUFuQixVQUFvQixHQUFXLEVBQUUsS0FBYztRQUM3QyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDO1FBRTdDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDVCxPQUFPLENBQUMsSUFBSSxDQUFDLHVFQUF1RSxDQUFDLENBQUM7WUFDdEYsSUFBSSxHQUFHLElBQUksQ0FBQztTQUNiO1FBRUQsSUFBTSxXQUFXLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNyQyxPQUFPLENBQUMsSUFBSSxDQUFDLHdDQUFzQyxJQUFJLHVFQUFvRSxDQUFDLENBQUMsQ0FBQztZQUM5SCxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFbkIsSUFBSSxPQUFPLEdBQUcsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRS9CLElBQUksS0FBSyxFQUFFO1lBQ1QsT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQzlDO1FBRUQsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQzs7Z0JBakNxQyxnQkFBZ0I7OztJQUQzQyxlQUFlO1FBSDNCLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyxlQUFlLENBbUMzQjswQkEzQ0Q7Q0EyQ0MsQUFuQ0QsSUFtQ0M7U0FuQ1ksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcblxuaW1wb3J0IHsgVEVYVF9UQUJMRSB9IGZyb20gJy4vZ3MtdGFibGVzLmNvbnN0YW50cyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEdzVGFibGVzU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdHJhbnNsYXRlU2VydmljZTogVHJhbnNsYXRlU2VydmljZSkgeyB9XG5cbiAgcHVibGljIG9iamVjdEtleXNUb0FycmF5KHJhd0FycmF5OiBBcnJheTxvYmplY3Q+KTogQXJyYXk8c3RyaW5nPiB7XG4gICAgY29uc3QgY29udGVudEtleXMgPSBbXTtcblxuICAgIGZvciAoY29uc3Qga2V5cyBpbiByYXdBcnJheVswXSkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChyYXdBcnJheVswXSwga2V5cykgJiYgcmF3QXJyYXlbMF1ba2V5c10pIHtcbiAgICAgICAgY29udGVudEtleXMucHVzaChrZXlzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY29udGVudEtleXM7XG4gIH1cblxuICBwdWJsaWMgZ2V0VHJhbnNsYXRlKGtleTogc3RyaW5nLCBwYXJhbT86IHN0cmluZykge1xuICAgIGxldCBsYW5nID0gdGhpcy50cmFuc2xhdGVTZXJ2aWNlLmN1cnJlbnRMYW5nO1xuXG4gICAgaWYgKCFsYW5nKSB7XG4gICAgICBjb25zb2xlLndhcm4oYHRyYW5zbGF0ZVNlcnZpY2UuY3VycmVudExhbmcgaXMgbm90IHNldCwgdXNpbmcgZGVmYXVsdCBsYW5ndWFnZTogJ2VzJ2ApO1xuICAgICAgbGFuZyA9ICdlcyc7XG4gICAgfVxuXG4gICAgY29uc3QgbWVzc2FnZUxhbmcgPSAhVEVYVF9UQUJMRVtsYW5nXSA/XG4gICAgICBjb25zb2xlLndhcm4oYFdlIGRvbid0IGhhdmUgc3VwcG9ydCBmb3IgbGFuZ3VhZ2UgJHtsYW5nfS4gUGxlYXNlIGVtYWlsIHVzIHRvIGhpQHRhdm9vaG9oLmNvbS4gVXNpbmcgZGVmYXVsdCBsYW5ndWFnZTogJ2VzJ2ApIDpcbiAgICAgIFRFWFRfVEFCTEVbbGFuZ107XG5cbiAgICBsZXQgbWVzc2FnZSA9IG1lc3NhZ2VMYW5nW2tleV07XG5cbiAgICBpZiAocGFyYW0pIHtcbiAgICAgIG1lc3NhZ2UgPSBtZXNzYWdlLnJlcGxhY2UoJyR7cGFyYW19JywgcGFyYW0pO1xuICAgIH1cblxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9XG59XG4iXX0=