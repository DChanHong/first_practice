import { createAsyncThunk } from "@reduxjs/toolkit";
// createAsyncThunk는 createAction의 비동기 버전을 위해 고안되었다.
// 액션 타입 문자열과 프로미스를 반환하는 콜백 함수를 인자로 받아서 주어진 액션 타입을 접두어로 사용하는
// 생명 주기 기반의 액션 타입을 생성한다.
import axios from "axios";
import { COIN_API_URL } from "../../utils/apiUrl";



export const getHomePageCoins =createAsyncThunk(
    'coinApp/HomePageCoin', // coinApp 이게 coinSlice로 만들어져있음
                            //slicename , type
    async () =>{ 
        const items =await axios.get(`${COIN_API_URL}`) 

        return items.data
    }
)



