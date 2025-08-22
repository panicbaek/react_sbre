import { Link } from "react-router-dom";

const Header = ( {auth, setAuth, userInfo, setUserInfo} ) => {

  const logout = () => {
    sessionStorage.removeItem('jwt');
    setAuth(false);
    setUserInfo(null);
  }
  
  return (
    <>
    {userInfo && <p>{userInfo.username}님 환영합니다</p>}
    {
      auth
      ? <Link to='' onClick={logout}>로그아웃</Link>
      : <Link to='/login'>로그인</Link>
    },
    {
      auth
      ? <Link to='/writeboard'><button>글작성 페이지</button></Link>
      : <Link to='/signup'>회원가입</Link>
    }
    </>
  )
}

export default Header;