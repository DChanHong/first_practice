import {BrowserRouter ,Route, Routes}  from 'react-router-dom' // 라우팅 설정을 위한 컴포넌트 
import CoinDetail from './pages/CoinDetail'
import Home from './pages/Home'
import Login from './pages/Login'
import Search from './pages/Search'
import Sign from './pages/Sign'
import MyPage from './pages/MyPage'


function App() {
  


  return (
    <BrowserRouter>
      <Routes>
        {/* 우선 Home.tsx를 기본 경로로 설정 */}
        <Route path = "/"  element={<Home/>}/> 
        <Route path = "/CoinDetail" element={<CoinDetail/>} />
        <Route path = "/Login" element ={<Login/>} />
        <Route path ="/Search/:searchInfo" element={<Search/>}/>
        <Route path = '/Assign' element={<Sign/>} />
        <Route path = '/MyPage' element={<MyPage/>} />
      </Routes>
    </BrowserRouter>

  )
}

export default App