import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TEXT_TABLE } from './gs-tables.constants';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-translate/core";
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
GsTablesService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function GsTablesService_Factory() { return new GsTablesService(i0.ɵɵinject(i1.TranslateService)); }, token: GsTablesService, providedIn: "root" });
GsTablesService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], GsTablesService);
export { GsTablesService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3MtdGFibGVzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcmFwcGlwYXkvZ3MtdGFibGVzLyIsInNvdXJjZXMiOlsibGliL2dzLXRhYmxlcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXZELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7O0FBS25ELElBQWEsZUFBZSxHQUE1QixNQUFhLGVBQWU7SUFDMUIsWUFBb0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFBSSxDQUFDO0lBRXBELGlCQUFpQixDQUFDLFFBQXVCO1FBQzlDLE1BQU0sV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUV2QixLQUFLLE1BQU0sSUFBSSxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUM5QixJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNoRixXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3hCO1NBQ0Y7UUFFRCxPQUFPLFdBQVcsQ0FBQztJQUNyQixDQUFDO0lBRU0sWUFBWSxDQUFDLEdBQVcsRUFBRSxLQUFjO1FBQzdDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUM7UUFFN0MsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNULE9BQU8sQ0FBQyxJQUFJLENBQUMsdUVBQXVFLENBQUMsQ0FBQztZQUN0RixJQUFJLEdBQUcsSUFBSSxDQUFDO1NBQ2I7UUFFRCxNQUFNLFdBQVcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3JDLE9BQU8sQ0FBQyxJQUFJLENBQUMsc0NBQXNDLElBQUksb0VBQW9FLENBQUMsQ0FBQyxDQUFDO1lBQzlILFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVuQixJQUFJLE9BQU8sR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFL0IsSUFBSSxLQUFLLEVBQUU7WUFDVCxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDOUM7UUFFRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0NBQ0YsQ0FBQTs7WUFsQ3VDLGdCQUFnQjs7O0FBRDNDLGVBQWU7SUFIM0IsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztHQUNXLGVBQWUsQ0FtQzNCO1NBbkNZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5cbmltcG9ydCB7IFRFWFRfVEFCTEUgfSBmcm9tICcuL2dzLXRhYmxlcy5jb25zdGFudHMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBHc1RhYmxlc1NlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRyYW5zbGF0ZVNlcnZpY2U6IFRyYW5zbGF0ZVNlcnZpY2UpIHsgfVxuXG4gIHB1YmxpYyBvYmplY3RLZXlzVG9BcnJheShyYXdBcnJheTogQXJyYXk8b2JqZWN0Pik6IEFycmF5PHN0cmluZz4ge1xuICAgIGNvbnN0IGNvbnRlbnRLZXlzID0gW107XG5cbiAgICBmb3IgKGNvbnN0IGtleXMgaW4gcmF3QXJyYXlbMF0pIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocmF3QXJyYXlbMF0sIGtleXMpICYmIHJhd0FycmF5WzBdW2tleXNdKSB7XG4gICAgICAgIGNvbnRlbnRLZXlzLnB1c2goa2V5cyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRlbnRLZXlzO1xuICB9XG5cbiAgcHVibGljIGdldFRyYW5zbGF0ZShrZXk6IHN0cmluZywgcGFyYW0/OiBzdHJpbmcpIHtcbiAgICBsZXQgbGFuZyA9IHRoaXMudHJhbnNsYXRlU2VydmljZS5jdXJyZW50TGFuZztcblxuICAgIGlmICghbGFuZykge1xuICAgICAgY29uc29sZS53YXJuKGB0cmFuc2xhdGVTZXJ2aWNlLmN1cnJlbnRMYW5nIGlzIG5vdCBzZXQsIHVzaW5nIGRlZmF1bHQgbGFuZ3VhZ2U6ICdlcydgKTtcbiAgICAgIGxhbmcgPSAnZXMnO1xuICAgIH1cblxuICAgIGNvbnN0IG1lc3NhZ2VMYW5nID0gIVRFWFRfVEFCTEVbbGFuZ10gP1xuICAgICAgY29uc29sZS53YXJuKGBXZSBkb24ndCBoYXZlIHN1cHBvcnQgZm9yIGxhbmd1YWdlICR7bGFuZ30uIFBsZWFzZSBlbWFpbCB1cyB0byBoaUB0YXZvb2hvaC5jb20uIFVzaW5nIGRlZmF1bHQgbGFuZ3VhZ2U6ICdlcydgKSA6XG4gICAgICBURVhUX1RBQkxFW2xhbmddO1xuXG4gICAgbGV0IG1lc3NhZ2UgPSBtZXNzYWdlTGFuZ1trZXldO1xuXG4gICAgaWYgKHBhcmFtKSB7XG4gICAgICBtZXNzYWdlID0gbWVzc2FnZS5yZXBsYWNlKCcke3BhcmFtfScsIHBhcmFtKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfVxufVxuIl19