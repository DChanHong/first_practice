import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store3/store";
import { useDispatch } from "react-redux";
import { REMOVE_IS_LOGIN } from "../../store3/Slice/isLoginSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Header = () => {
  const login = useSelector((state: RootState) => state.is_login.is_Login);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //로그아웃 버튼
  const logout = () => {
    dispatch(REMOVE_IS_LOGIN());
    navigate("/");
  };

  //  2. 응답 인터셉터= 2개의 콜백 함수를 받습니다.
  axios.interceptors.response.use(
    (response) => {
      // http status가 200인 경우 x응답 성공 직전 호출됩니다. .then() 으로 이어집니다.
      return response;
    },
    (error) => {
      // http status가 200이 아닌 경우 응답 에러 직전 호출됩니다. .catch() 으로 이어집니다.
      if (error.response.status && error.response.status) {
        switch (error.response.status) {
          case 401:
            dispatch(REMOVE_IS_LOGIN());
            navigate("/Login");
            break;

          default:
            return Promise.reject(error);
        }
      }
      return Promise.reject(error);
    }
  );

  return (
    <div className="w-[100%]">
      <div className="flex justify-between rounded-lg  h-[60px] bg-blue-600 drop-shadow-2xl shadow-blue-400">
        <Link to={"/"}>
          <div className="my-4 ml-10 text-white text-2xl">
            {" "}
            Cryto Currency Information{" "}
          </div>
        </Link>
        <div className="mr-10 mt-4 ">
          {login === false ? (
            <Link to={"/Login"} className="text-white mr-6">
              로그인
            </Link>
          ) : (
            <Link to={"/MyPage"}>
              <span className="text-white"> mypage </span>{" "}
            </Link>
          )}
          {login === false ? (
            <Link to={"/Assign"} className="text-white">
              회원가입
            </Link>
          ) : (
            <button type="button" onClick={logout}>
              {" "}
              <span className="text-white"> 로그아웃 </span>
            </button>
          )}
        </div>
      </div>
      {/* <div>{String(login)} <button onClick={()=>dispatch(REMOVE_IS_LOGIN(false))}>RM</button><button onClick={()=>dispatch(SET_IS_LOGIN(true))}>SET</button></div> */}
    </div>
  );
};

export default Header;
