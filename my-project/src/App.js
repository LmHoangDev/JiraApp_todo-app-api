import { Route, Routes } from "react-router-dom";
import TodoListSaga from "./components/TodoListSaga/TodoListSaga";
import "./App.css";
import LoginWithFormMik from "./pages/Cyberbugs/LoginCyberbugs/LoginCyberbugs";
import NotFound from "./components/NotFound/NotFound";
import Loading from "./components/GlobalSetting/LoadingComponent/Loading";
function App() {
  return (
    <>
      <Loading />
      <Routes>
        <Route path="/" exact element={<LoginWithFormMik />} />
        <Route path="/todo" exact element={<TodoListSaga />} />
        <Route path="/login" exact element={<LoginWithFormMik />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
