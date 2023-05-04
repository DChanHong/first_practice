import Header from "../components/PageFrame/Header";
import LoginBox from "../components/LoginSign/LoginBox";
// - API생성 해보기
//     - 프론트엔드에 로그인 페이지 레이아웃 생성
//     - 로그인 페이지에서 아이디 패스워드를 적으면 API요청(axios 모듈)
//     - Node express API에 요청이 들어가서 아이디 패스워드를 받아갈수 있게끔

const Login = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <LoginBox />
      </div>
    </>
  );
};

export default Login;
