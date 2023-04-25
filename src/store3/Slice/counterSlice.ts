import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

//초기 값의 타입 정의
export interface CounterState{
    value : number
}

//초기 값 선언
const initialState :CounterState ={
    value:1,
}

//slice 생성
export const counterSlice = createSlice({
    //slice 이름 정의
    name: 'counter',
    //초기값
    initialState,
    //counterSlices내에는 여러개의 리듀서들이 있다 함수라 생각하면 될듯
    reducers:{
        increment:(state)=>{
            state.value +=1
        },
        decrement: (state)=>{
            state.value -= 1
        },
        incrementByAmount : (state, action : PayloadAction<number>)=>{
            state.value +=action.payload
        },
    },
})

//각각의 리듀서의 액션을 생성
export const { increment , decrement , incrementByAmount } = counterSlice.actions

//slice를 내보냄
export default counterSlice.reducer

// Redux를 사용할 때는 액션 함수, 액션 타입, 리듀서(Reducer), 초기 상태 등을 나눠서 만들었는데, RTK에서는 
// 액션 함수, 액션 타입, 리듀서가 합쳐진 모양이다.
// switch case문으로 쓰던게 간소화됐다.








