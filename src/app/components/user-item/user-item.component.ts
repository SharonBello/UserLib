import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../interfaces/user';
import { Store } from '@ngrx/store';
import { update, deleteUser } from '../../store/user.actions';
import { faEdit, faUserXmark } from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EditUserComponent } from '../edit-user/edit-user.component';
import { MessageService } from 'primeng/api';

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
    private messageService: MessageService,
    private store: Store<{ users: User[] }>
  ) {}

  ngOnInit(): void {}

  onEdit(user: User): void {
    this.showEditUser = !this.showEditUser;
  }

  onDeleteUser(user: User): void {
    // this.messageService.add({key: 'c', sticky: true, severity:'warn', summary:'Are you sure?', detail:'Confirm to proceed'});
    this.store.dispatch(deleteUser({ user: user }));
  }

  onConfirm() {
    this.messageService.clear('c');
  }

  onReject() {
    this.messageService.clear('c');
  }

  cancelEdit(isEdit: boolean): void {
    this.showEditUser = false;
  }

  editUser(user: User): void {
    //send action save user
    this.store.dispatch(update({ user: user }));
  }
}
