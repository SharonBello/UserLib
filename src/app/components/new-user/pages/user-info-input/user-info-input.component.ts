import { Component, OnInit, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { TitleOptions } from 'src/app/global/enums';
import { User, Name, Location, Street, Picture } from '../../../../interfaces/user';
import { NewUserService } from '../../../../services/new-user.service';

@Component({
  selector: 'app-user-info-input',
  templateUrl: './user-info-input.component.html',
  styleUrls: ['./user-info-input.component.scss'],
})
export class UserInfoInputComponent implements OnInit {
  // @ViewChild('Name') Name!: NgModel;
  // @ViewChild('email') email!: NgModel;
  // @ViewChild('Location') Location!: NgModel;
  // @ViewChild('Picture') Picture!: NgModel;

  
  submitted: boolean = false;
  selectedTitle!: TitleOptions;
  

  public get TitleOptions(): typeof TitleOptions {
    return TitleOptions;
  }

  constructor(private router: Router, private NewUserService: NewUserService) {}

  ngOnInit(): void {}

  // nextPage() {
  //   this.submitted = true;
  //   if (
  //     this.Name.title.control.errors ||
  //     this.Name.first.control.errors ||
  //     this.Name.last.control.errors ||
  //     this.email.control.errors ||
  //     this.Location.Street.name.control.errors ||
  //     this.Location.Street.number.control.errors ||
  //     this.Location.city.control.errors ||
  //     this.Location.state.control.errors ||
  //     this.Location.country.control.errors ||
  //     this.Location.postcode.control.errors ||
  //     this.Picture.medium.control.errors
  //   )
  //     return;
  //   this.NewUserService.newUser = this.newUser;
  //   this.router.navigate(['/new-user/confirm']);
  // }

  nextPage() {
    this.router.navigate(['/new-user/confirm']);
  }
}
