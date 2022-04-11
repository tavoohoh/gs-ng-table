import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
let GsCheckboxComponent = class GsCheckboxComponent {
    constructor() {
        this.valueChanged = new EventEmitter();
    }
    ngOnChanges(changes) {
        if (changes) {
            if (changes.value && changes.value.currentValue) {
                this.value = changes.value.currentValue;
            }
            if (changes.rowIndex && changes.rowIndex.currentValue) {
                this.rowIndex = changes.rowIndex.currentValue;
            }
        }
    }
    onValueChanged() {
        this.valueChanged.emit({
            value: this.value,
            index: this.rowIndex || null
        });
    }
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
export { GsCheckboxComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHJhcHBpcGF5L2dzLXRhYmxlcy8iLCJzb3VyY2VzIjpbImxpYi9ncy10YWJsZS1lbGVtZW50cy9jaGVja2JveC9jaGVja2JveC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUE0QixNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUWpHLElBQWEsbUJBQW1CLEdBQWhDLE1BQWEsbUJBQW1CO0lBTGhDO1FBU29CLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQW9CLENBQUM7SUFvQnhFLENBQUM7SUFsQkMsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxFQUFFO1lBQ1gsSUFBSSxPQUFPLENBQUMsS0FBSyxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFO2dCQUMvQyxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDO2FBQ3pDO1lBRUQsSUFBSSxPQUFPLENBQUMsUUFBUSxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFO2dCQUNyRCxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDO2FBQy9DO1NBQ0Y7SUFDSCxDQUFDO0lBRU0sY0FBYztRQUNuQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQztZQUNyQixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsS0FBSyxFQUFFLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSTtTQUM3QixDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YsQ0FBQTtBQXZCVTtJQUFSLEtBQUssRUFBRTtrREFBdUI7QUFDdEI7SUFBUixLQUFLLEVBQUU7cURBQXlCO0FBRXZCO0lBQVQsTUFBTSxFQUFFO3lEQUE2RDtBQUozRCxtQkFBbUI7SUFML0IsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGFBQWE7UUFDdkIsK2ZBQXdDOztLQUV6QyxDQUFDO0dBQ1csbUJBQW1CLENBd0IvQjtTQXhCWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBHU2VsZWN0YWJsZVZhbHVlIH0gZnJvbSAnLi4vLi4vZ3MtdGFibGVzLm1vZGVscyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dzLWNoZWNrYm94JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NoZWNrYm94LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2hlY2tib3guY29tcG9uZW50LnNhc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBHc0NoZWNrYm94Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgcHVibGljIHZhbHVlOiBib29sZWFuO1xuICBASW5wdXQoKSBwdWJsaWMgcm93SW5kZXg6IG51bWJlcjtcblxuICBAT3V0cHV0KCkgcHJpdmF0ZSB2YWx1ZUNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPEdTZWxlY3RhYmxlVmFsdWU+KCk7XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzKSB7XG4gICAgICBpZiAoY2hhbmdlcy52YWx1ZSAmJiBjaGFuZ2VzLnZhbHVlLmN1cnJlbnRWYWx1ZSkge1xuICAgICAgICB0aGlzLnZhbHVlID0gY2hhbmdlcy52YWx1ZS5jdXJyZW50VmFsdWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChjaGFuZ2VzLnJvd0luZGV4ICYmIGNoYW5nZXMucm93SW5kZXguY3VycmVudFZhbHVlKSB7XG4gICAgICAgIHRoaXMucm93SW5kZXggPSBjaGFuZ2VzLnJvd0luZGV4LmN1cnJlbnRWYWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb25WYWx1ZUNoYW5nZWQoKTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZUNoYW5nZWQuZW1pdCh7XG4gICAgICB2YWx1ZTogdGhpcy52YWx1ZSxcbiAgICAgIGluZGV4OiB0aGlzLnJvd0luZGV4IHx8IG51bGxcbiAgICB9KTtcbiAgfVxufVxuIl19