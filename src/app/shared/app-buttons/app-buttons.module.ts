import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialButtonComponent } from './social-button/social-button.component';
import { MatIconModule } from '@angular/material/icon';
import { DefaultButtonComponent } from './default-button/default-button.component';
import { AnimatedMouseButtonComponent } from './animated-mouse-button/animated-mouse-button.component';


@NgModule({
  declarations: [
    SocialButtonComponent,
    DefaultButtonComponent,
    AnimatedMouseButtonComponent
  ],
  exports: [
    SocialButtonComponent, 
    DefaultButtonComponent,
    AnimatedMouseButtonComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ]
})
export class AppButtonsModule { }
