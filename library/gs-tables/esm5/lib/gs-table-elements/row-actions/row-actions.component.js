import * as tslib_1 from "tslib";
import { Component, ViewChild, Input, Output, EventEmitter, HostListener } from '@angular/core';
var GsTableRowActionsComponent = /** @class */ (function () {
    function GsTableRowActionsComponent() {
        this.rowActionEvent = new EventEmitter();
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
    tslib_1.__decorate([
        ViewChild('optionsContainer', { static: false })
    ], GsTableRowActionsComponent.prototype, "optionsContainer", void 0);
    tslib_1.__decorate([
        ViewChild('optionsButton', { static: true })
    ], GsTableRowActionsComponent.prototype, "optionsButton", void 0);
    tslib_1.__decorate([
        Input()
    ], GsTableRowActionsComponent.prototype, "rowAction", void 0);
    tslib_1.__decorate([
        Input()
    ], GsTableRowActionsComponent.prototype, "rowData", void 0);
    tslib_1.__decorate([
        Output()
    ], GsTableRowActionsComponent.prototype, "rowActionEvent", void 0);
    tslib_1.__decorate([
        HostListener('document:click', ['$event'])
    ], GsTableRowActionsComponent.prototype, "clickout", null);
    GsTableRowActionsComponent = tslib_1.__decorate([
        Component({
            selector: 'gs-table-row-actions',
            template: "<div class=\"action\">\r\n  <button class=\"button button-secondary\" #optionsButton>\r\n    {{ rowAction.text }}\r\n    <svg *ngIf=\"!showActions\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\r\n      <path d=\"M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z\"/>\r\n    </svg>\r\n    <svg *ngIf=\"showActions\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\r\n      <path d=\"M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z\"/>\r\n    </svg>\r\n  </button>\r\n  <ng-container *ngIf=\"showActions\">\r\n    <div class=\"options dropdown\" #optionsContainer>\r\n      <ng-container *ngFor=\"let action of rowAction.actions\">\r\n        <span (click)=\"hdlAction(action)\" *ngIf=\"action.display\">\r\n          {{ action.text }}\r\n        </span>\r\n      </ng-container>\r\n    </div>\r\n  </ng-container>\r\n</div>",
            styles: ["*{font-family:Arial,Helvetica,sans-serif;color:var(--gs-font-color,inherit);font-size:var(--gs-font-size,.9rem);outline:0;box-sizing:border-box;line-height:1.4}.disabled{opacity:.7;cursor:default;pointer-events:none}.button{-webkit-transition:.2s ease-in-out;transition:.2s ease-in-out;cursor:pointer;border:none;text-align:center;outline:0;padding:var(--gs-button-padding,.5rem);color:var(--gs-button-color,#fff);background-color:var(--gs-button-background,#f33959);border:1px solid var(--gs-button-border-color,#f33959);border-radius:var(--gs-button-border-radius,6px);display:inherit;font-size:70%;font-weight:700;padding:var(--gs-button-padding,.5rem);margin:7px auto}.button:hover{opacity:.8}:host ::ng-deep .gs-table-row:last-child gs-table-row-actions div.action div.options.dropdown,:host ::ng-deep .gs-table-row:nth-last-child(2) gs-table-row-actions div.action div.options.dropdown,:host ::ng-deep .gs-table-row:nth-last-child(3) gs-table-row-actions div.action div.options.dropdown{top:-70px}.button svg{fill:var(--gs-font-color,inherit);width:8px;height:8px;margin-left:3px}.action{position:relative}.options{position:absolute;font-size:80%;z-index:1000;padding:4px;background:var(--gs-white-color,#fff);box-shadow:0 8px 14px rgba(0,0,0,.08),0 10px 10px rgba(0,0,0,.1);border-radius:6px;width:-webkit-max-content;width:-moz-max-content;width:max-content;line-height:1}.options span{-webkit-transition:.2s ease-in-out;transition:.2s ease-in-out;display:inline-block;width:160px;padding:6px;line-height:1;cursor:pointer;color:var(--gs-font-color,inherit);text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.options span:hover{opacity:.8}.options.dropdown{width:100px;top:28px;right:calc(40% - 10px)}.options.dropdown span{width:100%}"]
        })
    ], GsTableRowActionsComponent);
    return GsTableRowActionsComponent;
}());
export { GsTableRowActionsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LWFjdGlvbnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ3MtdGFibGVzLyIsInNvdXJjZXMiOlsibGliL2dzLXRhYmxlLWVsZW1lbnRzL3Jvdy1hY3Rpb25zL3Jvdy1hY3Rpb25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQWMsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUTVHO0lBbUJFO1FBWGtCLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQWdCLENBQUM7SUFXcEQsQ0FBQztJQVJqQiw2Q0FBUSxHQUFSLFVBQVMsS0FBSztRQUNaLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUMzRCxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztTQUM1QjthQUFNLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUMxRixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztTQUMxQjtJQUNILENBQUM7SUFJTSw4Q0FBUyxHQUFoQixVQUFpQixNQUFvQjtRQUNuQyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUN6QixNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDMUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVNLHdEQUFtQixHQUExQjtRQUNFLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3ZDLENBQUM7SUExQmlEO1FBQWpELFNBQVMsQ0FBQyxrQkFBa0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQzt3RUFBcUM7SUFDeEM7UUFBN0MsU0FBUyxDQUFDLGVBQWUsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQztxRUFBa0M7SUFFdEU7UUFBUixLQUFLLEVBQUU7aUVBQW1DO0lBQ2xDO1FBQVIsS0FBSyxFQUFFOytEQUFvQjtJQUNsQjtRQUFULE1BQU0sRUFBRTtzRUFBMkQ7SUFHcEU7UUFEQyxZQUFZLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQzs4REFPMUM7SUFqQlUsMEJBQTBCO1FBTHRDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxzQkFBc0I7WUFDaEMsMDdCQUEyQzs7U0FFNUMsQ0FBQztPQUNXLDBCQUEwQixDQThCdEM7SUFBRCxpQ0FBQztDQUFBLEFBOUJELElBOEJDO1NBOUJZLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBHVGFibGVSb3dBY3Rpb24sIEdUYWJsZUFjdGlvbiB9IGZyb20gJy4uLy4uL2dzLXRhYmxlcy53aWRnZXRzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZ3MtdGFibGUtcm93LWFjdGlvbnMnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9yb3ctYWN0aW9ucy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcm93LWFjdGlvbnMuY29tcG9uZW50LnNhc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgR3NUYWJsZVJvd0FjdGlvbnNDb21wb25lbnQge1xyXG4gIHB1YmxpYyBzaG93QWN0aW9uczogYm9vbGVhbjtcclxuXHJcbiAgQFZpZXdDaGlsZCgnb3B0aW9uc0NvbnRhaW5lcicsIHsgc3RhdGljOiBmYWxzZSB9KSBwdWJsaWMgb3B0aW9uc0NvbnRhaW5lcjogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCdvcHRpb25zQnV0dG9uJywgeyBzdGF0aWM6IHRydWUgfSkgcHVibGljIG9wdGlvbnNCdXR0b246IEVsZW1lbnRSZWY7XHJcblxyXG4gIEBJbnB1dCgpIHB1YmxpYyByb3dBY3Rpb246IEdUYWJsZVJvd0FjdGlvbjtcclxuICBASW5wdXQoKSBwdWJsaWMgcm93RGF0YToge307XHJcbiAgQE91dHB1dCgpIHByaXZhdGUgcm93QWN0aW9uRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyPEdUYWJsZUFjdGlvbj4oKTtcclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6Y2xpY2snLCBbJyRldmVudCddKVxyXG4gIGNsaWNrb3V0KGV2ZW50KSB7XHJcbiAgICBpZiAodGhpcy5vcHRpb25zQnV0dG9uLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xyXG4gICAgICB0aGlzLm9uVG9nZ2xlU2hvd0FjdGlvbnMoKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5zaG93QWN0aW9ucyAmJiAhdGhpcy5vcHRpb25zQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xyXG4gICAgICB0aGlzLnNob3dBY3Rpb25zID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBwdWJsaWMgaGRsQWN0aW9uKGFjdGlvbjogR1RhYmxlQWN0aW9uKSB7XHJcbiAgICB0aGlzLnNob3dBY3Rpb25zID0gZmFsc2U7XHJcbiAgICBhY3Rpb24ucm93ID0gdGhpcy5yb3dEYXRhO1xyXG4gICAgdGhpcy5yb3dBY3Rpb25FdmVudC5lbWl0KGFjdGlvbik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25Ub2dnbGVTaG93QWN0aW9ucygpIHtcclxuICAgIHRoaXMuc2hvd0FjdGlvbnMgPSAhdGhpcy5zaG93QWN0aW9ucztcclxuICB9XHJcbn1cclxuIl19