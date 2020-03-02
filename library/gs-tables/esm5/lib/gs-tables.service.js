import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
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
    GsTablesService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function GsTablesService_Factory() { return new GsTablesService(); }, token: GsTablesService, providedIn: "root" });
    GsTablesService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        })
    ], GsTablesService);
    return GsTablesService;
}());
export { GsTablesService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3MtdGFibGVzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ncy10YWJsZXMvIiwic291cmNlcyI6WyJsaWIvZ3MtdGFibGVzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSzNDO0lBRUU7SUFBZ0IsQ0FBQztJQUVWLDJDQUFpQixHQUF4QixVQUF5QixRQUF1QjtRQUM5QyxJQUFNLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFFdkIsS0FBSyxJQUFNLElBQUksSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDOUIsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDaEYsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN4QjtTQUNGO1FBRUQsT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQzs7SUFkVSxlQUFlO1FBSDNCLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyxlQUFlLENBZTNCOzBCQXBCRDtDQW9CQyxBQWZELElBZUM7U0FmWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBHc1RhYmxlc1NlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgcHVibGljIG9iamVjdEtleXNUb0FycmF5KHJhd0FycmF5OiBBcnJheTxvYmplY3Q+KTogQXJyYXk8c3RyaW5nPiB7XG4gICAgY29uc3QgY29udGVudEtleXMgPSBbXTtcblxuICAgIGZvciAoY29uc3Qga2V5cyBpbiByYXdBcnJheVswXSkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChyYXdBcnJheVswXSwga2V5cykgJiYgcmF3QXJyYXlbMF1ba2V5c10pIHtcbiAgICAgICAgY29udGVudEtleXMucHVzaChrZXlzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY29udGVudEtleXM7XG4gIH1cbn1cbiJdfQ==