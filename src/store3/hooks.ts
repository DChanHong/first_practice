import { TypedUseSelectorHook } from "react-redux";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { AppDispatch } from "../store";
import { RootState } from "../store";

export const useAppDispatch : () => AppDispatch  = useDispatch;
// () 안이 매개변수  / 함수타입 : AppDispatch
// AppDispatch 함수는 useAppDispatch의 타입을 ()로 ,return 값을 AppDispatch로 해야한다는 뜻?
// useDispatch는 thunks에 대해서 알지 못한다. 그래서 thunk middleware를 사용하는 비동기 처리가 필요하다

export const useAppSelctor: TypedUseSelectorHook<RootState> =useSelector
// 원래 useSelector는 사용할 때마다 매번 state의 타입을 지정해줘야한다.
// 여기서 미리 설정해줌으로써, state 타입을 지정할 필요가 없어졌다.

