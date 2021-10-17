import logo from './logo.svg';
import './App.css';
import { Home } from './components/home';
import { SideBar } from './components/sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, useHistory } from 'react-router';
import { Login } from './components/login';
import { All } from './components/all';
import { Personal } from './components/personal';
import { Official } from './components/official';
import { Others } from './components/others';
import { Edit } from './components/editTodo';

function App() {

  const {token} = useSelector((state)=> state.auth);
console.log(token)
  return (
    <div className="App">
      {token ? <><SideBar/>
      <Switch>
        <Route exact path="/"><Home/></Route>
        <Route path="/all"><All/></Route>
        <Route path="/personal"><Personal/></Route>
        <Route path="/official"><Official/></Route>
        <Route path="/others"><Others/></Route>
        <Route path="/edit/:id"><Edit/></Route>
      </Switch></> :
      <Login/>}
    </div>
  );
}

export default App;
