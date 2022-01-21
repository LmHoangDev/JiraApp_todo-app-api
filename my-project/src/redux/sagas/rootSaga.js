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
import * as TaskTypeCyberbug from "./Cyberbugs/TaskTypeCyberbug";
import * as PrioritySaga from "./Cyberbugs/PrioritySaga";
import * as TaskSaga from "./Cyberbugs/TaskSaga";
import * as StatusSaga from "./Cyberbugs/StatusSaga";
export function* rootSaga() {
  yield all([
    TodoListSaga.theoDoiActionSaga(),
    TodoListSaga.theoDoiActionAddTask(),
    TodoListSaga.theoDoiActionDelTask(),
    TodoListSaga.theoDoiActionRejectTask(),
    TodoListSaga.theoDoiActionCheckTask(),
    ///
    Cyberbug.theoDoiSignin(),
    Cyberbug.theoDoiGetUserSearch(),
    Cyberbug.theoDoiAddUserProject(),
    Cyberbug.theoDoiRemoveUserProject(),
    Cyberbug.theoDoiGetUserByProjectIdSaga(),
    ///
    ProJectCategory.theoDoigetAllProjectCategory(),
    //
    ProjectSaga.theoDoiCreateProjectSaga(),
    ProjectSaga.theoDoiGetProjectDetail(),
    ///
    ProjectManageSaga.theoDoiGetAllProject(),
    ProjectManageSaga.theoDoiUpdateProject(),
    ProjectManageSaga.theoDoiDeleteProject(),

    //
    TaskTypeCyberbug.theoDoiGetAllTaskTypeSaga(),
    //
    PrioritySaga.theoDoiGetAllPriority(),

    TaskSaga.theoDoiGetCreateTaskSaga(),
    StatusSaga.theoDoiGetAllStatusSaga(),
  ]);
}
