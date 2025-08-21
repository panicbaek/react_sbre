import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Header'
import Login from './Login'
import Signup from './Signup'


function App() {


  return (
    <>
      <Header/>
      
      <Routes>
        <Route path='/' element={<h1>인덱스 페이지</h1>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </>
  )
}

export default App
