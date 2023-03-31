import './App.scss';
import { useState } from 'react';
import Home from './Home';
import Editing from './Editing';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [currentpage, setcurrentpage] = useState('Home');
  const [todolist, settodolist]= useState([]);
  const [clicked,setclicked]=useState(-1);
  function setcurpage(input){
    if(currentpage==='Home'&&input==='Edit'){
      console.log('entered edit');
      setcurrentpage('Edit');
      // return;
    }
    if(currentpage==='Edit'&&input==='Home'){
      setcurrentpage('Home');
      // return;
    }
  }
  function settingtodo(input){
    settodolist(input);
    // return;
  }

  function settingclicked(input){
    console.log(input);
    setclicked(input);
  }
  let head='';
  let cont='';
  if(clicked==-1){
  head='';
  cont='';
  }
  else{
    console.log("jack"+clicked);
    console.log("jack"+todolist);
    
    head=todolist[clicked].heading;
    cont=todolist[clicked].textcontent;
  }
  let Page=null;
  if(currentpage==='Home')
  {Page=<Home func={setcurpage} todolist={todolist} settingclicked={setclicked} settingto1={settingtodo}/>}
  else{
      Page=<Editing func={setcurpage} settingto1={settingtodo} settingclicked={settingclicked} stateofclick={clicked} title={head} content={cont}/>
  }
  return <div id="container">
    {
    Page
    }
  </div>
}

export default App;
