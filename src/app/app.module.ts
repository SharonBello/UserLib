import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './store/user.reducer';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { StepsModule } from 'primeng/steps';
import { ToastModule } from 'primeng/toast';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SelectButtonModule } from 'primeng/selectbutton';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DialogModule } from 'primeng/dialog';
import { MatDialogModule } from '@angular/material/dialog';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgParticlesModule } from "ng-particles";
import { tsParticles } from "tsparticles-engine";

import { HeaderComponent } from './components/header/header.component';
import { UsersComponent } from './components/users/users.component';
import { UserItemComponent } from './components/user-item/user-item.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { WelcomePageComponent } from './components/new-user/pages/welcome-page/welcome-page.component';
import { ConfirmNewUserComponent } from '../app/components/new-user/pages/confirm-new-user/confirm-new-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { EmailValidatorDirective } from './directives/email-validator.directive';
import { AppFooterComponent } from './components/app-footer/app-footer.component';
import { HomepageHeroComponent } from './components/homepage-hero/homepage-hero.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsersComponent,
    UserItemComponent,
    NewUserComponent,
    WelcomePageComponent,
    ConfirmNewUserComponent,
    EditUserComponent,
    EmailValidatorDirective,
    AppFooterComponent,
    HomepageHeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    FontAwesomeModule,
    StepsModule,
    ToastModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    SelectButtonModule,
    MatIconModule,
    RadioButtonModule,
    DialogModule,
    MatDialogModule,
    RouterModule,
    NgParticlesModule,
    StoreModule.forRoot({ data: userReducer })
  ],
  providers: [MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
