import axios from 'axios';
import { useEffect, useState } from 'react';
import { BsFillPencilFill,BsTrashFill } from "react-icons/bs";

function Read(){

  const [apiData,setApiData] = useState([]); 

  useEffect(() => {
    axios.get("http://localhost:7000/getlistdata")
    .then((data) => {
      setApiData(data.data);
    })
  },[])

  return(
    <>
     <div className='todoList' >
      {apiData.map((item) => (
        <div className='lists'>
          <p>{item._id} <span>{item.name}</span> </p>
          <button><BsFillPencilFill /></button>
          <button><BsTrashFill/></button>
        </div>
      ))}
        <div className='lists'>

        </div>
     </div>
    </>
  )
}


export default Read;