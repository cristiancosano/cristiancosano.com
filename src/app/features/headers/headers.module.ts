import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderDefaultComponent } from './components/header-default/header-default.component';
import { AppButtonsModule } from '@shared/app-buttons/app-buttons.module';



@NgModule({
  declarations: [
    HeaderDefaultComponent,
  ],
  exports: [
    HeaderDefaultComponent
  ],
  imports: [
    CommonModule,
    AppButtonsModule
  ]
})
export class HeadersModule { }
