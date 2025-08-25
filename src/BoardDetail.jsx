import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "./axiosInstance";

const BoardDetail = ({ userInfo }) => {

  const {id} = useParams();
  const [post, setPost] = useState();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // 상세페이지
  useEffect(() => {
    axiosInstance.get(`/board/${id}`)
      .then(response => {
        console.log(response.data)
        setPost(response.data)
      }).catch(error => {
        console.log(error)
      }).finally(() => {
        setLoading(false)
      })
  }, [])

  if(loading)
    return <h1>로딩중입니다..</h1>

  if(!post)
    return <h1>존재하지 않는 게시물입니다.</h1>

  return (
  <>
    <div>제목 : {post.title}</div>
    <div>작성자 : {post.writer.username}</div>
    <div>내용 : {post.content}</div>
    <button onClick={()=> {
      if(post.writer.username != userInfo.username) {
        alert('권한이 없습니다.')
        return;
      }

      axiosInstance.delete(`/board?id=${post.id}`)
        .then(response => {
          navigate('/')
        }).catch(error=> {
          alert('오류')
        })

    }}>삭제</button>
  </>
  )
}

export default BoardDetail;