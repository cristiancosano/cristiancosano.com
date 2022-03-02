import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AppButtonsModule } from '@shared/app-buttons/app-buttons.module';
import { ServicesComponent } from './components/services/services.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    WelcomeComponent,
    ServicesComponent
  ],
  exports: [
    WelcomeComponent,
    ServicesComponent
  ],
  imports: [
    CommonModule,
    AppButtonsModule,
    MatIconModule
  ],
  providers: [
  ]
})
export class HomeModule { }
