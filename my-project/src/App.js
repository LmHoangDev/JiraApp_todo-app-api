import "./App.css";
import TodoListCC from "./components/TodoListCC/TodoListCC";
import TodoListFC from "./components/TodoListFC/TodoListFC";
import TodolistRedux from "./components/TodoListFC/TodoListRedux";
import TodolistSaga from "./components/TodoListSaga/TodoListSaga";

function App() {
  return (
    <div>
      {/* <Header />
      <Routes>
        <Route path="/" element={<TodoListFC />} />
        <Route path="/todocc" element={<TodoListCC />} />
      </Routes> */}

      {/* <TodoListCC /> */}
      {/* <TodoListFC /> */}
      {/* <TodolistRedux /> */}
      <TodolistSaga />
    </div>
  );
}

export default App;
