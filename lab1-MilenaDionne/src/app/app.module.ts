import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TempConverterComponent } from './temp-converter/temp-converter.component';

@NgModule({
  declarations: [
    AppComponent,
    TempConverterComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [TempConverterComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
