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
  title: string = 'The Users Library';

  constructor(public dialog: MatDialog, private router: Router) {}

  ngOnInit(): void {}

  toggleAddUser() {
    console.log('toggle');
  }

  openAddUserDialog(): void {
    const dialogRef = this.dialog.open(NewUserComponent, {
      maxWidth: '80%',
      maxHeight: '50%',
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.router.navigate(['/']);
    });
  }
}
