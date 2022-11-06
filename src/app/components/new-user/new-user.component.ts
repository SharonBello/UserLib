import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  items!: MenuItem[];
  activeIndex: number = 0;

  constructor(private messageService: MessageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.router.navigate(['/new-user/welcome-page']);
    this.items = [{
      label: 'Step-one',
      command: (event: any) => {
        this.activeIndex = 0;
      },
      routerLink: '/new-user/welcome-page'
    },
    {
      label: 'Step-two',
      command: (event: any) => {
        this.activeIndex = 1;
      },
      routerLink: '/new-user/user-info-input'
    },
    {
      label: 'Step-three',
      command: (event: any) => {
        this.activeIndex = 2;
      },
      routerLink: '/new-user/confirm-new-user'
    }
    ];
  }
}
