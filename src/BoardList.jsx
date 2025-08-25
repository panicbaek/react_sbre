import { useEffect, useState } from "react";
import axiosInstance from "./axiosInstance";
import { Link } from "react-router-dom";

const BoardList = () => {
  const [boardList, setBoardList] = useState([]);

  useEffect(() => {
    axiosInstance.get('/board')
      .then(response => {
        console.log(response.data);
        setBoardList(response.data);
      }).catch(error => {
        console.log(error)
      })
  }, [])

  if(!boardList)
    return <h1>등록된 게시글이 없습니다.</h1>

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {
            boardList.map((post, i) => {
              return (
                <tr key={i}>
                  <td>{post.id}</td>
                  <td>
                    <Link to={`/board/${post.id}`}>
                    {post.title}
                    </Link>
                    </td>
                  <td>{post.writer.username}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </>
  );
}

export default BoardList;