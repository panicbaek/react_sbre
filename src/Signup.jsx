import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {

  // 회원가입시 작성하는 State임
  const [member, setMember] = useState({
    username: '',
    password: '',
    eamil: ''
  });

  // 네이게이트 스프링에 window.local 같음
  const navigate = useNavigate

  // 회원가입시 재사용되는 핸들러임
  const onChangeHandler = (e) => {
    setMember({
      ...member,
      [e.target.name] : e.target.value
    })
  }

  return (
    <>

      <h1>회원가입 페이지</h1>
      아이디 : <input type="text" name="username" onChange={onChangeHandler}/> <br/>
      비밀번호 : <input type="text" name="password" onChange={onChangeHandler}/> <br/>
      이메일 : <input type="text" name="email" onChange={onChangeHandler}/> <br/>

      {/* 회원가입 버튼 클릭 구간 */}
      <button onClick={() => {
        axios.post(`${import.meta.env.VITE_SERVER_URL}/signup`, member)
        .then(response => {
          console.log(response.data)
          alert(response.data);
          
          navigate('/');
        }).catch(error => {
          console.log(error);
        })
      }}>회원가입</button>

    </>
  )
}

export default Signup;