var GsTablesModule_1;
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { GsTablesComponent } from './gs-tables.component';
import { GsTableRowActionsComponent } from './gs-table-elements/row-actions/row-actions.component';
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
export { GsTablesModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3MtdGFibGVzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dzLXRhYmxlcy8iLCJzb3VyY2VzIjpbImxpYi9ncy10YWJsZXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV4RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQWVuRyxJQUFhLGNBQWMsc0JBQTNCLE1BQWEsY0FBYztJQUNsQixNQUFNLENBQUMsT0FBTyxDQUFDLE1BQWdCO1FBQ3BDLE9BQU87WUFDTCxRQUFRLEVBQUUsZ0JBQWM7WUFDeEIsU0FBUyxFQUFFO2dCQUNUO29CQUNFLE9BQU8sRUFBRSxjQUFjO29CQUN2QixRQUFRLEVBQUUsTUFBTTtpQkFDakI7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQTtBQVpZLGNBQWM7SUFaMUIsUUFBUSxDQUFDO1FBQ1IsWUFBWSxFQUFFO1lBQ1osaUJBQWlCO1lBQ2pCLDBCQUEwQjtTQUMzQjtRQUNELE9BQU8sRUFBRTtZQUNQLFlBQVk7WUFDWixlQUFlO1lBQ2YsZ0JBQWdCO1NBQ2pCO1FBQ0QsT0FBTyxFQUFFLENBQUMsaUJBQWlCLENBQUM7S0FDN0IsQ0FBQztHQUNXLGNBQWMsQ0FZMUI7U0FaWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBUcmFuc2xhdGVNb2R1bGUgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmltcG9ydCB7IEdzVGFibGVzQ29tcG9uZW50IH0gZnJvbSAnLi9ncy10YWJsZXMuY29tcG9uZW50JztcbmltcG9ydCB7IEdzVGFibGVSb3dBY3Rpb25zQ29tcG9uZW50IH0gZnJvbSAnLi9ncy10YWJsZS1lbGVtZW50cy9yb3ctYWN0aW9ucy9yb3ctYWN0aW9ucy5jb21wb25lbnQnO1xuaW1wb3J0IHsgR1N0eWxlcyB9IGZyb20gJy4vZ3MtdGFibGVzLndpZGdldHMnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBHc1RhYmxlc0NvbXBvbmVudCxcbiAgICBHc1RhYmxlUm93QWN0aW9uc0NvbXBvbmVudFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFRyYW5zbGF0ZU1vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtHc1RhYmxlc0NvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgR3NUYWJsZXNNb2R1bGUge1xuICBwdWJsaWMgc3RhdGljIGZvclJvb3Qoc3R5bGVzPzogR1N0eWxlcyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogR3NUYWJsZXNNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6ICdjdXN0b21TdHlsZXMnLFxuICAgICAgICAgIHVzZVZhbHVlOiBzdHlsZXNcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiJdfQ==