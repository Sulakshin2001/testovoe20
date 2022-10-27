
import {AnyAction, applyMiddleware, combineReducers, createStore, Dispatch} from 'redux'
import thunkMiddleware, {ThunkDispatch} from 'redux-thunk'
import {elementReducer} from "../components/main/mainElement/element-reducer";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
const rootReducer = combineReducers({
    elemen: elementReducer,

})
// непосредственно создаём store
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>
export const useAppSelector:TypedUseSelectorHook<AppRootStateType>=useSelector
export type AppDispatch = Dispatch<AnyAction> & ThunkDispatch<AppRootStateType, null, AnyAction>
export const useAppDispatch: () => AppDispatch = useDispatch

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;
