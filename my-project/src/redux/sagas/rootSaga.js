/* redux  co 2 loai action 
    action la object
    action la function thuong dung de xu ly api hoac goi cac action khac
    
*/

import { all } from "redux-saga/effects";
import * as TodoListSaga from "./TodoListSaga";
import * as Cyberbug from "./Cyberbugs/UserCyberbugSaga";
import * as ProJectCategory from "./Cyberbugs/ProjectCategorySaga";
import * as ProjectSaga from "./Cyberbugs/ProjectSaga";
import * as ProjectManageSaga from "./Cyberbugs/ProjectManageSaga";
export function* rootSaga() {
  yield all([
    TodoListSaga.theoDoiActionSaga(),
    TodoListSaga.theoDoiActionAddTask(),
    TodoListSaga.theoDoiActionDelTask(),
    TodoListSaga.theoDoiActionRejectTask(),
    TodoListSaga.theoDoiActionCheckTask(),
    Cyberbug.theoDoiSignin(),
    ProJectCategory.theoDoigetAllProjectCategory(),
    ProjectSaga.theoDoiCreateProjectSaga(),
    ProjectManageSaga.theoDoiGetAllProject(),
    ProjectManageSaga.theoDoiUpdateProject(),
    // ProjectManageSaga.theoDoiDeleteProject(),
    ProjectManageSaga.theoDoiDeleteProject(),
    Cyberbug.theoDoiGetUserSearch(),
  ]);
}
