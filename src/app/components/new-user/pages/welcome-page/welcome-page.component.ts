import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TitleOptions } from 'src/app/global/enums';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss'],
})
export class WelcomePageComponent implements OnInit {
  selectedTitle!: TitleOptions;

  public get TitleOptions(): typeof TitleOptions {
    return TitleOptions;
  }

  constructor(private router: Router) {}

  ngOnInit(): void {}

  nextPage() {
    this.router.navigate(['/new-user/user-info-input']);
  }
}
