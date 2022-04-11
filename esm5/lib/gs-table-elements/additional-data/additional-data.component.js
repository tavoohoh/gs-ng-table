import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
var GsAdditionalDataComponent = /** @class */ (function () {
    function GsAdditionalDataComponent() {
    }
    GsAdditionalDataComponent.prototype.ngOnChanges = function (changes) {
        if (changes.additionalData.currentValue) {
            this.additionalData = changes.additionalData.currentValue;
        }
    };
    tslib_1.__decorate([
        Input()
    ], GsAdditionalDataComponent.prototype, "additionalData", void 0);
    GsAdditionalDataComponent = tslib_1.__decorate([
        Component({
            selector: 'gs-table-additional-data',
            template: "<div class=\"additional-data\">\n  <div *ngFor=\"let data of additionalData; let i = index\">\n    <b>{{ data.label | translate }}: </b>\n\n    <!-- custom template reference -->\n    <ng-container *ngIf=\"data.value['template']; else simpleValue\">\n      <ng-container *ngTemplateOutlet=\"data.value['template']; context:data.value\"></ng-container>\n    </ng-container>\n\n    <!-- default value rendering -->\n    <ng-template #simpleValue>\n      <span>{{ data.value | translate }}</span>\n    </ng-template>\n  </div>\n</div>",
            styles: ["*{font-family:Arial,Helvetica,sans-serif;color:var(--gs-font-color,inherit);font-size:var(--gs-font-size,.9rem);outline:0;box-sizing:border-box;line-height:1.4}.disabled{opacity:.5;cursor:default;pointer-events:none}.button{-webkit-transition:.2s ease-in-out;transition:.2s ease-in-out;cursor:pointer;border:none;text-align:center;font-weight:700;outline:0;padding:var(--gs-button-padding,.5rem);color:var(--gs-button-color,#fff);background-color:var(--gs-button-background,#f33959);border:1px solid var(--gs-button-border-color,#f33959);border-radius:var(--gs-button-border-radius,6px)}.button:hover{opacity:.8}:host ::ng-deep .gs-table-row:last-child gs-table-row-actions div.action div.options.dropdown,:host ::ng-deep .gs-table-row:nth-last-child(2) gs-table-row-actions div.action div.options.dropdown,:host ::ng-deep .gs-table-row:nth-last-child(3) gs-table-row-actions div.action div.options.dropdown{top:-30px}input::-moz-focus-inner{border:0!important}a,a:active,a:focus,a:hover,button,button:active,button:focus,button:hover{outline:0!important}.additional-data{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:1rem;padding:1rem 0;background:0 0}.additional-data div b{color:var(--gs-font-color,inherit);opacity:.6}.additional-data div span{color:var(--gs-font-color,inherit)}"]
        })
    ], GsAdditionalDataComponent);
    return GsAdditionalDataComponent;
}());
export { GsAdditionalDataComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkaXRpb25hbC1kYXRhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0ByYXBwaXBheS9ncy10YWJsZXMvIiwic291cmNlcyI6WyJsaWIvZ3MtdGFibGUtZWxlbWVudHMvYWRkaXRpb25hbC1kYXRhL2FkZGl0aW9uYWwtZGF0YS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQVEzRTtJQUFBO0lBUUEsQ0FBQztJQUxDLCtDQUFXLEdBQVgsVUFBWSxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxjQUFjLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUM7U0FDM0Q7SUFDSCxDQUFDO0lBTlE7UUFBUixLQUFLLEVBQUU7cUVBQStDO0lBRDVDLHlCQUF5QjtRQUxyQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsMEJBQTBCO1lBQ3BDLCtoQkFBK0M7O1NBRWhELENBQUM7T0FDVyx5QkFBeUIsQ0FRckM7SUFBRCxnQ0FBQztDQUFBLEFBUkQsSUFRQztTQVJZLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgR0FkZGl0aW9uYWxEYXRhIH0gZnJvbSAnLi4vLi4vZ3MtdGFibGVzLm1vZGVscyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dzLXRhYmxlLWFkZGl0aW9uYWwtZGF0YScsXG4gIHRlbXBsYXRlVXJsOiAnLi9hZGRpdGlvbmFsLWRhdGEuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hZGRpdGlvbmFsLWRhdGEuY29tcG9uZW50LnNhc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBHc0FkZGl0aW9uYWxEYXRhQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgcHVibGljIGFkZGl0aW9uYWxEYXRhOiBBcnJheTxHQWRkaXRpb25hbERhdGE+O1xuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoY2hhbmdlcy5hZGRpdGlvbmFsRGF0YS5jdXJyZW50VmFsdWUpIHtcbiAgICAgIHRoaXMuYWRkaXRpb25hbERhdGEgPSBjaGFuZ2VzLmFkZGl0aW9uYWxEYXRhLmN1cnJlbnRWYWx1ZTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==