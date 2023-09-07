import React,{useState, useEffect} from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import { getTaskRoute } from '../utils/APIRoutes';

function EditModalFrom({ isOpen, onRequestClose, onSubmit, SectionName, user, taskId }) {
    
  const [values, setValues] = useState({
    user: user,
    taskId: taskId,
    category: SectionName,
    title: "",
    description: "",
    duedatetime: ""
});

  useEffect(()=>{

    async function reload(){

      
      const response = await axios.post(getTaskRoute,{
        taskId: taskId, 
      })

      if(response){  
        setValues(response.data);
      }else{
        console.log("Error Occured.")
      }
      
    }

    reload();

  }, [isOpen])






const [minDateTime, setminDateTime] = useState(new Date());


useEffect(()=>{

  const currentDate = new Date();
  const minDate = new Date(currentDate.getTime() + 60000);

 const formattedMinDate = minDate.toISOString().substring(0,16);

    setminDateTime(formattedMinDate);

}, [minDateTime])

const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark"
}


const handleValidation = ()=>{
    const {title, description, duedatetime} = values;
    // const currentDateTime = new Date();

    if(!title.length){
        toast.error("Title cannot be empty", toastOptions);
        console.log("errorr");
        return false;
    }else if(!description.length){
        toast.error("Description is required", toastOptions);
        return false;
    }


    return true;
}


const handleSubmitForm = (event)=>{
     event.preventDefault();

     if(handleValidation()){

         onSubmit(values);
        // console.log(earlyValues);
         setValues('');
         onRequestClose();

     }
}


const handleChange = (event) => {
    setValues({...values, [event.target.name]: event.target.value })
};





  return (
    <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    contentLabel="Modal Form"
    className="editModalLook"
  >
    <h2>Edit Task</h2>
    {/* <form onSubmit={(event)=> handleSubmitForm(event)}> */}

    <div className="editModalTitleDiv">
    <label>Title:</label>
    <input
      type="text"
      name="title"
      onChange={(e)=>handleChange(e)}
      // value={values.title}
      placeholder={values.title}
    />
    </div>

    <div className="editModalDescriptionDiv">
    <label>Description:</label>
    <input
      type="text-area"
      name="description"
      onChange={(e)=>handleChange(e)}
      // value={values.description}
      placeholder={values.description}
    />
    </div>

    <div className="editModalDateTimeDiv">
    <label>Date and Time:</label>
    <input 
      type="datetime-local"
      name="duedatetime"
      min = {minDateTime}
      // value={values.duedate}
      onChange={(e)=>handleChange(e)}
    />
    </div>

    <div className="editModalButtonDiv">
    <button onClick={onRequestClose}>Cancel</button>
    {/* <button type="submit">Edit</button> */}
    <button onClick={(event)=>handleSubmitForm(event)} >Edit</button>
    </div>

    {/* </form> */}
    <ToastContainer/>
  </Modal>
  );
}

export default EditModalFrom
