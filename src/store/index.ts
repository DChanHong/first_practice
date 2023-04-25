import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
// createSlice를 사용하면 createAction을 통해 따로 Action을 정의하지 않아도 자동으로 액션타입을 만들어준다.
// 액션의 payload 필드의 타입을 지정할 수 있게 해주는 제네릭( <String>  )이다
import { InitialState } from "../Types";
import { getCoinDetail } from "./reducers/getCoinDetail";
import { getHomePageCoins } from "./reducers/getHomePageCoins";

//초기 값 지정
const initialState : InitialState ={
    coins:[] ,
    coinsDetail:[]
}


//reducer 집합체
const CoinSlice =createSlice({
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

export const store = configureStore({
    reducer:{
        coinApp : CoinSlice.reducer ,
    }
});

export const {clearCoins} = CoinSlice.actions

// store에 담겨있는 state들을 타입으로 하겠다?
export type RootState =ReturnType<typeof store.getState>;
export type AppDispatch =typeof store.dispatch;



