import "./App.css";
import TodoList from "./components/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

function App() {
  return (
    <div className="App">
      <TodoList />
      <div className="footer">Made by Abhinav Bhowmik</div>
    </div>
  );
}

export default App;
