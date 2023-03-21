import './App.css';
import { useRef, useReducer } from 'react';



function App() {
  // const [todo,settodo]=useState([]);
  // const referencer = useRef(null);
  // const lists=todo.map((val,counter)=>{return <li id={counter}>{val}</li>});
  // function addtolist(input){
  //   let copy=[...todo,input];
  //   settodo(copy);
  //   }
  //   function deletefromlist(){
  //   let copy=[...todo];
  //   settodo(copy.slice(0,-1));
  //   }

  function reducer(state,action){
    function function1(inputvalue){
      let val=[...state,inputvalue];
      return val;
    }
    function function2(){
      let copy=[...state];
      return copy.slice(0,-1);
    }
    switch(action.type){
      case 'increment':
      {
      return function1(action.payload);
      break;
      }
      case 'decrement':
      return function2();
      break;
    }

  }
  const [state, dispatch] = useReducer(reducer, []);
  const referencer=useRef([]);
  return <div id="container">
    <input type='text' ref={referencer}></input>
    <button onClick={()=>dispatch({type:'increment', payload: (referencer.current.value)})}>Add</button>
    <button onClick={()=>dispatch({type:'decrement'})}>Delete</button>
    <ul>
        {state.map((value,count)=>{return <li id={count}>{value}</li>})}
    </ul>
  </div>
}

export default App;
