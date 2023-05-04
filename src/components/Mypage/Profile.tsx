import { useEffect, useState } from "react";
import axios from "axios";
import { userInfo } from "../../Types";
import { BACKEND_API_URL } from "../../utils/apiUrl";

const Profile = () => {
  const [userinfo, setUserInfo] = useState<userInfo | null>(null);
  const [pageLoading, setPageLoadinf] = useState(false);
  const getUserInfo = async () => {
    const userInfo = await axios.get("/customer/getuserInfo");
    setUserInfo(userInfo.data[0]);
    setPageLoadinf(true);
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  useEffect(() => {}, [pageLoading]);
  //이미지 추가
  const [files, setFiles] = useState<File | null>(null);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(files);
    const formData = new FormData();
    if (files) {
      formData.append("file", files);
    }
    console.log(formData.get("file"));
    try {
      const response = await axios.post("/customer/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response.data);

      getUserInfo();
    } catch (error) {
      console.log(error);
    }
  };
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      console.log(event.target.files, event.target.files[0]);
      setFiles(event.target.files[0]);
    }
  };
  return (
    <>
      {!pageLoading ? (
        <div>...loading</div>
      ) : (
        <div>
          <div className="flex justify-start shadow-lg shadow-blue-700 mt-4 mb-4  w-8/12 h-48 m-auto rounded-lg relative bg-blue-300">
            <div className="w-[18rem]"></div>
            <div className=" shadow-lg shadow-blue-700 w-[15rem] h-[30rem]  m-auto rounded-lg absolute top-10 left-4  bg-blue-100">
              <div className="h-3/6">
                <div>
                  <img
                    className="border-4 border-current border-indigo-200 rounded-full mx-7 mt-6 w-[12rem] "
                    src={`${BACKEND_API_URL}/image/${userinfo?.IMG}`}
                  />

                  <form onSubmit={handleSubmit}>
                    <input
                      className="mx-4"
                      type="file"
                      onChange={handleFileChange}
                    />
                    <button className="ml-4" type="submit">
                      Upload
                    </button>
                  </form>
                </div>
              </div>
              <div className="mt-10">
                <div> 이메일 : {userinfo?.email}</div>
                <div> 이름 : {userinfo?.name}</div>
                <div> 성별 : {userinfo?.fm}</div>
              </div>
            </div>
          </div>
          <div className="flex justify-start   shadow-lg shadow-blue-700  w-8/12 h-[27rem] m-auto rounded-lg bg-sky-300">
            <div className=" w-[18rem]"></div>
            <div className="w-[15rem]">여기는 참여중인 동아리 정보</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
