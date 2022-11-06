import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon';
import { StepsModule } from 'primeng/steps';
import { ToastModule } from 'primeng/toast';
import { FormsModule } from '@angular/forms';
import { MessageService, SharedModule } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SelectButtonModule } from 'primeng/selectbutton';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DialogModule } from 'primeng/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { InputTextareaModule } from 'primeng/inputtextarea';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { UsersComponent } from './components/users/users.component';
import { UserItemComponent } from './components/user-item/user-item.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { WelcomePageComponent } from './components/new-user/pages/welcome-page/welcome-page.component';
import { UserInfoInputComponent } from '../app/components/new-user/pages/user-info-input/user-info-input.component';
import { ConfirmNewUserComponent } from '../app/components/new-user/pages/confirm-new-user/confirm-new-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { EmailValidatorDirective } from './directives/email-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    UsersComponent,
    UserItemComponent,
    NewUserComponent,
    WelcomePageComponent,
    UserInfoInputComponent,
    ConfirmNewUserComponent,
    EditUserComponent,
    EmailValidatorDirective
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
    SharedModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    SelectButtonModule,
    MatIconModule,
    RadioButtonModule,
    DialogModule,
    MatDialogModule,
    InputTextareaModule,
  ],
  providers: [MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
