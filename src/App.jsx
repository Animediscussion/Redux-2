import "./App.css";
import Counter from "./Components/Counter";
import CounterRedux from "./Components/CounterRedux";
import TodoList from "./Components/TodoList";
import User from "./Components/User";

function App() {
  return (
    <>
      <Counter />
      <CounterRedux />
      <TodoList />
      <User />
    </>
  );
}

export default App;
