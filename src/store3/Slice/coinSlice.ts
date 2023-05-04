import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { COIN_API_URL } from '../../utils/apiUrl'
import { InitialState } from "../../Types";

// 비동기 리듀서
export const getCoinDetail = createAsyncThunk(
    'coinApp/DetailCoin',
    async () => {
        const items = await axios.get(`${COIN_API_URL}`)

        return items.data;
    }
    
)
// 비동기 리듀서
export const getHomePageCoins =createAsyncThunk(
    'coinApp/HomePageCoin', // coinApp 이게 coinSlice로 만들어져있음
                            //slicename , type
    async () =>{ 
        const items =await axios.get(`${COIN_API_URL}`) 

        return items.data
    }
)

//초기 값 지정
const initialState : InitialState ={
    coins:[] ,
    coinsDetail:[]
}

//reducer 집합체
export const CoinSlice =createSlice({
    name: "coinApp", // 필수 옵션인듯함
    initialState,    // 필수 옵션인듯함  + reducers도 필수 옵션인듯함
    //여기에 그냥 리듀서 추가
    reducers:{
        clearCoins:(state) =>{
            state.coins =[]; //api로 받아서 배열에 담은 내용들을 없에주는 용도
            state.coinsDetail =[];
        }
    },
    //extra 리듀서에 비동기 리듀서 추가
    extraReducers(builder) {
        builder.addCase(getHomePageCoins.fulfilled,(state,action)=>{
            state.coins =action.payload // --> 여기서도 어떻게 되는지 조금 잘안되는듯홤

        });
        builder.addCase(getCoinDetail.fulfilled ,(state, action)=>{
            state.coinsDetail =action.payload
        })
    }  
});

export const { clearCoins } =CoinSlice.actions;

export default CoinSlice.reducer;