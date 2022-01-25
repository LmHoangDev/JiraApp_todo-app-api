import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch, useHistory } from "react-router-dom";
import "./App.css";
import Loading from "./components/GlobalSetting/LoadingComponent/Loading";
import NotFound from "./components/NotFound/NotFound";
import TodoListSaga from "./components/TodoListSaga/TodoListSaga";
import DrawerCyberbugs from "./HOC/CyberbugsHOC/DrawerCyberbugs";
import CreateProject from "./pages/Cyberbugs/CreateProject/CreateProject";
import LoginWithFormMik from "./pages/Cyberbugs/LoginCyberbugs/LoginCyberbugs";
import ProjectManagement from "./pages/Cyberbugs/ProjectManagement/ProjectManagement";
import DragDrop from "./pages/DemoDragDrop/DragDrop";
import Home from "./pages/Home/Home";
import indexCyberbug from "./redux/sagas/Cyberbugs/indexCyberbug";
import { CyberbugTemplate } from "./templates/HomeTemplates/CyberbugsTemplate";
import { HomeTemplate } from "./templates/HomeTemplates/HomeTemplate";
import { UserLoginTemplate } from "./templates/HomeTemplates/UserLoginTemplate";
function App() {
  const history = useHistory();
  const dispatch = useDispatch();
  console.log(history);
  useEffect(() => {
    dispatch({ type: "ADD_HISTORY", history: history });
  }, []);

  return (
    <>
      <Loading />
      <DrawerCyberbugs />
      <Switch>
        <HomeTemplate path="/home" exact Component={Home} />
        <CyberbugTemplate path="/" exact Component={indexCyberbug} />
        <UserLoginTemplate path="/login" exact Component={LoginWithFormMik} />
        <CyberbugTemplate path="/cyberbug" exact Component={indexCyberbug} />
        <CyberbugTemplate
          exact
          path="/create-project"
          Component={CreateProject}
        />
        <CyberbugTemplate
          path="/projectmanage"
          exact
          Component={ProjectManagement}
        />
        <CyberbugTemplate
          exact
          path="/projectdetail/:projectId"
          Component={indexCyberbug}
        />
        <CyberbugTemplate exact path="/" Component={ProjectManagement} />
        <Route path="/todo" exact component={TodoListSaga} />
        <Route path="/dragdrop" exact component={DragDrop} />
        <Route path="*" component={NotFound} />
      </Switch>
      {/* <Loading />
      <Switch>
        <Route path="/" exact component={LoginWithFormMik} />
        <Route path="/todo" exact component={TodoListSaga} />
        <Route path="/login" exact component={LoginWithFormMik} />
      </Switch> */}
    </>
  );
}

export default App;
