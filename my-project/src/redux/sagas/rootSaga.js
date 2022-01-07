/* redux  co 2 loai action 
    action la object
    action la function thuong dung de xu ly api hoac goi cac action khac
    
*/

import { all } from "redux-saga/effects";
import * as TodolistSaga from "./TodolistSaga";
export function* rootSaga() {
  yield all([
    TodolistSaga.theoDoiActionSaga(),
    TodolistSaga.theoDoiActionAddTask(),
    TodolistSaga.theoDoiActionDelTask(),
    TodolistSaga.theoDoiActionRejectTask(),
    TodolistSaga.theoDoiActionCheckTask(),
  ]);
}
