import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
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
GsTablesService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function GsTablesService_Factory() { return new GsTablesService(); }, token: GsTablesService, providedIn: "root" });
GsTablesService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], GsTablesService);
export { GsTablesService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3MtdGFibGVzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ncy10YWJsZXMvIiwic291cmNlcyI6WyJsaWIvZ3MtdGFibGVzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSzNDLElBQWEsZUFBZSxHQUE1QixNQUFhLGVBQWU7SUFFMUIsZ0JBQWdCLENBQUM7SUFFVixpQkFBaUIsQ0FBQyxRQUF1QjtRQUM5QyxNQUFNLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFFdkIsS0FBSyxNQUFNLElBQUksSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDOUIsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDaEYsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN4QjtTQUNGO1FBRUQsT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQztDQUNGLENBQUE7O0FBZlksZUFBZTtJQUgzQixVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDO0dBQ1csZUFBZSxDQWUzQjtTQWZZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEdzVGFibGVzU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBwdWJsaWMgb2JqZWN0S2V5c1RvQXJyYXkocmF3QXJyYXk6IEFycmF5PG9iamVjdD4pOiBBcnJheTxzdHJpbmc+IHtcbiAgICBjb25zdCBjb250ZW50S2V5cyA9IFtdO1xuXG4gICAgZm9yIChjb25zdCBrZXlzIGluIHJhd0FycmF5WzBdKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHJhd0FycmF5WzBdLCBrZXlzKSAmJiByYXdBcnJheVswXVtrZXlzXSkge1xuICAgICAgICBjb250ZW50S2V5cy5wdXNoKGtleXMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb250ZW50S2V5cztcbiAgfVxufVxuIl19