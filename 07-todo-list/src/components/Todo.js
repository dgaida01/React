import React,{useState} from 'react'
let Todo =()=>{
    let [task,setTask] = useState("");
    let[done,setDone]=useState(false);
    let [tdList,setTdList]=useState([]);

    let AddTask=(e)=>{
        e.preventDefault();
        let taskObj = {
            task:task,
            done:done
        }

        setTdList([...tdList,taskObj])
        document.getElementById("newTask").value=""
    }
    let CompleteTask =(idx)=>{
        let taskToComplete = {...tdList[idx]};
        taskToComplete.done = !taskToComplete.done;
        setTdList([
            ...tdList.slice(0,idx),
            taskToComplete,
            ...tdList.slice(idx+1)            
        ])
    }

    let RemoveTask=(e,idx)=>{


            let [...cpOfTaskList] = tdList;
            console.log(cpOfTaskList[idx]);
            cpOfTaskList.splice(idx,1);
            setTdList(cpOfTaskList)
    }

    


    return(
        <>
        <h1 className='d-block text-start'>Your todo list:</h1>
        <div className=" d-flex justify-content-start  align-items-center gap-3">
            <form >
            <button onClick={(e)=>AddTask(e)}> Add New Item </button>
            <input style={{height:'35px', width:'300px'}} type="text"  name="" id="newTask" onChange={(e)=>setTask(e.target.value)} />
            </form>
        </div>
        
        <div className='row mt-4 align-content-start'>
            
            <div className="col-6">
            {tdList.map((lsItem,idx)=>{
                

                return(
                <ul key={idx} className='d-flex gap-3 align-items-center' style={{type:'none'}}>
                    <button onClick={(e)=>RemoveTask(e,idx)}>Delete</button>
                    <input type="checkbox" className="me-2 ms-2" name="" id="" onClick={()=>CompleteTask(idx)}/>
                    <div  className="text-end" style={{textDecoration:lsItem.done?"line-through":'none'}}>{lsItem.task}</div>            
                </ul>
              );
                })
            }  
            </div>
        </div>
        </>
    );


}
export default Todo