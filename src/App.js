import './App.css';
import { useMemo,useCallback,useState,useEffect } from 'react';

function App() {
  const [counter,changecounter]=useState(1);
  const [background,changebackground]=useState('black');
  const object=useMemo(() =>{return {color: '{background}'}}, [background])
  // {color: '{background}'};
  useEffect(() => {
    console.log("triggered state")
  }, [object])
  
  const slowfunction=(x)=>{console.log('entering slow');for(let i=0;i<100000000000;i++){}return x*2;}
  let changing=2;
  
  const out=useMemo(()=>slowfunction(changing),[changing]);
  console.log(out);
  return <div>
    <button onClick={()=>changecounter((x)=>{return x+1;})}>Add</button>
    <div><p>{counter}</p></div>
    <div style={{backgroundColor: object.color, width: '100px', height:'100px'}}>Background</div>
    <button onClick={()=>{changebackground((x)=>{console.log("entered"); if(x==='black'){return 'white'}else{return 'black'}})}}>change</button>
  </div>
}

export default App;
