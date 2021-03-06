import { CommonComponentsModule } from './common-components/common-components.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
