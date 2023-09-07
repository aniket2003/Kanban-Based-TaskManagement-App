import styled from 'styled-components';

export const TaskCard = styled.div`
 max-height: 38vh;
    width: 24vw;
    display: flow;
    border: 2px solid white;
    overflow-y: auto;
    overflow-x: auto;
    border-radius: 0.4rem;
    padding-left: 0.5rem;
  &::-webkit-scrollbar {
      width: 0.5rem;
      &-thumb {
        background-color: #ffffff39;
        width: 0.1rem;
        border-radius: 1rem;
      }
  }
`;

export const EditDeleteContainer = styled.div`

    justify-content: space-between;
    display: flex;
    max-width: 25vw;
    color: black;
    border-radius: 0.5rem;
    background: rgb(237 233 233 / 95%);

`;

export const EditDeleteButton = styled.div`

background-color: #997af0;
    color: white;
    border: none;
    height: 6vh;
    font-weight: bold;
    cursor: pointer;
    ${'' /* border-radius: 0.4rem; */}
    font-size: 1rem;
    text-transform: uppercase;
     padding: 0.5rem 0.5rem 0rem 0.5rem;
    &:hover {
      background-color: #4e0eff;
    }

`

// export default TaskCard;


export const TaskContainer = styled.div`
 min-height: 30vh;
    max-height: 80vh;
    width: 26vw;
    display: flex;
    flex-direction: column;
    padding-top: 0vh;
    overflow-y: auto;
  &::-webkit-scrollbar {
      width: 0.5rem;
      &-thumb {
        background-color: #ffffff39;
        width: 0.1rem;
        border-radius: 1rem;
      }
  }
`;



export const Container = styled.div`

height: 89vh;
  width: 27vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0rem;
  align-items: center;
  background: rgb(237 233 233 / 67%);;
  border: 2px solid #ffffffc2;
  border-radius: 1rem;
  padding-bottom: 0.5rem;
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

  .fixed-content{
    top: 0;
    bottom: 0;
    position: fixed;
    overflow-y: hidden;
    overflow-x: hidden;
  }

`;
