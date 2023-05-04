import { Link } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form";
import { loginFormData } from "../../Types";
// import { BACKEND_API_URL } from '../../utils/apiUrl';

import { useNavigate } from "react-router-dom";
//redux
import { useDispatch } from "react-redux";
import { SET_IS_LOGIN } from "../../store3/Slice/isLoginSlice";

const LoginBox = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<loginFormData>({ mode: "onBlur" });

  const onSubmit: SubmitHandler<loginFormData> = async (data) => {
    const loginData = {
      email: data.email,
      password: data.password,
    };

    const loginValid = await axios.post(`/customer/login`, loginData, {
      withCredentials: true,
    });
    try {
      console.log(loginValid);
      if (!loginValid.data.data) {
        dispatch(SET_IS_LOGIN(loginValid.data.login));

        navigate("/");
      } else {
        alert(`${loginValid.data.message}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-start">
      <div className="border-2  w-[45rem]	h-[42rem]">
        <div className="flex flex-col border-2 w-[20rem] rounded-2xl p-8 ml-52 mt-20 mb-50">
          <div className="text-center my-3 text-2xl">Login </div>
          {/* <div><button onClick={accsesToken}> 버튼</button></div>
          <div><button onClick={refreshToken}> 버튼</button></div> */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex justify-center p-2">
              <input
                {...register("email", {
                  required: "email을 입력해주세요",
                })}
                className="border-2 w-60 py-3 rounded-2xl px-3 text-lg"
                type="text"
                placeholder="아이디를 입력해주세요"
              />
            </div>
            {errors?.email && (
              <div className="ml-14 mb-2 text-rose-500 text-sm">
                {errors?.email?.message}
              </div>
            )}
            <div className="flex justify-center p-">
              <input
                {...register("password", {
                  required: "비밀먼호를 입력해주세요",
                })}
                className="border-2 w-60 py-3 rounded-2xl px-3 text-lg"
                type="password"
                placeholder="비밀번호를 입력해주세요"
              />
            </div>
            {errors?.password && (
              <div className="ml-14 mb-0 text-rose-500 text-sm">
                {errors?.password?.message}
              </div>
            )}
            <div className="flex justify-center">
              <button className="my-2 bg-blue-600 rounded-2xl w-60 py-3 px-3 text-lg">
                로그인
              </button>
            </div>
          </form>

          <div className="flex flex-row-reverse m-4 w-60">
            <Link to="/Assign">
              <button>회원가입</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-[45rem]	h-[42rem]">
        <img
          className=" w-[45rem]	h-[21rem]"
          src="https://img.lovepik.com/photo/40024/1962.jpg_wh860.jpg"
        />
        <img
          className=" w-[45rem]	h-[21rem]"
          src="https://img.lovepik.com/background/20211022/medium/lovepik-blue-technology-bitcoin-investment-banner-poster-background-image_605750671.jpg"
        />
      </div>
    </div>
  );
};

export default LoginBox;
