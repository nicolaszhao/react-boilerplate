import http from 'tote-box/lib/http';
import { USER_INFO } from './urls';

export function getUserInfo() {
  return http.get(USER_INFO);
}
