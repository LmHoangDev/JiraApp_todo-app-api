import "./App.css";
import TodoListCC from "./components/TodoListCC/TodoListCC";
import TodoListFC from "./components/TodoListFC/TodoListFC";
import TodolistRedux from "./components/TodoListFC/TodoListRedux";

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
      <TodolistRedux />
    </div>
  );
}

export default App;
