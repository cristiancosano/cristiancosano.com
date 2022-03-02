import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
      path: 'home',
      redirectTo: '',
      pathMatch: 'full',
  },
  { path: 'contact', loadChildren: () => import('./pages/contact-page/contact-page.module').then(m => m.ContactPageModule) },
  { path: '', loadChildren: () => import('./pages/home-page/home-page.module').then(m => m.HomePageModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
