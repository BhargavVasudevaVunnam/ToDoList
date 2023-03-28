import './Note.scss'

function Note(props)
{
function handledelete(id,obj){
let modify=[...obj];
modify.splice(id,1);
return modify;
}
return <div className="notes" onClick={()=>{console.log("double fucked"); props.settingclicked(props.index); props.func('Edit')}}>
                <h5>{props.title}</h5>
                <p>{props.content}</p>
                <button onClick={(e)=>{e.stopPropagation(); console.log("fucked"); props.setting1((obj)=>{return handledelete(props.index,obj)})}}>delete</button>
        </div>  
}
export default Note;