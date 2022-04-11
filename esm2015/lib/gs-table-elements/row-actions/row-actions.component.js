import * as tslib_1 from "tslib";
import { Component, ViewChild, Input, Output, EventEmitter, HostListener } from '@angular/core';
let GsTableRowActionsComponent = class GsTableRowActionsComponent {
    constructor() {
        this.menuHasActions = false;
        this.rowActionEvent = new EventEmitter();
    }
    clickout(event) {
        if (this.optionsButton && this.optionsButton.nativeElement.contains(event.target)) {
            this.onToggleActionsMenu();
        }
        else if (this.openMenu && !this.optionsContainer.nativeElement.contains(event.target)) {
            this.openMenu = false;
        }
    }
    ngOnChanges(changes) {
        if (changes.rowAction && changes.rowAction.currentValue && changes.rowAction.currentValue.actions) {
            changes.rowAction.currentValue.actions.forEach((action) => {
                if (this.displayActionIf(action)) {
                    this.menuHasActions = true;
                }
            });
        }
        else {
            this.menuHasActions = false;
        }
    }
    hdlAction(action) {
        this.openMenu = false;
        action.row = this.rowData;
        this.rowActionEvent.emit(action);
    }
    onToggleActionsMenu() {
        this.openMenu = !this.openMenu;
    }
    displayActionIf(action) {
        if (action.hidden) {
            return false;
        }
        else if (action.displayIf) {
            return this.rowData[action.displayIf.model].toString() === action.displayIf.hasValue.toString() ? true : false;
        }
        else {
            return true;
        }
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
export { GsTableRowActionsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LWFjdGlvbnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHJhcHBpcGF5L2dzLXRhYmxlcy8iLCJzb3VyY2VzIjpbImxpYi9ncy10YWJsZS1lbGVtZW50cy9yb3ctYWN0aW9ucy9yb3ctYWN0aW9ucy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFjLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFRdEksSUFBYSwwQkFBMEIsR0FBdkMsTUFBYSwwQkFBMEI7SUFMdkM7UUFPUyxtQkFBYyxHQUFHLEtBQUssQ0FBQztRQU9aLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQWdCLENBQUM7SUEwQ3RFLENBQUM7SUF2Q0MsUUFBUSxDQUFDLEtBQUs7UUFDWixJQUFJLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNqRixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztTQUM1QjthQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUN2RixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztTQUN2QjtJQUNILENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxPQUFPLENBQUMsU0FBUyxJQUFJLE9BQU8sQ0FBQyxTQUFTLENBQUMsWUFBWSxJQUFJLE9BQU8sQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRTtZQUNqRyxPQUFPLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBb0IsRUFBRSxFQUFFO2dCQUN0RSxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLEVBQUU7b0JBQ2hDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO2lCQUM1QjtZQUNILENBQUMsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1NBQzdCO0lBQ0gsQ0FBQztJQUVNLFNBQVMsQ0FBQyxNQUFvQjtRQUNuQyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDMUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVNLG1CQUFtQjtRQUN4QixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNqQyxDQUFDO0lBRU0sZUFBZSxDQUFDLE1BQW9CO1FBQ3pDLElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRTtZQUNqQixPQUFPLEtBQUssQ0FBQztTQUNkO2FBQU0sSUFBSSxNQUFNLENBQUMsU0FBUyxFQUFFO1lBQzNCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsRUFBRSxLQUFLLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztTQUNoSDthQUFNO1lBQ0wsT0FBTyxJQUFJLENBQUM7U0FDYjtJQUNILENBQUM7Q0FDRixDQUFBO0FBL0NtRDtJQUFqRCxTQUFTLENBQUMsa0JBQWtCLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUM7b0VBQXFDO0FBQ3hDO0lBQTdDLFNBQVMsQ0FBQyxlQUFlLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7aUVBQWtDO0FBRXRFO0lBQVIsS0FBSyxFQUFFOzZEQUFtQztBQUNsQztJQUFSLEtBQUssRUFBRTsyREFBb0I7QUFDbEI7SUFBVCxNQUFNLEVBQUU7a0VBQTJEO0FBR3BFO0lBREMsWUFBWSxDQUFDLGdCQUFnQixFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7MERBTzFDO0FBbEJVLDBCQUEwQjtJQUx0QyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsc0JBQXNCO1FBQ2hDLG1rQ0FBMkM7O0tBRTVDLENBQUM7R0FDVywwQkFBMEIsQ0FtRHRDO1NBbkRZLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBHVGFibGVSb3dBY3Rpb24sIEdUYWJsZUFjdGlvbiB9IGZyb20gJy4uLy4uL2dzLXRhYmxlcy53aWRnZXRzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ3MtdGFibGUtcm93LWFjdGlvbnMnLFxuICB0ZW1wbGF0ZVVybDogJy4vcm93LWFjdGlvbnMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9yb3ctYWN0aW9ucy5jb21wb25lbnQuc2FzcyddXG59KVxuZXhwb3J0IGNsYXNzIEdzVGFibGVSb3dBY3Rpb25zQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgcHVibGljIG9wZW5NZW51OiBib29sZWFuO1xuICBwdWJsaWMgbWVudUhhc0FjdGlvbnMgPSBmYWxzZTtcblxuICBAVmlld0NoaWxkKCdvcHRpb25zQ29udGFpbmVyJywgeyBzdGF0aWM6IGZhbHNlIH0pIHB1YmxpYyBvcHRpb25zQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdvcHRpb25zQnV0dG9uJywgeyBzdGF0aWM6IHRydWUgfSkgcHVibGljIG9wdGlvbnNCdXR0b246IEVsZW1lbnRSZWY7XG5cbiAgQElucHV0KCkgcHVibGljIHJvd0FjdGlvbjogR1RhYmxlUm93QWN0aW9uO1xuICBASW5wdXQoKSBwdWJsaWMgcm93RGF0YToge307XG4gIEBPdXRwdXQoKSBwcml2YXRlIHJvd0FjdGlvbkV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxHVGFibGVBY3Rpb24+KCk7XG5cbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6Y2xpY2snLCBbJyRldmVudCddKVxuICBjbGlja291dChldmVudCkge1xuICAgIGlmICh0aGlzLm9wdGlvbnNCdXR0b24gJiYgdGhpcy5vcHRpb25zQnV0dG9uLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgdGhpcy5vblRvZ2dsZUFjdGlvbnNNZW51KCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm9wZW5NZW51ICYmICF0aGlzLm9wdGlvbnNDb250YWluZXIubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICB0aGlzLm9wZW5NZW51ID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmIChjaGFuZ2VzLnJvd0FjdGlvbiAmJiBjaGFuZ2VzLnJvd0FjdGlvbi5jdXJyZW50VmFsdWUgJiYgY2hhbmdlcy5yb3dBY3Rpb24uY3VycmVudFZhbHVlLmFjdGlvbnMpIHtcbiAgICAgIGNoYW5nZXMucm93QWN0aW9uLmN1cnJlbnRWYWx1ZS5hY3Rpb25zLmZvckVhY2goKGFjdGlvbjogR1RhYmxlQWN0aW9uKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmRpc3BsYXlBY3Rpb25JZihhY3Rpb24pKSB7XG4gICAgICAgICAgdGhpcy5tZW51SGFzQWN0aW9ucyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1lbnVIYXNBY3Rpb25zID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGhkbEFjdGlvbihhY3Rpb246IEdUYWJsZUFjdGlvbik6IHZvaWQge1xuICAgIHRoaXMub3Blbk1lbnUgPSBmYWxzZTtcbiAgICBhY3Rpb24ucm93ID0gdGhpcy5yb3dEYXRhO1xuICAgIHRoaXMucm93QWN0aW9uRXZlbnQuZW1pdChhY3Rpb24pO1xuICB9XG5cbiAgcHVibGljIG9uVG9nZ2xlQWN0aW9uc01lbnUoKTogdm9pZCB7XG4gICAgdGhpcy5vcGVuTWVudSA9ICF0aGlzLm9wZW5NZW51O1xuICB9XG5cbiAgcHVibGljIGRpc3BsYXlBY3Rpb25JZihhY3Rpb246IEdUYWJsZUFjdGlvbik6IGJvb2xlYW4ge1xuICAgIGlmIChhY3Rpb24uaGlkZGVuKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChhY3Rpb24uZGlzcGxheUlmKSB7XG4gICAgICByZXR1cm4gdGhpcy5yb3dEYXRhW2FjdGlvbi5kaXNwbGF5SWYubW9kZWxdLnRvU3RyaW5nKCkgPT09IGFjdGlvbi5kaXNwbGF5SWYuaGFzVmFsdWUudG9TdHJpbmcoKSA/IHRydWUgOiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG59XG4iXX0=