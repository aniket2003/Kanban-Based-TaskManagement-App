import React,{useEffect} from 'react'
import Logout from '../components/Logout'
import  styled  from 'styled-components';
import { useNavigate } from 'react-router-dom';

function LogoSection({user}) {

  const navigate = useNavigate();

  useEffect(()=>{
    const check = async()=>{
      if(!user){
        navigate('/login')
      }
    }
    check();
   },[])

  const username = user.username;


  return (
    <div>

      <Container>

      <div className="left_div">

       <div className="user_name_div">
       {
        <h4>{username}</h4>
       }
       </div>


      </div>



      <div className="logout_div">
      <Logout/>
      </div>

      </Container>

    </div>
  )
}


const Container = styled.div`

   
    height: 6vh;
    width: 96vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 1rem;
    align-items: center;
    background: rgb(201 200 200 / 89%);
    padding-right: 3rem;
    border-radius: 1rem;
    padding-left: 2rem;

    @media only screen and (max-width: 1500px) and (min-width: 801px){
      width: 109vw;
      padding-left: 11%;
    }

    @media only screen and (max-width: 800px){
      width: 159vw;
    }


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

  img{
    width: 5vw;
    height: 5vh;
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
    width: 2rem;
    height: 2rem; 
    background-color: #997af0;
    color: white;
    padding: 0rem 0rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.4rem;
    font-size: 1rem;
    text-transform: uppercase;
    &:hover {
      background-color: #4e0eff;
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

    background-color: #0000008c;
    width: 12rem;
    border-radius: 10rem;
    display: flex;
    justify-content: center;
    height: 2rem;
    padding-top: 1rem;

  }

  .left_div{
    width: 8rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .Profile_image_div{
    padding-top: 1rem;
  }

`;

export default LogoSection
