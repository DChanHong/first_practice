// Object들
import { useEffect ,useState } from "react"
import { clearCoins } from "../store"
import { useAppDispatch ,useAppSelctor } from "../store/hooks"
import { getHomePageCoins } from "../store/reducers/getHomePageCoins"
import { HomePageCoin } from "../Types"
import { Link } from "react-router-dom"
//components
import Header from "../components/PageFrame/Header"
import Sidebar from "../components/PageFrame/Sidebar"
import CoinList from "../components/CoinDetail/CoinList"
import DBPracticeButtom from "../components/PageFrame/DBPracticeButtom"
import axios from "axios"
import { useSelector,useDispatch } from "react-redux"
import { decrement , increment ,incrementByAmount } from "../store3/Slice/counterSlice"
import { RootState } from "../store3/store"


function Home() {

  

  
//   const dispatch = useAppDispatch();
//   let coins =useAppSelctor((state) => state.coinApp.coins)

//   useEffect(()=>{
//     return ()=>{
//       dispatch(clearCoins());
//     };
//   }, [dispatch]);

//   useEffect(()=>{
//     dispatch(getHomePageCoins());
    
//   },[dispatch])
  
//  const coin = coins.slice(0,30); // 배열 짜르기

//  const title = ['기호', '코인이름' , '현재가격', '마켓수요' , '1hR' ,'6hR']

//   // 서치 기능 위한 요소
//   const [searchValue, setSearchValue] =useState('');

//   const handleInputChange = (e :any) =>{
//     setSearchValue(e.target.value);
//   }
const getUserInfo=  async () =>{
  const data = await axios.get("/customer/getuserInfo"  )
  console.log(data)

}
  return (
    <div>
      <div> 
        <Header/>
      </div>
      <div className="flex justify-start">
        <div>
        <div className=''><button onClick={getUserInfo}>test</button></div>
          <Sidebar/>
        </div>
        {/* <div className="border-gray border-4 my-8 rounded-2xl"> 
          <div>
            <input className="border-2 m-2 mb-0" onChange={handleInputChange} value={searchValue} type='text'/> 
            <Link to={`/Search/${searchValue}`}><button>검색</button></Link>
          </div>
          <div className="ml-2 py-5 pl-5 pr-5 pb-0  flex justify-start">
            {title.map((items)=><div className="m-3 ml-4 pr-10 mb-0 text-xl ">{items}</div> )}
          </div>
          <div>
            {coin.map(
              (item : HomePageCoin , idx:number)=> {
                return <CoinList data={item} idx={idx}/>
                } 
              )}            
          </div>
          
        </div> */}
        <div className="my-6 ml-4"><DBPracticeButtom/></div>

      </div>
      
    </div>
  )
}

export default Home