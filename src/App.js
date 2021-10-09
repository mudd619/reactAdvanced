import logo from './logo.svg';
import './App.css';
import { Todo } from './components/todo';
import { Route, Switch } from 'react-router';
import { TodoDetail } from './components/todoDetails';
import { EditTodo } from './components/editTodo';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/"><Todo/></Route>
        <Route exact path="/todo/:id"><TodoDetail/></Route>
        <Route path="/todo/:id/edit"><EditTodo/></Route>
        <Route>404</Route>
      </Switch>
    </div>
  );
}

export default App;
