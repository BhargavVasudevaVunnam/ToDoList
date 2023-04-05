import './Home.scss'
import AddNote from './AddNote';
import Note from './Note'; 
import Searchbar from './Search';
import { useState } from 'react';

function Home(props){
    //creating a state for searching functionality to change the conetent inside div with id = 'notes'
     const  [displaysearch,setdisplaysearch]= useState(0);
     const  [searchcontent,setsearchcontent]=useState('');
    return <div id="Home">
                <h1>NOTES</h1>
                <Searchbar icon={displaysearch} toggletosearch={setdisplaysearch} setcontent={setsearchcontent}/>
                <div id="notes">
                {(displaysearch==0)?(<><AddNote func={props.func} settingclicked={props.settingclicked}/>
                {
                
                props.todolist.map((object,indi)=>{console.log('reached inside'); return <Note key={'a'+indi} func={props.func} setting1={props.settingto1} settingclicked={props.settingclicked} index={indi} title={object.heading} content={object.textcontent}/>})
                }
                </>):
                (<>
                
               { props.todolist.map((object,indi)=>{console.log(object.textcontent+searchcontent);if(object.heading.includes(searchcontent)){return <Note key={'a'+indi} func={props.func} setting1={props.settingto1} settingclicked={props.settingclicked} index={indi} title={object.heading} content={object.textcontent}/>}})}
                </>)}
                
                </div>
           </div>
}

export default Home;
