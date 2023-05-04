import { configureStore } from "@reduxjs/toolkit";

import counterSlice from "./Slice/counterSlice";
import tokenSlice from "./Slice/isLoginSlice";
import coinSlice from "./Slice/coinSlice";

// 스토어 생성
export const store = configureStore({
    reducer:{
        //여기에 slice를 넣어줄 것이다.
        counter:counterSlice,
        is_login:tokenSlice,
        coinApp:coinSlice
    }
})

//useSelector 사용시 타입으로 사용하기 위함
export type RootState =ReturnType<typeof store.getState>
//useDispatch를 좀 더 명확하게 사용하기 위함
export type AppDispatch = typeof store.dispatch
