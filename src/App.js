
import { useEffect, useState } from 'react';
import './App.css';

const App = ()=> {
  const [apiId, setApiId] = useState('1');
  const [search,setSearch] = useState(0);
  const [data,setData] = useState({})
  
  //console.log(apiId);
  //console.log(data);
 

  useEffect(()=>{
    console.log("Use effect running...");

    const apiCall = async() => {
        console.log("Api call running...")
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${apiId}`)
        const data = await res.json()

        if(data) {
          setData(data)
        }

      }
    
    if (apiId.length > 0 && Number(apiId)>0 && Number(apiId)<=100) {
      console.log("useEffect if condition");
      apiCall();
    }

    return() => {
      console.log("Cleanup..");
      apiCall();
    }


  },[apiId])

  return(
    <div>
      <input type='text' value={apiId} onChange={(e)=> {setApiId(e.target.value)}} placeholder='enter id'></input>
      <button onClick={()=>setSearch(pre=>pre===0?1:0)}>Search</button>
      {data&&(<div>
        <h2>{data.title}</h2>
        <p>{data.body}</p>
      </div>)}
    </div>
  )
}

export default App;
