import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../interfaces/user';
import { faEdit, faUserXmark } from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EditUserComponent } from '../edit-user/edit-user.component';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  providers: [EditUserComponent],
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss'],
})
export class UserItemComponent implements OnInit {
  @Input() user!: User | any;
  @Output() onEditUser: EventEmitter<User> = new EventEmitter();
  faEdit = faEdit;
  faDelete = faUserXmark;
  showEditUser = false;

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {}

  onEdit(user: User): void {
    this.showEditUser = !this.showEditUser;
  }

  onOpenEditUserDialog(user: User): void {
    this.onEditUser.emit(user);
    const dialogRef = this.dialog.open(EditUserComponent, {
      minWidth: '80vw',
      minHeight: '50vh',
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.router.navigate(['/']);
    });
  }

  onDeleteUser(user: User): void {
    console.log(user);
    // this.messageService.add({confirmation: 'Are you sure you want to delete this user?', key: 'c', sticky: true});
    this.messageService.clear();
    this.messageService.add({
      key: 'c',
      sticky: true,
      severity: 'warn',
      summary: 'Are you sure?',
      detail: 'Confirm to proceed',
    });
  }

  onConfirm() {
    this.messageService.clear('c');
  }

  onReject() {
    this.messageService.clear('c');
  }
}
