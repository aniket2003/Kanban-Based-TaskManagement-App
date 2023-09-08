import React,{useState} from 'react'
import axios from 'axios';
import {Container,TaskCard, TaskContainer, EditDeleteContainer} from '../containerstyle/style';
import Modal from 'react-modal';
import {BiEdit, BiTrash} from "react-icons/bi";
import ModalForm from '../modal/ModalForm';
import {v4 as uuidv4} from "uuid";
import { addTaskRoute, deleteTaskRoute, getTaskRoute, editTaskRoute} from '../utils/APIRoutes';
import DeleteModalForm from '../modal/DeleteModalForm';
import EditModalFrom from '../modal/EditModalFrom';

Modal.setAppElement('#root');

function Todosection({user,tasks, setTasks,  dragStart, dragEnter, drop}) {

const [addmodalIsOpen, setAddModalIsOpen] = useState(false);
const [editmodalIsOpen, setEditModalIsOpen] = useState(false);
const [deletemodalIsOpen, setDeleteModalIsOpen] = useState(false);
const [SelectedTaskId, setSelectedTaskId] = useState(null);


const style = {
  width: "2rem",
  height: "1.5rem",
  cursor: "pointer",
}

const divstyle = {
  paddingTop: "1rem",
  paddingBottom: "1rem",
}


  const openAddModal = () => {
    setAddModalIsOpen(true);
  };

  const closeAddModal = () => {
    setAddModalIsOpen(false);
  };

  const handleSubmit = async(inputValue) => {

    if(inputValue.user !== undefined && inputValue.user !== null){



      try{
        const response =  await axios.post(addTaskRoute, inputValue);
  
       if(response.status){
         const tasks_var = [...tasks];
         tasks_var.push(inputValue);
         setTasks(tasks_var);
  
       }else{
         console.error('Failed to add task');
       }
  
      }catch(err){
       console.error('Error: ', err);
      }


    }else{
      console.log("No User");
    }


    closeAddModal();
  };

  const handleaddclick = ()=>{
    openAddModal();
  }

  const openDeleteModal = () => {
    setDeleteModalIsOpen(true);
  };

  const closeDeleteModal = () => {
    setDeleteModalIsOpen(false);
  };

  const openEditModal = () => {
    setEditModalIsOpen(true);
  };

  const closeEditModal = () => {
    setEditModalIsOpen(false);
  };


  async function handleEditClick(taskId){
    setSelectedTaskId(taskId);
    if(SelectedTaskId){
      //  console.log(SelectedTaskId);
      openEditModal();
    }
  }

  async function handleDeleteClick(taskId){
    openDeleteModal();
    // console.log(taskId);
    setSelectedTaskId(taskId);
  }

  async function reload(){
    if((user._id !== null && user._id !== undefined)){

      const response = await axios.post(getTaskRoute,{
        user: user, 
      })  
      setTasks(response.data);
    }
  }


  const handleDeleteSubmit = async(data)=>{
    if(data.delete){

      if(data.user !== undefined && data.user !== null){

        try{

          const response = await axios.post(deleteTaskRoute, {
            taskId: SelectedTaskId
          },
          );

          if(response.status){

            reload();

          }else{
            console.log("Error Deleting Task");
          }

        }catch(err){
          console.error(err);
        }

      }
     

    }

  }


  const handleEditSubmit = async(inputValue)=>{

    console.log(inputValue)

    if(inputValue.user !== undefined && inputValue.user !== null){

      try{

        if(inputValue._id !== undefined && inputValue._id !== null){

          const response = await axios.post(editTaskRoute, inputValue);
  
          console.log("edit: ", response);
  
          if(response.status){
             reload();
          }else{
            console.log("Error Occured");
          }


        }


      }catch(err){

        console.error(err);

      }

    }


  }







  return (
    <div>

    <Container key={`${uuidv4()}`} 
        onDragEnter={(e)=>dragEnter(e,'todo')}
        onDragOver={(e)=> e.preventDefault()}
        onDragEnd={drop}
        onDrop={drop}
        draggable>

      <div className="">
      <h3>ToDo</h3>
      </div>

      <TaskContainer>

      {
        tasks.map((task)=>{

          if(task.category === 'todo'){

          return (


        <div key={`${uuidv4()}`} // key before was task._id
        className={`${task._id}`} 
        onDragStart={(e) => dragStart(e, task._id)} 
        onDragEnter={(e)=>dragEnter(e,task._id)}
        // onDragEnter={(e)=>dragEnter(e,)}
        onDragOver={(e)=> e.preventDefault()}
        onDragEnd={drop}
        onDrop={drop}
        draggable
        style={divstyle}
        >
        <TaskCard>
        <EditDeleteContainer>
         <BiEdit onClick={() => handleEditClick(task._id)} style={style}/>
         {/* <span>Due Date: {task.duedate ? task.duedate.slice(0,10) : "Not-Set"}</span>
         <span>Due Time: {task.duetime ? task.duetime : "Not-Set"}</span> */}
         <BiTrash onClick={() => handleDeleteClick(task._id)} style={style}/>
        </EditDeleteContainer>
        <div className="title" keyid={task._id}>
        <span>Title: {task.title}</span> 
        </div>
        <div className="description">
         <p>Description: {task.description}</p>
        </div>
        <div className="duedatetime">
          {/* <p>Due Date: {task.duedate ? task.duedate.slice(0,10) : "Not-Set"}</p>
          <p>Due Time: {task.duetime ? task.duetime : "Not-Set"}</p> */}
          <p>Due Date: {task.duedate ? task.duedate.slice(0,10) : "Not-Set"}</p>
         <p>Due Time: {task.duetime ? task.duetime : "Not-Set"}</p>
        </div>
        </TaskCard>

          </div>

          );

          }else{
            return null;
          }
        })

      }



      </TaskContainer>


        <button onClick={handleaddclick}>+</button>
        <ModalForm isOpen={addmodalIsOpen} onRequestClose={closeAddModal} onSubmit={handleSubmit} SectionName={'todo'} user={user}/>
        <DeleteModalForm isOpen={deletemodalIsOpen} onRequestClose={closeDeleteModal} onSubmit={handleDeleteSubmit} SectionName={'todo'} user={user} />
        {editmodalIsOpen && (
        <EditModalFrom isOpen={editmodalIsOpen} onRequestClose={closeEditModal} onSubmit={handleEditSubmit} SectionName={'todo'} user={user} taskId={SelectedTaskId} />
        )}
    </Container>
      
    </div>
  )
}


export default Todosection
