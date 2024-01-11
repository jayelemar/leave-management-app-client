import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
    isLoggedIn: boolean,
}

const initialState: AuthState = {
    isLoggedIn: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        SET_ACTIVE_USER: (state, action: PayloadAction<AuthState>) => {
            console.log(action.payload); //for checking if info is saved in redux
            return action.payload;
        },
        REMOVE_ACTIVE_USER: (state) => {
            state.isLoggedIn = false;
        },

    }
});

export const { actions, reducer: authReducer } = authSlice;
export type AuthStateType = ReturnType<typeof authReducer>;