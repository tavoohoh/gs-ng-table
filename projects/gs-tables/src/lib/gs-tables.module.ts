import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GsTablesComponent } from './gs-tables.component';
import { GsTableRowActionsComponent } from './gs-table-elements/row-actions/row-actions.component';
import { GTableStyles } from './gs-tables.widgets';

@NgModule({
  declarations: [
    GsTablesComponent,
    GsTableRowActionsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [GsTablesComponent]
})
export class GsTablesModule {
  public static forRoot(styles?: GTableStyles): ModuleWithProviders {
    return {
      ngModule: GsTablesModule,
      providers: [
        {
          provide: 'customStyles',
          useValue: styles
        }
      ]
    };
  }
}
