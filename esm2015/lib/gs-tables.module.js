var GsTablesModule_1;
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
let GsTablesModule = GsTablesModule_1 = class GsTablesModule {
    static forRoot(styles) {
        return {
            ngModule: GsTablesModule_1,
            providers: [
                {
                    provide: 'customStyles',
                    useValue: styles
                }
            ]
        };
    }
};
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
export { GsTablesModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3MtdGFibGVzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0ByYXBwaXBheS9ncy10YWJsZXMvIiwic291cmNlcyI6WyJsaWIvZ3MtdGFibGVzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQ25HLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLCtEQUErRCxDQUFDO0FBQzFHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBa0J0RixJQUFhLGNBQWMsc0JBQTNCLE1BQWEsY0FBYztJQUNsQixNQUFNLENBQUMsT0FBTyxDQUFDLE1BQWdCO1FBQ3BDLE9BQU87WUFDTCxRQUFRLEVBQUUsZ0JBQWM7WUFDeEIsU0FBUyxFQUFFO2dCQUNUO29CQUNFLE9BQU8sRUFBRSxjQUFjO29CQUN2QixRQUFRLEVBQUUsTUFBTTtpQkFDakI7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQTtBQVpZLGNBQWM7SUFmMUIsUUFBUSxDQUFDO1FBQ1IsWUFBWSxFQUFFO1lBQ1osaUJBQWlCO1lBQ2pCLDBCQUEwQjtZQUMxQix5QkFBeUI7WUFDekIsbUJBQW1CO1NBQ3BCO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsWUFBWTtZQUNaLGVBQWU7WUFDZixnQkFBZ0I7WUFDaEIsV0FBVztTQUNaO1FBQ0QsT0FBTyxFQUFFLENBQUMsaUJBQWlCLENBQUM7S0FDN0IsQ0FBQztHQUNXLGNBQWMsQ0FZMUI7U0FaWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBUcmFuc2xhdGVNb2R1bGUgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgR3NUYWJsZXNDb21wb25lbnQgfSBmcm9tICcuL2dzLXRhYmxlcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgR3NUYWJsZVJvd0FjdGlvbnNDb21wb25lbnQgfSBmcm9tICcuL2dzLXRhYmxlLWVsZW1lbnRzL3Jvdy1hY3Rpb25zL3Jvdy1hY3Rpb25zLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHc0FkZGl0aW9uYWxEYXRhQ29tcG9uZW50IH0gZnJvbSAnLi9ncy10YWJsZS1lbGVtZW50cy9hZGRpdGlvbmFsLWRhdGEvYWRkaXRpb25hbC1kYXRhLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHc0NoZWNrYm94Q29tcG9uZW50IH0gZnJvbSAnLi9ncy10YWJsZS1lbGVtZW50cy9jaGVja2JveC9jaGVja2JveC5jb21wb25lbnQnO1xuaW1wb3J0IHsgR1N0eWxlcyB9IGZyb20gJy4vZ3MtdGFibGVzLndpZGdldHMnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBHc1RhYmxlc0NvbXBvbmVudCxcbiAgICBHc1RhYmxlUm93QWN0aW9uc0NvbXBvbmVudCxcbiAgICBHc0FkZGl0aW9uYWxEYXRhQ29tcG9uZW50LFxuICAgIEdzQ2hlY2tib3hDb21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBUcmFuc2xhdGVNb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbR3NUYWJsZXNDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEdzVGFibGVzTW9kdWxlIHtcbiAgcHVibGljIHN0YXRpYyBmb3JSb290KHN0eWxlcz86IEdTdHlsZXMpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEdzVGFibGVzTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiAnY3VzdG9tU3R5bGVzJyxcbiAgICAgICAgICB1c2VWYWx1ZTogc3R5bGVzXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iXX0=