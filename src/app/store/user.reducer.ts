import { createReducer, on } from '@ngrx/store';
import { User } from '../interfaces/user';
import { update, set, deleteUser, addNewUser } from './user.actions';

interface usersState {
  users: User[];
}

export const initialState: usersState = { users: [] };

export const userReducer = createReducer(
  initialState,
  on(update, (state, { user }) => {
    let newState = { ...state };
    const index = newState.users.findIndex((x) => x.id.value === user.id.value);
    let users = [...newState.users];
    users[index] = user;
    newState.users = users;  
    return newState;
  }),

  on(set, (state, { users }) => {
    let newState = { ...state };
    newState.users = users;
    return newState;
  }),

  on(deleteUser, (state, { user }) => {
    let newState = { ...state };
    let _users = newState.users.filter((x) => x.id.value !== user.id.value);
    newState.users = _users;
    return newState;
  }),

  on(addNewUser, (state, { user }) => {
    let newState = { ...state };
    let newUser = newState.users.push(user);
    let users = [...newState.users];
    users[newUser] = user;
    newState.users = users;
    return newState;
  })
);
