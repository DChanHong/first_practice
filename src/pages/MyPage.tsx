import Header from "../components/PageFrame/Header"
import Profile from "../components/Mypage/Profile"
const MyPage = () => {
  
  return (
    <div className='w-screen h-screen bg-cover bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...'>
        <div><Header/></div>
        <div><Profile/></div>
    </div>
  )
}

export default MyPage