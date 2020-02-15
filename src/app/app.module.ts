import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { GsTablesModule, GTableStyles } from 'projects/gs-tables/src/public-api';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

const tableStyles: GTableStyles = {
  color: '#1f2532',
  fontSize: '1rem',
  primaryColor: '#f33959',
  secondaryColor: '#eeeeee',
  neutralColor: '#757574',
  whiteColor: null,
  padding: '.4rem',
  buttom: {
    padding: '.3rem',
    color: '#ffffff',
    background: '#f33959',
    borderColor: '#f33959',
    borderRadius: '24px'
  }
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    GsTablesModule.forRoot(tableStyles)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
