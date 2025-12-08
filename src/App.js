
import { useEffect, useState } from 'react';
import './App.css';

const App = ()=> {
  const [apiId, setApiId] = useState('1');
  const [data,setData] = useState({})
  
  console.log(apiId);
  console.log(data);
 

  useEffect(()=>{
    console.log("Use effect running...");
    
    if (apiId.length > 0) {
      console.log("useEffect if condition");

      const apiCall = async() => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${apiId}`)
        const data = await res.json()

        if(data) {
          setData(data)
        }

      }

      apiCall()
      
    }
  },[apiId])

  return(
    <div>
      <input type='text' value={apiId} onChange={(e)=> {setApiId(e.target.value)}} placeholder='enter id'></input>
    </div>
  )
}

export default App;
