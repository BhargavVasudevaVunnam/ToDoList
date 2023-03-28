
import './Editing.scss'
import { useRef } from 'react';

function Editing(props){
    const textvalue = useRef(null);
    const contentvalue = useRef(null);


function handleaddingvalues(){
    function handlechange(obj,input){
        let modifying={...obj[input],heading: textvalue.current.value, textcontent: contentvalue.current.value}
        let copy=[...obj];
        copy[input]=modifying;
        console.log(copy);
        return copy;
    }
    if(props.stateofclick==-1)
    {
        let obj={};
        obj.heading=textvalue.current.value;
        obj.textcontent=contentvalue.current.value;
        if(obj.heading==''||obj.textcontent==''){
                alert("Please enter valid values");
        }
        else{
        props.settingto1((current)=>{return [...current,obj]});
        }
    }
    else{
        props.settingto1((current)=>{return handlechange(current,props.stateofclick)});
    }
}

return <div id="Edit">
<input type='text' placeholder='Enter Text' ref={textvalue} defaultValue={props.title} ></input>
<input type='text' placeholder='Enter Content' ref={contentvalue} defaultValue={props.content}></input>
<button onClick={()=>{handleaddingvalues(); props.func('Home')}}>save</button>
</div>
}

export default Editing;