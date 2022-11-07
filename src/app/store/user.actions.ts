import { createAction, props } from '@ngrx/store';
import { User } from '../interfaces/user';

export const update = createAction(
    '[User] update',
    props<{ user: User }>()
);

export const set = createAction(
    '[User] set',
    props<{ users: User[] }>()
);

export const deleteUser = createAction(
    '[User] deleteUser',
    props<{ user: User }>()
);

