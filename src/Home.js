import './Home.scss'
import AddNote from './AddNote';
import Note from './Note';

function Home(props){
    return <div id="Home">
                <h1>NOTES</h1>
                <div id="notes">
                <AddNote func={props.func} settingclicked={props.settingclicked}/>
                {
                
                props.todolist.map((object,indi)=>{console.log('reached inside'); return <Note key={'a'+indi} func={props.func} setting1={props.settingto1} settingclicked={props.settingclicked} index={indi} title={object.heading} content={object.textcontent}/>})
                }

                </div>
           </div>
}

export default Home;
