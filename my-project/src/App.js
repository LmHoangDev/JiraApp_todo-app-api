import { Route, Routes, useNavigate } from "react-router-dom";
import TodoListSaga from "./components/TodoListSaga/TodoListSaga";
import "./App.css";
import LoginWithFormMik from "./pages/Cyberbugs/LoginCyberbugs/LoginCyberbugs";
import NotFound from "./components/NotFound/NotFound";
import Loading from "./components/GlobalSetting/LoadingComponent/Loading";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Home from "./pages/Home/Home";
function App() {
  const history = useNavigate();
  const dispatch = useDispatch();
  console.log(history);
  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "ADD_HISTORY", history: history });
    }, 1000);
    return () => {
      clearTimeout();
    };
  }, []);

  return (
    <>
      <Loading />
      <Routes>
        <Route path="/" exact element={<LoginWithFormMik />} />
        <Route path="/todo" exact element={<TodoListSaga />} />
        <Route path="/login" exact element={<LoginWithFormMik />} />
        <Route path="/home" exact element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
