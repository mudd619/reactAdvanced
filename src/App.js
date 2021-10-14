import logo from './logo.svg';
import './App.css';
import {Button ,Stack,  Divider} from "@mui/material"
import { Todo } from './components/todos';
import { Route, Switch } from 'react-router';
import { Edit } from './components/edit';

function App() {
  return (
    //   <Button  size ="large" color="error" variant="contained">heyy</Button>
    //   <Button color="error" variant="outlined">heyy</Button>
    // 
    <div>
      <Switch>
        <Route exact path="/"><Todo/></Route>
        <Route path="/:id/edit"><Edit/></Route>
      </Switch>
    </div>
  );
}

export default App;
