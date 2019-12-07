import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [ButtonComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  exports: [ButtonComponent]
})
export class CommonComponentsModule { }
