import './AddNote.scss'
import { BsPlus } from 'react-icons/bs';

function AddNote(props){
return<div>
<div  id="AddNote" onClick={()=>{props.settingclicked(-1); props.func('Edit')}}>
    <BsPlus size={32} color="black" />
</div>
</div>
}

export default AddNote;