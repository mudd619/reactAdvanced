import logo from './logo.svg';
import './App.css';
import { Display } from './components/display';
import { useReducer } from 'react';

// function debouncer( delay, callback ){
//   var debounce;
//   return function(e){
//       debounce && clearTimeout(debounce);
//       debounce = setTimeout(function(){
//           callback(e)
//       },delay)
//   }
// }
// function throttle( fn, wait ){
//     let lastCall = 0;
//     return function(){
//     if( Date.now() - lastCall > wait  ){
//       lastCall = Date.now()
//       fn()
//     }
//   }
// }



function App() {
  return (
    <div className="App">
      <Display/>
    </div>
  );
}

export default App;
