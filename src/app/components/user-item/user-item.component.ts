import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../interfaces/user';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent implements OnInit {
  @Input() user!:User;
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

}