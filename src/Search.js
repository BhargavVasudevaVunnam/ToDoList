import './Search.scss';
import { useRef } from 'react';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineLeft } from "react-icons/ai";

function Searchbar(props){

    let currentvalue=useRef(null);
    function handleclick(value){
        if(value==''){return}
        props.setcontent(value);
        props.toggletosearch((cur)=>{if(cur==0){
            return 1;
        }
        else{
            return 0;
        }})
    }
    return <div id="searchbar">
        <input type='text' ref={currentvalue}></input>
        {(props.icon==0)?
             (<BsSearch size={16} color='black' onClick={()=>handleclick(currentvalue.current.value)}/>):
             (<AiOutlineLeft size={16} color='black' onClick={()=>handleclick(currentvalue.current.value)}/>)
        }

    </div>




    }
export default Searchbar;