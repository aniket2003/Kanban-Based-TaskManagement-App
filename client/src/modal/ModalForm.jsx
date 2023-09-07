import React,{useState, useEffect} from 'react';
import Modal from 'react-modal';
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

function ModalForm({ isOpen, onRequestClose, onSubmit, SectionName, user }) {

    const [values, setValues] = useState({
        user: user,
        category: SectionName,
        title: "",
        description: "",
        duedatetime: ""
    });

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

      console.log("Adding the task From ModalForm")

         event.preventDefault();

         if(handleValidation()){

             onSubmit(values);
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
      className="addTaskModal"
    >
      <h2>Modal Form</h2>

      {/* <form onSubmit={(event)=> handleSubmitForm(event)}> */}

      <div className="addTaskTitle">
      <label>Title: </label>
      <input
        type="text"
        name="title"
        onChange={(e)=>handleChange(e)}
        placeholder='Enter the Title'
      />
      </div>


      <div className="addTaskDescription">
      <label>Description: </label>
      <input
        type="text-area"
        name="description"
        onChange={(e)=>handleChange(e)}
        placeholder='Enter the Title description'
      />
      </div>


      <div className="addTaskDateTime">
      <label>Date and Time: </label>
      <input 
        type="datetime-local"
        name="duedatetime"
        min = {minDateTime}
        onChange={(e)=>handleChange(e)}
      />
      </div>

      <div className="addTaskButton">
      <button onClick={onRequestClose}>Close</button>
      <button onClick={(event)=>handleSubmitForm(event)}>Submit</button>
      </div>


      {/* </form> */}
      <ToastContainer/>
    </Modal>
  );
}

export default ModalForm;
