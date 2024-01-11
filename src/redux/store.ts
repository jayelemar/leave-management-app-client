import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AuthStateType, authReducer } from './features/auth/authSlice';
//import { productReducer, ProductStateType } from './feature/productSlice';

export type RootState = {
    auth: AuthStateType;
}
const rootReducer = combineReducers({
    auth: authReducer,

});
const store = configureStore({
    reducer: rootReducer,
})
export default store

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;