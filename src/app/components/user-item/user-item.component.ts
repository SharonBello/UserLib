import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../interfaces/user';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EditUserComponent } from '../edit-user/edit-user.component';

@Component({
  providers: [EditUserComponent],
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss'],
})
export class UserItemComponent implements OnInit {
  @Input() user!: User;
  @Output() onEditUser: EventEmitter<User> = new EventEmitter();
  faEdit = faEdit;
  showEditUser = false;
  
  constructor(public dialog: MatDialog, private router: Router) {}

  ngOnInit(): void {}

  // onEdit(user: User): void {
  //   this.onEditUser.emit(user);
  //   this.showEditUser = !this.showEditUser;
  // }

  editUser(user: User): void {
    console.log(user);
    //TODO: send action to save user to store users
  }

  onOpenEditUserDialog(user: User): void {
    this.onEditUser.emit(user);
    const dialogRef = this.dialog.open(EditUserComponent, {
      maxWidth: '80%',
      maxHeight: '50%',
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.router.navigate(['/']);
    });
  }

}
