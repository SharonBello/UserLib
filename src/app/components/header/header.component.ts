import { Component, OnInit } from '@angular/core';
import { NewUserComponent } from '../new-user/new-user.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  providers: [NewUserComponent],
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  scroll: boolean = false;
  onWindowResize: number = window.innerWidth;

  constructor(public dialog: MatDialog, private router: Router) {}

  ngOnInit(): void {
    window.addEventListener('scroll', this.scrolling, true);
  }

  openAddUserDialog(): void {
    const dialogRef = this.dialog.open(NewUserComponent, {
      minWidth: '80vw',
      minHeight: '50vh',
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.router.navigate(['/']);
    });
  }

  scrolling = (s: any) => {
    let sc = s.target.scrollingElement.scrollTop;
    if (sc >= 550 || this.onWindowResize <= 440) {
      this.scroll = true;
    } else {
      this.scroll = false;
    }
  };
}
