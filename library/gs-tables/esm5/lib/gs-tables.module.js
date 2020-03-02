import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { GsTablesComponent } from './gs-tables.component';
import { GsTableRowActionsComponent } from './gs-table-elements/row-actions/row-actions.component';
var GsTablesModule = /** @class */ (function () {
    function GsTablesModule() {
    }
    GsTablesModule_1 = GsTablesModule;
    GsTablesModule.forRoot = function (styles) {
        return {
            ngModule: GsTablesModule_1,
            providers: [
                {
                    provide: 'customStyles',
                    useValue: styles
                }
            ]
        };
    };
    var GsTablesModule_1;
    GsTablesModule = GsTablesModule_1 = tslib_1.__decorate([
        NgModule({
            declarations: [
                GsTablesComponent,
                GsTableRowActionsComponent
            ],
            imports: [
                CommonModule,
                TranslateModule,
                HttpClientModule
            ],
            exports: [GsTablesComponent]
        })
    ], GsTablesModule);
    return GsTablesModule;
}());
export { GsTablesModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3MtdGFibGVzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dzLXRhYmxlcy8iLCJzb3VyY2VzIjpbImxpYi9ncy10YWJsZXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXhELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBZW5HO0lBQUE7SUFZQSxDQUFDO3VCQVpZLGNBQWM7SUFDWCxzQkFBTyxHQUFyQixVQUFzQixNQUFnQjtRQUNwQyxPQUFPO1lBQ0wsUUFBUSxFQUFFLGdCQUFjO1lBQ3hCLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxPQUFPLEVBQUUsY0FBYztvQkFDdkIsUUFBUSxFQUFFLE1BQU07aUJBQ2pCO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQzs7SUFYVSxjQUFjO1FBWjFCLFFBQVEsQ0FBQztZQUNSLFlBQVksRUFBRTtnQkFDWixpQkFBaUI7Z0JBQ2pCLDBCQUEwQjthQUMzQjtZQUNELE9BQU8sRUFBRTtnQkFDUCxZQUFZO2dCQUNaLGVBQWU7Z0JBQ2YsZ0JBQWdCO2FBQ2pCO1lBQ0QsT0FBTyxFQUFFLENBQUMsaUJBQWlCLENBQUM7U0FDN0IsQ0FBQztPQUNXLGNBQWMsQ0FZMUI7SUFBRCxxQkFBQztDQUFBLEFBWkQsSUFZQztTQVpZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFRyYW5zbGF0ZU1vZHVsZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgR3NUYWJsZXNDb21wb25lbnQgfSBmcm9tICcuL2dzLXRhYmxlcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgR3NUYWJsZVJvd0FjdGlvbnNDb21wb25lbnQgfSBmcm9tICcuL2dzLXRhYmxlLWVsZW1lbnRzL3Jvdy1hY3Rpb25zL3Jvdy1hY3Rpb25zLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHU3R5bGVzIH0gZnJvbSAnLi9ncy10YWJsZXMud2lkZ2V0cyc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEdzVGFibGVzQ29tcG9uZW50LFxuICAgIEdzVGFibGVSb3dBY3Rpb25zQ29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgVHJhbnNsYXRlTW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW0dzVGFibGVzQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBHc1RhYmxlc01vZHVsZSB7XG4gIHB1YmxpYyBzdGF0aWMgZm9yUm9vdChzdHlsZXM/OiBHU3R5bGVzKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBHc1RhYmxlc01vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogJ2N1c3RvbVN0eWxlcycsXG4gICAgICAgICAgdXNlVmFsdWU6IHN0eWxlc1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl19