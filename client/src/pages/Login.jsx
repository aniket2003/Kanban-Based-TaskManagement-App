import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import axios from 'axios';
import { loginRoute } from '../utils/APIRoutes';

// import Logo from "../assets/logo.svg"

function Login() {

  const navigate = useNavigate();



    const [values, setValues] = useState({
        username: "",
        password: "",
    });

    const toastOptions = {
        position: "bottom-right",
        autoClose: 8000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark"
    }

    useEffect(()=>{

      if(localStorage.getItem('App-User')){
        navigate('/homepage')
      }

    })

    const handleValidation = ()=>{
        const {password, username } = values;
        if(password===""){
            toast.error("Username and Password is required", toastOptions);
            return false;
        }else if (username.length === ""){
            toast.error("Username and Password is required", toastOptions);
            return false;
        }

        return true;
    }



    const handleSubmit = async(event) =>{
        event.preventDefault();
        // alert("form");
        if(handleValidation()){
            // console.log("in validation", loginRoute)
            const {password, email } = values;
            const {data} = await axios.post(loginRoute,{
                email,
                password
            });

            // console.log(data);

            if(data.status === false){
              toast.error(data.mag, toastOptions);
            }

            // console.log(data);

            if(data.status === true){
              localStorage.setItem('App-User', JSON.stringify(data.emailCheck));
              navigate('/homepage');
            }



        }else{

        }
    };

    const handleChange = (event) => {
        setValues({...values, [event.target.name]: event.target.value })
    };



  return (
    <div>

    <FormContainer>
        <form onSubmit={(event) => handleSubmit(event)}>
           <div className="brand">
            <h1>Task-M</h1>
           </div>

           <input
            type="email"
            placeholder="Email-Id"
            name="email"
            onChange={(e) => handleChange(e)}
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            title="Enter a valid email address"
           />


           <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => handleChange(e)}
           />

           <button type="submit">Loginr</button>
           <span>New User ? <Link to="/register">Register</Link></span>

        </form>
    </FormContainer>
    <ToastContainer/>
     
    </div>
  );


}

const FormContainer = styled.div`

height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
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
    border: 0.1rem solid #f09913;
    border-radius: 0.4rem;
    color: white;
    width: 100%;
    font-size: 1rem;
    &:focus {
      border: 0.1rem solid #f7c578;
      outline: none;
    }
  }
  button {
    background-color: #e09c41;
    color: white;
    padding: 1rem 2rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.4rem;
    font-size: 1rem;
    text-transform: uppercase;
    &:hover {
      background-color: #ff9a0e;
    }
  }
  span {
    color: white;
    text-transform: uppercase;
    a {
      color: #ff9a0e;
      text-decoration: none;
      font-weight: bold;
    }
  }

`;


export default Login
