import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AuthStateType, authReducer } from './features/authSlice';
import { LeaveStateType, leaveReducer } from './features/leaveSlice';

export type RootState = {
    auth: AuthStateType;
    leaveRequest: LeaveStateType;
}
const rootReducer = combineReducers({
    auth: authReducer,
    leave: leaveReducer

});
const store = configureStore({
    reducer: rootReducer,
})
export default store

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;