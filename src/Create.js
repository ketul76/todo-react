import axios from 'axios';
import { useState } from 'react';

function Create(){
  const [task,setTask] = useState("");

  const submitData = () => {
    axios.post("http://localhost:7000/postlistdata",{
     task,
    })
  }

  return(
    <>
        <form>
          <input type="text" placeholder='Enter Tour Task' name='task' value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button onClick={submitData}>Add Task</button>
        </form>
    </>
  )
}

export default Create;