import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { GsTablesComponent } from './gs-tables.component';
import { GsTableRowActionsComponent } from './gs-table-elements/row-actions/row-actions.component';
import { GsAdditionalDataComponent } from './gs-table-elements/additional-data/additional-data.component';
import { GsCheckboxComponent } from './gs-table-elements/checkbox/checkbox.component';
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
                GsTableRowActionsComponent,
                GsAdditionalDataComponent,
                GsCheckboxComponent
            ],
            imports: [
                CommonModule,
                TranslateModule,
                HttpClientModule,
                FormsModule
            ],
            exports: [GsTablesComponent]
        })
    ], GsTablesModule);
    return GsTablesModule;
}());
export { GsTablesModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3MtdGFibGVzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0ByYXBwaXBheS9ncy10YWJsZXMvIiwic291cmNlcyI6WyJsaWIvZ3MtdGFibGVzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDbkcsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sK0RBQStELENBQUM7QUFDMUcsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFrQnRGO0lBQUE7SUFZQSxDQUFDO3VCQVpZLGNBQWM7SUFDWCxzQkFBTyxHQUFyQixVQUFzQixNQUFnQjtRQUNwQyxPQUFPO1lBQ0wsUUFBUSxFQUFFLGdCQUFjO1lBQ3hCLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxPQUFPLEVBQUUsY0FBYztvQkFDdkIsUUFBUSxFQUFFLE1BQU07aUJBQ2pCO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQzs7SUFYVSxjQUFjO1FBZjFCLFFBQVEsQ0FBQztZQUNSLFlBQVksRUFBRTtnQkFDWixpQkFBaUI7Z0JBQ2pCLDBCQUEwQjtnQkFDMUIseUJBQXlCO2dCQUN6QixtQkFBbUI7YUFDcEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AsWUFBWTtnQkFDWixlQUFlO2dCQUNmLGdCQUFnQjtnQkFDaEIsV0FBVzthQUNaO1lBQ0QsT0FBTyxFQUFFLENBQUMsaUJBQWlCLENBQUM7U0FDN0IsQ0FBQztPQUNXLGNBQWMsQ0FZMUI7SUFBRCxxQkFBQztDQUFBLEFBWkQsSUFZQztTQVpZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFRyYW5zbGF0ZU1vZHVsZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBHc1RhYmxlc0NvbXBvbmVudCB9IGZyb20gJy4vZ3MtdGFibGVzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHc1RhYmxlUm93QWN0aW9uc0NvbXBvbmVudCB9IGZyb20gJy4vZ3MtdGFibGUtZWxlbWVudHMvcm93LWFjdGlvbnMvcm93LWFjdGlvbnMuY29tcG9uZW50JztcbmltcG9ydCB7IEdzQWRkaXRpb25hbERhdGFDb21wb25lbnQgfSBmcm9tICcuL2dzLXRhYmxlLWVsZW1lbnRzL2FkZGl0aW9uYWwtZGF0YS9hZGRpdGlvbmFsLWRhdGEuY29tcG9uZW50JztcbmltcG9ydCB7IEdzQ2hlY2tib3hDb21wb25lbnQgfSBmcm9tICcuL2dzLXRhYmxlLWVsZW1lbnRzL2NoZWNrYm94L2NoZWNrYm94LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHU3R5bGVzIH0gZnJvbSAnLi9ncy10YWJsZXMud2lkZ2V0cyc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEdzVGFibGVzQ29tcG9uZW50LFxuICAgIEdzVGFibGVSb3dBY3Rpb25zQ29tcG9uZW50LFxuICAgIEdzQWRkaXRpb25hbERhdGFDb21wb25lbnQsXG4gICAgR3NDaGVja2JveENvbXBvbmVudFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFRyYW5zbGF0ZU1vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtHc1RhYmxlc0NvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgR3NUYWJsZXNNb2R1bGUge1xuICBwdWJsaWMgc3RhdGljIGZvclJvb3Qoc3R5bGVzPzogR1N0eWxlcyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogR3NUYWJsZXNNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6ICdjdXN0b21TdHlsZXMnLFxuICAgICAgICAgIHVzZVZhbHVlOiBzdHlsZXNcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiJdfQ==