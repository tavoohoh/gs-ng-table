import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { GsTablesComponent } from './gs-tables.component';
import { GsTableRowActionsComponent } from './gs-table-elements/row-actions/row-actions.component';
import { GsAdditionalDataComponent } from './gs-table-elements/additional-data/additional-data.component';
import { GsCheckboxComponent } from './gs-table-elements/checkbox/checkbox.component';
import { GStyles } from './gs-tables.widgets';

@NgModule({
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
export class GsTablesModule {
  public static forRoot(styles?: GStyles): ModuleWithProviders {
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
