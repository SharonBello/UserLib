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

  constructor(public dialog: MatDialog, private router: Router) {}

  ngOnInit(): void {}

  openAddUserDialog(): void {
    const dialogRef = this.dialog.open(NewUserComponent, {
      minWidth: '80vw',
      minHeight: '50vh',
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.router.navigate(['/']);
    });
  }
}
