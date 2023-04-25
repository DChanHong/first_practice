import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect ,useState } from 'react'
import axios from 'axios'
import { COIN_API_URL } from '../utils/apiUrl'
import { HomePageCoin } from '../Types'

const Search = () => {

    //아래 3가지를 이용하여 필터예정
    const {searchInfo} =useParams()  //useparams에서 String 정의하는거 찾아보기
    const searchString= searchInfo || ''
    const [coinData,setCoinData] = useState([]);
    const [copy,setCopy] =useState([]);
    
    
    // 일단 API 데이터 GET해서 coinData랑 ,copy에 배열로 담아줌
    const fetchdata = async ()=>{
        const {data} = await axios.get(`${COIN_API_URL}`);
        setCoinData(data); //coinData에 정보가 담김
        setCopy(data); // coinData는 계속 업데이트될 예정이므로, 본 내용을 담을 useState 생성     
    }
    useEffect(()=>{
        fetchdata();
        
    },[])

    
    // filter include 이용해서 배열 필터링예정 
     const filterData = () =>{  
        if(copy.length>0){
            setCoinData (
                copy.filter(
                    (e:HomePageCoin)=>{ //인터페이스 넣어서 억지로 name 속성을 넣긴 했는데, 인터페이스 넣기전에는 어떻게 처리를 해야될지
                        e?.name?.toLowerCase().includes(searchString)  //any 를 안넣으면 null처리되버림
                    }
                )
            )   
            console.log(coinData)
        }
     }
     useEffect(()=>{
        filterData();
        
     },[])

    

  return (
    <div>
        
        <p>s</p>
    </div>
  )
}

export default Search