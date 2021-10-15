import logo from './logo.svg';
import './App.css';
import { Todo } from './components/todo';
import { Route, Switch } from 'react-router';
import { TodoDetail } from './components/todoDetails';
import { EditTodo } from './components/editTodo';
import { useSelector } from 'react-redux';
import { Login } from './components/login';
import { useEffect, useState } from 'react';



function App() {
  
  const [tok,setToke] = useState("");

  const {token} = useSelector((state)=> state.auth);

  useEffect(()=>{
    setToke(JSON.parse(localStorage.getItem("token")))
  },[token])
  
  return (
    <div className="App">
      {tok ? <Switch>
        <Route exact path="/"><Todo/></Route>
        <Route exact path="/todo/:id"><TodoDetail/></Route>
        <Route path="/todo/:id/edit"><EditTodo/></Route>
        <Route>404</Route>
      </Switch> :
      <Route path="/"><Login/></Route>}
    </div>
  );
}

export default App;
