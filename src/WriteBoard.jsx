import { useState } from "react";
import axiosInstance from "./axiosInstance";
import { Navigate, useNavigate } from "react-router-dom";

const WriteBoard = ({ userInfo }) => {

  const [post, setPost] = useState({
    title : '',
    content : '',
    writer : ''
  });

  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    setPost({
      ...setPost,
      [e.target.name] : e.target.value
    })
  }
  
  return (
    <>
    제목 : <input type="text" name="title" onChange={onChangeHandler}/> <br/>
    내용 : <textarea name="content" onChange={onChangeHandler}></textarea> <br/>
    <button onClick={() => {
      axiosInstance.post('/board')
        .then(response => {
          console.log(response.data)

        }) .catch(error => {
          console.log(error)
        })
    }}>글등록</button>
    </>
  )
}

export default WriteBoard;