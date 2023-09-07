import React,{useState, useEffect, useRef} from 'react'
import axios from 'axios';
import styled  from 'styled-components';
import Todosection from './Todosection';
import Doingsection from './Doingsection';
import Donesection from './Donesection';
import { getTaskRoute, updateTaskRoute } from '../utils/APIRoutes';

function TaskSection({user}) {

  const [tasks, setTasks] = useState([]);


  useEffect(()=>{

    async function reload(){
      if((user._id !== null && user._id !== undefined)){

        const response = await axios.post(getTaskRoute,{
          user: user, 
        })  
        setTasks(response.data);
      }
    }
    reload();

  }, [user])


  const dragItem = useRef();
  const dragOverItem = useRef();

  const dragStart = (e, position)=>{
    dragItem.current = position;
    // console.log("holding:  ",dragItem.current);

  };

  const dragEnter = (e, position) =>{
    dragOverItem.current = position;
    // console.log(dragOverItem.current);
  }

  const drop = async()=>{
    if((dragItem.current !== undefined && dragItem.current !== null) && (dragOverItem.current !== null && dragOverItem.current !== undefined)){

    // console.log("dropped:  ", dragItem.current, "   ", dragOverItem.current);
      try{
        const response =  await axios.post(updateTaskRoute, {
              _id : dragItem.current,
              updatecategory: dragOverItem.current
        });

        if(response.status){
          async function reload(){

            if(user._id !== null && user._id !== undefined){

              const response = await axios.post(getTaskRoute,{
                user: user, 
              })
        
              setTasks(response.data);
              // console.log(response);
              // console.log(response.data);
            }
          }
      
          reload();
        }else{
          console.error('Failed to add task');
        }
  
       }catch(err){
        console.error('Error: ', err);
       };

    }
  };



  



  return (

    <div>

      
    <TaskContainer>

      <Todosection user={user} tasks={tasks} setTasks={setTasks} dragStart={dragStart} dragEnter={dragEnter} drop={drop} />
      <Doingsection user={user} tasks={tasks} setTasks={setTasks} dragStart={dragStart} dragEnter={dragEnter} drop={drop} /> 
      <Donesection user={user} tasks={tasks} setTasks={setTasks} dragStart={dragStart} dragEnter={dragEnter} drop={drop} />

    </TaskContainer>
      

    </div>

  )
}

const TaskContainer = styled.div`

height: 89vh;
    width: 85vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 6rem;
    align-items: center;
    background: rgb(97 97 97 / 0%);
    padding-left: 6rem;
    padding-top: 2.5rem;
  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
      height: 5rem;
    }
    h1 {
      color: white;
      text-transform: uppercase;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #00000076;
    border-radius: 2rem;
    padding: 3rem 5rem;
  }
  input {
    background-color: transparent;
    padding: 1rem;
    border: 0.1rem solid #4e0eff;
    border-radius: 0.4rem;
    color: white;
    width: 100%;
    font-size: 1rem;
    &:focus {
      border: 0.1rem solid #997af0;
      outline: none;
    }
  }
  button {
    background-color: #e8d7c28a;
    color: grey;
    padding: 1rem 2rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.4rem;
    font-size: 1rem;
    text-transform: uppercase;
    &:hover {
      background-color: #ff9e2ac4;
    }
  }
  span {
    color: white;
    text-transform: uppercase;
    a {
      color: #4e0eff;
      text-decoration: none;
      font-weight: bold;
    }
  }

  h4{

    color: white;
    text-transform: uppercase;
    a {
      color: #4e0eff;
      text-decoration: none;
      font-weight: bold;
    }

  }

`;



export default TaskSection
