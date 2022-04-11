import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
var GsCheckboxComponent = /** @class */ (function () {
    function GsCheckboxComponent() {
        this.valueChanged = new EventEmitter();
    }
    GsCheckboxComponent.prototype.ngOnChanges = function (changes) {
        if (changes) {
            if (changes.value && changes.value.currentValue) {
                this.value = changes.value.currentValue;
            }
            if (changes.rowIndex && changes.rowIndex.currentValue) {
                this.rowIndex = changes.rowIndex.currentValue;
            }
        }
    };
    GsCheckboxComponent.prototype.onValueChanged = function () {
        this.valueChanged.emit({
            value: this.value,
            index: this.rowIndex || null
        });
    };
    tslib_1.__decorate([
        Input()
    ], GsCheckboxComponent.prototype, "value", void 0);
    tslib_1.__decorate([
        Input()
    ], GsCheckboxComponent.prototype, "rowIndex", void 0);
    tslib_1.__decorate([
        Output()
    ], GsCheckboxComponent.prototype, "valueChanged", void 0);
    GsCheckboxComponent = tslib_1.__decorate([
        Component({
            selector: 'gs-checkbox',
            template: "<label class=\"gs-checkbox\" id=\"gsbtnany\">\n  <input\n    id=\"gsbtnany\"\n    type=\"checkbox\"\n    (change)=\"onValueChanged()\"\n    [(ngModel)]=\"value\"\n    [checked]=\"value\">\n  <div class=\"gs-checkmark\"id=\"gsbtnany\" [class.gs-checked]=\"value\">\n    <svg id=\"gsbtnany\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n      <path d=\"M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z\"/>\n    </svg>\n  </div>\n</label>\n",
            styles: ["*{font-family:Arial,Helvetica,sans-serif;color:var(--gs-font-color,inherit);font-size:var(--gs-font-size,.9rem);outline:0;box-sizing:border-box;line-height:1.4}.disabled{opacity:.5;cursor:default;pointer-events:none}.button{-webkit-transition:.2s ease-in-out;transition:.2s ease-in-out;cursor:pointer;border:none;text-align:center;font-weight:700;outline:0;padding:var(--gs-button-padding,.5rem);color:var(--gs-button-color,#fff);background-color:var(--gs-button-background,#f33959);border:1px solid var(--gs-button-border-color,#f33959);border-radius:var(--gs-button-border-radius,6px)}.button:hover{opacity:.8}:host ::ng-deep .gs-table-row:last-child gs-table-row-actions div.action div.options.dropdown,:host ::ng-deep .gs-table-row:nth-last-child(2) gs-table-row-actions div.action div.options.dropdown,:host ::ng-deep .gs-table-row:nth-last-child(3) gs-table-row-actions div.action div.options.dropdown{top:-30px}input::-moz-focus-inner{border:0!important}a,a:active,a:focus,a:hover,button,button:active,button:focus,button:hover{outline:0!important}.gs-checkbox{-webkit-transition:.2s ease-in-out;transition:.2s ease-in-out;display:block;position:relative;align-self:center;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin:0;padding:0;height:16px;width:16px;background-color:var(--gs-border-color,#eee)}.gs-checkbox:hover{opacity:.5;background:var(--gs-button-background,#f33959)}.gs-checkbox input{position:absolute;opacity:0;cursor:pointer;height:0;width:0;padding:0;margin:0;pointer-events:none}.gs-checkbox .gs-checkmark{display:grid;height:16px;width:16px;padding:0;outline:0;border:none}.gs-checkbox .gs-checkmark svg{position:relative;display:none;align-self:center;height:10.6666666667px;width:10.6666666667px;margin:0 auto;fill:var(--gs-white-color,#fff)}.gs-checkbox .gs-checkmark.gs-checked{background:var(--gs-button-background,#f33959)}.gs-checkbox .gs-checkmark.gs-checked svg{display:block}"]
        })
    ], GsCheckboxComponent);
    return GsCheckboxComponent;
}());
export { GsCheckboxComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHJhcHBpcGF5L2dzLXRhYmxlcy8iLCJzb3VyY2VzIjpbImxpYi9ncy10YWJsZS1lbGVtZW50cy9jaGVja2JveC9jaGVja2JveC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUE0QixNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUWpHO0lBTEE7UUFTb0IsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBb0IsQ0FBQztJQW9CeEUsQ0FBQztJQWxCQyx5Q0FBVyxHQUFYLFVBQVksT0FBc0I7UUFDaEMsSUFBSSxPQUFPLEVBQUU7WUFDWCxJQUFJLE9BQU8sQ0FBQyxLQUFLLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUU7Z0JBQy9DLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUM7YUFDekM7WUFFRCxJQUFJLE9BQU8sQ0FBQyxRQUFRLElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUU7Z0JBQ3JELElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUM7YUFDL0M7U0FDRjtJQUNILENBQUM7SUFFTSw0Q0FBYyxHQUFyQjtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDO1lBQ3JCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJO1NBQzdCLENBQUMsQ0FBQztJQUNMLENBQUM7SUF0QlE7UUFBUixLQUFLLEVBQUU7c0RBQXVCO0lBQ3RCO1FBQVIsS0FBSyxFQUFFO3lEQUF5QjtJQUV2QjtRQUFULE1BQU0sRUFBRTs2REFBNkQ7SUFKM0QsbUJBQW1CO1FBTC9CLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLCtmQUF3Qzs7U0FFekMsQ0FBQztPQUNXLG1CQUFtQixDQXdCL0I7SUFBRCwwQkFBQztDQUFBLEFBeEJELElBd0JDO1NBeEJZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEdTZWxlY3RhYmxlVmFsdWUgfSBmcm9tICcuLi8uLi9ncy10YWJsZXMubW9kZWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ3MtY2hlY2tib3gnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2hlY2tib3guY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jaGVja2JveC5jb21wb25lbnQuc2FzcyddXG59KVxuZXhwb3J0IGNsYXNzIEdzQ2hlY2tib3hDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBwdWJsaWMgdmFsdWU6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHB1YmxpYyByb3dJbmRleDogbnVtYmVyO1xuXG4gIEBPdXRwdXQoKSBwcml2YXRlIHZhbHVlQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8R1NlbGVjdGFibGVWYWx1ZT4oKTtcblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMpIHtcbiAgICAgIGlmIChjaGFuZ2VzLnZhbHVlICYmIGNoYW5nZXMudmFsdWUuY3VycmVudFZhbHVlKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSBjaGFuZ2VzLnZhbHVlLmN1cnJlbnRWYWx1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNoYW5nZXMucm93SW5kZXggJiYgY2hhbmdlcy5yb3dJbmRleC5jdXJyZW50VmFsdWUpIHtcbiAgICAgICAgdGhpcy5yb3dJbmRleCA9IGNoYW5nZXMucm93SW5kZXguY3VycmVudFZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvblZhbHVlQ2hhbmdlZCgpOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlQ2hhbmdlZC5lbWl0KHtcbiAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgaW5kZXg6IHRoaXMucm93SW5kZXggfHwgbnVsbFxuICAgIH0pO1xuICB9XG59XG4iXX0=