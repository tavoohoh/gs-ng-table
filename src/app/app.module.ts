import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { GsTablesModule, GStyles } from 'projects/gs-tables/src/public-api';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

const gStyles: GStyles = {
  color: {
    font: '#1f2532',
    primary: '#f33959',
    secondary: '#eeeeee',
    border: '#e0e0e0',
    white: '#ffffff'
  },
  ui: {
    fontSize: '15px',
    padding: '1rem',
    primaryButton: {
      padding: '.6rem',
      color: '#ffffff',
      background: '#f33959',
      borderColor: '#f33959',
      borderRadius: '24px'
    }
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
    GsTablesModule.forRoot(gStyles)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
