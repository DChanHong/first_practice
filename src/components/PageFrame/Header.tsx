
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { RootState } from '../../store3/store';
import { useDispatch } from 'react-redux';
import { REMOVE_IS_LOGIN } from '../../store3/Slice/isLoginSlice';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {

  
  const login =useSelector((state:RootState)=> state.is_login.is_Login)
  const dispatch =useDispatch()
  const navigate = useNavigate()

  const test = () =>{
    dispatch(REMOVE_IS_LOGIN());
    alert('로그인이 필요합니다.');
    navigate('/')
  }


  

  return (
    <div className='w-[100%]'>
        <div className='flex justify-between  h-[60px] bg-[#18275B]'>
            <Link to={'/'}>
              <div className='my-4 ml-10 text-white text-2xl'> Cryto Currency Information </div>
            </Link>
            <div className='mr-10 mt-4 '>
              
              {login ===false ? <Link to={'/Login'} className='text-white mr-6'>로그인</Link> : <Link to={'/MyPage'}><span className='text-white'> mypage </span>  </Link>}
              {login===false ? <Link to={'/Assign'} className='text-white'>회원가입</Link> : <button type='button' onClick={test} > <span className='text-white'> 로그아웃 </span></button> }
            </div>
        </div>
    </div>
  )
}

export default Header 