import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewUserComponent } from './components/new-user/new-user.component';
import { WelcomePageComponent } from './components/new-user/pages/welcome-page/welcome-page.component';
import { ConfirmNewUserComponent } from '../app/components/new-user/pages/confirm-new-user/confirm-new-user.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full',
  },
  {
    path: 'new-user',
    component: NewUserComponent,
    children: [
      { path: 'welcome-page', component: WelcomePageComponent },
      { path: 'confirm-new-user', component: ConfirmNewUserComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
