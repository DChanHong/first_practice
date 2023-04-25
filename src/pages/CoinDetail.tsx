import React from 'react'
import { clearCoins } from '../store';
import { useAppDispatch, useAppSelctor } from '../store/hooks';
import { getCoinDetail } from '../store/reducers/getCoinDetail';
import { useEffect ,useState } from "react"
import CoinDetailCard from '../components/CoinDetail/CoinDetailCard';
import Header from '../components/PageFrame/Header';
import Sidebar from '../components/PageFrame/Sidebar';



const CoinDetail = () => {
    
  const [loading, setLoading] = useState(true)
//차선책 쿼리스트링 추출해서 디테일 항목 보이기
  const location = window.location;
  const param = new URLSearchParams(location.search);
  let id:number = Number(param.get("id"));


  const dispatch = useAppDispatch();
  let coinsdetail =useAppSelctor((state) => state.coinApp.coinsDetail)

  useEffect(()=>{
    return ()=>{
      dispatch(clearCoins());
    };
  }, [dispatch]);

  useEffect(()=>{
    dispatch(getCoinDetail());

  },[dispatch])

  useEffect(()=>{
    if(coinsdetail.length > 0){
      setLoading(false)
    }
    // setLoading(false)
    // console.log(coinsdetail)
  },[coinsdetail])

  const coins = coinsdetail.slice(0,20);


  return (

    <div>      
      <div> 
        <Header/>
      </div>
      <div className="flex justify-start">
        <div>
          <Sidebar/>
        </div>
          <div>
            {loading ? '...Loading' : <CoinDetailCard data={coins[id]}  /> }
          </div>
        </div>
      </div>


  )
}

export default CoinDetail