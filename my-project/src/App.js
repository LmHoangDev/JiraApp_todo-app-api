import { Route, Switch, useHistory } from "react-router-dom";
import TodoListSaga from "./components/TodoListSaga/TodoListSaga";
import "./App.css";
import LoginWithFormMik from "./pages/Cyberbugs/LoginCyberbugs/LoginCyberbugs";
import NotFound from "./components/NotFound/NotFound";
import Loading from "./components/GlobalSetting/LoadingComponent/Loading";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Home from "./pages/Home/Home";
import { HomeTemplate } from "./templates/HomeTemplates/HomeTemplate";
import { UserLoginTemplate } from "./templates/HomeTemplates/UserLoginTemplate";
import Header from "./components/Header/Header";
import { CyberbugTemplate } from "./templates/HomeTemplates/CyberbugsTemplate";
import indexCyberbug from "./redux/sagas/Cyberbugs/indexCyberbug";
import CreateProject from "./pages/Cyberbugs/CreateProject/CreateProject";
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
      <Switch>
        <HomeTemplate path="/home" exact Component={Home} />
        <UserLoginTemplate path="/" exact Component={LoginWithFormMik} />
        <UserLoginTemplate path="/login" exact Component={LoginWithFormMik} />
        <CyberbugTemplate path="/cyberbug" exact Component={indexCyberbug} />
        <CyberbugTemplate
          exact
          path="/create-project"
          Component={CreateProject}
        />
        <Route path="/todo" exact component={TodoListSaga} />
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
