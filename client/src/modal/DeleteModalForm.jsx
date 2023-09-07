import React,{useState, useEffect} from 'react';
import Modal from 'react-modal';
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

function DeleteModalForm({ isOpen, onRequestClose, onSubmit, SectionName, user }) {

    const toastOptions = {
        position: "bottom-right",
        autoClose: 8000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark"
    }


    const DeleteTask = ()=>{

      const data = {
        user: user,
        delete: true,
      }

      onSubmit(data);
      onRequestClose();
    }




  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Modal_Form"
      className="deleteModalLook"
    >
      <h3>Are you sure you want to Delete the Task ?</h3>
       <div className="deleteModalButton">
      <button onClick={DeleteTask}>Yes</button>
      <button onClick={onRequestClose}>No</button>
       </div>
      {/* <ToastContainer/> */}
    </Modal>
  );
}

export default DeleteModalForm;
