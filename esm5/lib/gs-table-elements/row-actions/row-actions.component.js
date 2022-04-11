import * as tslib_1 from "tslib";
import { Component, ViewChild, Input, Output, EventEmitter, HostListener } from '@angular/core';
var GsTableRowActionsComponent = /** @class */ (function () {
    function GsTableRowActionsComponent() {
        this.menuHasActions = false;
        this.rowActionEvent = new EventEmitter();
    }
    GsTableRowActionsComponent.prototype.clickout = function (event) {
        if (this.optionsButton && this.optionsButton.nativeElement.contains(event.target)) {
            this.onToggleActionsMenu();
        }
        else if (this.openMenu && !this.optionsContainer.nativeElement.contains(event.target)) {
            this.openMenu = false;
        }
    };
    GsTableRowActionsComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes.rowAction && changes.rowAction.currentValue && changes.rowAction.currentValue.actions) {
            changes.rowAction.currentValue.actions.forEach(function (action) {
                if (_this.displayActionIf(action)) {
                    _this.menuHasActions = true;
                }
            });
        }
        else {
            this.menuHasActions = false;
        }
    };
    GsTableRowActionsComponent.prototype.hdlAction = function (action) {
        this.openMenu = false;
        action.row = this.rowData;
        this.rowActionEvent.emit(action);
    };
    GsTableRowActionsComponent.prototype.onToggleActionsMenu = function () {
        this.openMenu = !this.openMenu;
    };
    GsTableRowActionsComponent.prototype.displayActionIf = function (action) {
        if (action.hidden) {
            return false;
        }
        else if (action.displayIf) {
            return this.rowData[action.displayIf.model].toString() === action.displayIf.hasValue.toString() ? true : false;
        }
        else {
            return true;
        }
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
            template: "<div class=\"action\" [class.show]=\"menuHasActions\">\n  <button class=\"button button-secondary\" #optionsButton id=\"rowActionButton\">\n    {{ rowAction.text | translate }}\n    <svg *ngIf=\"!openMenu\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" id=\"gsbtnany\">\n      <path d=\"M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z\" id=\"gsbtnany\"/>\n    </svg>\n    <svg *ngIf=\"openMenu\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" id=\"gsbtnany\">\n      <path d=\"M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z\" id=\"gsbtnany\"/>\n    </svg>\n  </button>\n  <ng-container *ngIf=\"openMenu\">\n    <div class=\"options dropdown\" #optionsContainer id=\"gsbtnany\">\n      <ng-container *ngFor=\"let action of rowAction.actions\">\n        <span (click)=\"hdlAction(action)\" *ngIf=\"displayActionIf(action)\" id=\"gsbtnany\">\n          {{ action.text | translate }}\n        </span>\n      </ng-container>\n    </div>\n  </ng-container>\n</div>",
            styles: ["*{font-family:Arial,Helvetica,sans-serif;color:var(--gs-font-color,inherit);font-size:var(--gs-font-size,.9rem);outline:0;box-sizing:border-box;line-height:1.4}.disabled{opacity:.5;cursor:default;pointer-events:none}.button{-webkit-transition:.2s ease-in-out;transition:.2s ease-in-out;cursor:pointer;border:none;text-align:center;outline:0;padding:var(--gs-button-padding,.5rem);color:var(--gs-button-color,#fff);background-color:var(--gs-button-background,#f33959);border:1px solid var(--gs-button-border-color,#f33959);border-radius:var(--gs-button-border-radius,6px);display:inherit;font-size:70%;font-weight:700;padding:var(--gs-button-padding,.5rem);margin:7px auto}.button:hover{opacity:.8}:host ::ng-deep .gs-table-row:last-child gs-table-row-actions div.action div.options.dropdown,:host ::ng-deep .gs-table-row:nth-last-child(2) gs-table-row-actions div.action div.options.dropdown,:host ::ng-deep .gs-table-row:nth-last-child(3) gs-table-row-actions div.action div.options.dropdown{top:-30px}input::-moz-focus-inner{border:0!important}a,a:active,a:focus,a:hover,button,button:active,button:focus,button:hover{outline:0!important}.button svg{fill:var(--gs-font-color,inherit);width:8px;height:8px;margin-left:3px}.action{position:relative;display:none}.options{position:absolute;font-size:80%;z-index:1000;padding:4px;background:var(--gs-white-color,#fff);box-shadow:0 8px 14px rgba(0,0,0,.08),0 10px 10px rgba(0,0,0,.1);border-radius:6px;line-height:1}.options span{-webkit-transition:.2s ease-in-out;transition:.2s ease-in-out;display:inline-block;padding:6px;line-height:1;cursor:pointer;color:var(--gs-font-color,inherit);text-overflow:ellipsis;overflow:hidden;white-space:nowrap;max-width:160px}.options span:hover{opacity:.8}.options.dropdown{top:28px;right:calc(40% - 10px)}.options.dropdown span{width:100%}.show{display:block}"]
        })
    ], GsTableRowActionsComponent);
    return GsTableRowActionsComponent;
}());
export { GsTableRowActionsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LWFjdGlvbnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHJhcHBpcGF5L2dzLXRhYmxlcy8iLCJzb3VyY2VzIjpbImxpYi9ncy10YWJsZS1lbGVtZW50cy9yb3ctYWN0aW9ucy9yb3ctYWN0aW9ucy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFjLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFRdEk7SUFMQTtRQU9TLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBT1osbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBZ0IsQ0FBQztJQTBDdEUsQ0FBQztJQXZDQyw2Q0FBUSxHQUFSLFVBQVMsS0FBSztRQUNaLElBQUksSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ2pGLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1NBQzVCO2FBQU0sSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3ZGLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQztJQUVELGdEQUFXLEdBQVgsVUFBWSxPQUFzQjtRQUFsQyxpQkFVQztRQVRDLElBQUksT0FBTyxDQUFDLFNBQVMsSUFBSSxPQUFPLENBQUMsU0FBUyxDQUFDLFlBQVksSUFBSSxPQUFPLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUU7WUFDakcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFDLE1BQW9CO2dCQUNsRSxJQUFJLEtBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLEVBQUU7b0JBQ2hDLEtBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO2lCQUM1QjtZQUNILENBQUMsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1NBQzdCO0lBQ0gsQ0FBQztJQUVNLDhDQUFTLEdBQWhCLFVBQWlCLE1BQW9CO1FBQ25DLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUMxQixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRU0sd0RBQW1CLEdBQTFCO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDakMsQ0FBQztJQUVNLG9EQUFlLEdBQXRCLFVBQXVCLE1BQW9CO1FBQ3pDLElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRTtZQUNqQixPQUFPLEtBQUssQ0FBQztTQUNkO2FBQU0sSUFBSSxNQUFNLENBQUMsU0FBUyxFQUFFO1lBQzNCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsRUFBRSxLQUFLLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztTQUNoSDthQUFNO1lBQ0wsT0FBTyxJQUFJLENBQUM7U0FDYjtJQUNILENBQUM7SUE5Q2lEO1FBQWpELFNBQVMsQ0FBQyxrQkFBa0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQzt3RUFBcUM7SUFDeEM7UUFBN0MsU0FBUyxDQUFDLGVBQWUsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQztxRUFBa0M7SUFFdEU7UUFBUixLQUFLLEVBQUU7aUVBQW1DO0lBQ2xDO1FBQVIsS0FBSyxFQUFFOytEQUFvQjtJQUNsQjtRQUFULE1BQU0sRUFBRTtzRUFBMkQ7SUFHcEU7UUFEQyxZQUFZLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQzs4REFPMUM7SUFsQlUsMEJBQTBCO1FBTHRDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxzQkFBc0I7WUFDaEMsbWtDQUEyQzs7U0FFNUMsQ0FBQztPQUNXLDBCQUEwQixDQW1EdEM7SUFBRCxpQ0FBQztDQUFBLEFBbkRELElBbURDO1NBbkRZLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBHVGFibGVSb3dBY3Rpb24sIEdUYWJsZUFjdGlvbiB9IGZyb20gJy4uLy4uL2dzLXRhYmxlcy53aWRnZXRzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ3MtdGFibGUtcm93LWFjdGlvbnMnLFxuICB0ZW1wbGF0ZVVybDogJy4vcm93LWFjdGlvbnMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9yb3ctYWN0aW9ucy5jb21wb25lbnQuc2FzcyddXG59KVxuZXhwb3J0IGNsYXNzIEdzVGFibGVSb3dBY3Rpb25zQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgcHVibGljIG9wZW5NZW51OiBib29sZWFuO1xuICBwdWJsaWMgbWVudUhhc0FjdGlvbnMgPSBmYWxzZTtcblxuICBAVmlld0NoaWxkKCdvcHRpb25zQ29udGFpbmVyJywgeyBzdGF0aWM6IGZhbHNlIH0pIHB1YmxpYyBvcHRpb25zQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdvcHRpb25zQnV0dG9uJywgeyBzdGF0aWM6IHRydWUgfSkgcHVibGljIG9wdGlvbnNCdXR0b246IEVsZW1lbnRSZWY7XG5cbiAgQElucHV0KCkgcHVibGljIHJvd0FjdGlvbjogR1RhYmxlUm93QWN0aW9uO1xuICBASW5wdXQoKSBwdWJsaWMgcm93RGF0YToge307XG4gIEBPdXRwdXQoKSBwcml2YXRlIHJvd0FjdGlvbkV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxHVGFibGVBY3Rpb24+KCk7XG5cbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6Y2xpY2snLCBbJyRldmVudCddKVxuICBjbGlja291dChldmVudCkge1xuICAgIGlmICh0aGlzLm9wdGlvbnNCdXR0b24gJiYgdGhpcy5vcHRpb25zQnV0dG9uLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgdGhpcy5vblRvZ2dsZUFjdGlvbnNNZW51KCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm9wZW5NZW51ICYmICF0aGlzLm9wdGlvbnNDb250YWluZXIubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICB0aGlzLm9wZW5NZW51ID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmIChjaGFuZ2VzLnJvd0FjdGlvbiAmJiBjaGFuZ2VzLnJvd0FjdGlvbi5jdXJyZW50VmFsdWUgJiYgY2hhbmdlcy5yb3dBY3Rpb24uY3VycmVudFZhbHVlLmFjdGlvbnMpIHtcbiAgICAgIGNoYW5nZXMucm93QWN0aW9uLmN1cnJlbnRWYWx1ZS5hY3Rpb25zLmZvckVhY2goKGFjdGlvbjogR1RhYmxlQWN0aW9uKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmRpc3BsYXlBY3Rpb25JZihhY3Rpb24pKSB7XG4gICAgICAgICAgdGhpcy5tZW51SGFzQWN0aW9ucyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1lbnVIYXNBY3Rpb25zID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGhkbEFjdGlvbihhY3Rpb246IEdUYWJsZUFjdGlvbik6IHZvaWQge1xuICAgIHRoaXMub3Blbk1lbnUgPSBmYWxzZTtcbiAgICBhY3Rpb24ucm93ID0gdGhpcy5yb3dEYXRhO1xuICAgIHRoaXMucm93QWN0aW9uRXZlbnQuZW1pdChhY3Rpb24pO1xuICB9XG5cbiAgcHVibGljIG9uVG9nZ2xlQWN0aW9uc01lbnUoKTogdm9pZCB7XG4gICAgdGhpcy5vcGVuTWVudSA9ICF0aGlzLm9wZW5NZW51O1xuICB9XG5cbiAgcHVibGljIGRpc3BsYXlBY3Rpb25JZihhY3Rpb246IEdUYWJsZUFjdGlvbik6IGJvb2xlYW4ge1xuICAgIGlmIChhY3Rpb24uaGlkZGVuKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChhY3Rpb24uZGlzcGxheUlmKSB7XG4gICAgICByZXR1cm4gdGhpcy5yb3dEYXRhW2FjdGlvbi5kaXNwbGF5SWYubW9kZWxdLnRvU3RyaW5nKCkgPT09IGFjdGlvbi5kaXNwbGF5SWYuaGFzVmFsdWUudG9TdHJpbmcoKSA/IHRydWUgOiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG59XG4iXX0=