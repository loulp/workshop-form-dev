import { createReducer, on } from '@ngrx/store';
import { login, logout } from '../actions/auth.actions';

export let isLog = false;

export const authReducer = createReducer(
  isLog,
  on(login, (state) => (state = true)),
  on(logout, (state) => (state = false))
);
