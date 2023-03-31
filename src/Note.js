import './Note.scss'
import { FaTrash } from 'react-icons/fa';
function Note(props)
{
function handledelete(id,obj){
console.log(obj[id]);
let modify=[...obj];
modify.splice(id,1);
return modify;
}
return <div className="notes" onClick={()=>{ props.settingclicked(props.index); props.func('Edit')}}>
                <h5>{props.title}</h5>
                <p>{props.content}</p>
                <FaTrash id="icon" onClick={(e)=>{e.stopPropagation();  props.setting1((obj)=>{return handledelete(props.index,obj)})}} size={16} color="black" />
        </div>  
}
export default Note;