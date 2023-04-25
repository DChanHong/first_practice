import { useEffect,useState } from "react"
import axios from "axios"
import { userInfo } from "../../Types";

const Profile = () => {

  
  const [userinfo , setUserInfo] =useState<userInfo|null>(null);
  const [pageLoading ,setPageLoadinf] =useState(false)
  const getUserInfo = async () =>{
    const userInfo = await axios.get("/customer/getuserInfo");
    setUserInfo(userInfo.data[0]); 
    setPageLoadinf(true);
    
  }
  
  useEffect(() =>{
    getUserInfo();
  },[])

  useEffect(()=>{

  },[pageLoading])
  return (
    <>
    {!pageLoading ? <div>...loading</div> : <div>
          <div className='flex justify-start shadow-lg shadow-pink-400 mt-4 mb-4 bg-red-400 w-8/12 h-48 m-auto rounded-lg relative'>
              <div className='w-[18rem]'></div>
              {/* <div className=''><button onClick={getUserInfo}>test</button></div> */}

              <div className=' shadow-lg shadow-pink-500 bg-yellow-300 w-[15rem] h-[30rem]  m-auto rounded-lg absolute top-10 left-4 '>
                  <div className='h-3/6'>여기 프로필 사진 가져올 곳</div>
                  <div>
                    <div></div>
                    <div> 이메일 : {userinfo?.email}</div>
                    <div> 이름 : {userinfo?.name}</div>
                    <div> 성별 : {userinfo?.fm}</div>
                  </div>
              </div> 
          
          </div>
          <div className='flex justify-start   shadow-lg shadow-pink-400 bg-slate-400 w-8/12 h-[27rem] m-auto rounded-lg '>
              <div className=' w-[18rem]'></div>
              <div className='w-[15rem]'>여기는 참여중인 동아리 정보</div>
          </div>   

      </div>}
    </>
  )
}

export default Profile