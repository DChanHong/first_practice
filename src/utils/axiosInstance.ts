import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:4000/api",
  withCredentials: true,
});

// const dispatch = useDispatch();
// const navigate = useNavigate();

//  2. 응답 인터셉터= 2개의 콜백 함수를 받습니다.
axiosInstance.interceptors.response.use(
  (response) => {
    // http status가 200인 경우 x응답 성공 직전 호출됩니다. .then() 으로 이어집니다.
    return response;
  },
  (error) => {
    // http status가 200이 아닌 경우 응답 에러 직전 호출됩니다. .catch() 으로 이어집니다.
    if (error.response.status && error.response.status) {
      switch (error.response.status) {
        case 401:
          //   dispatch(REMOVE_IS_LOGIN());
          window.location.href = "/Login";
          //   navigate("/Login");
          break;

        default:
          return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
