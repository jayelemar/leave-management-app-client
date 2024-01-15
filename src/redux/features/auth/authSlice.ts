import { RootState } from '@/redux/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface User {
    name: string,
    email: string,
}

interface AuthState {
    isLoggedIn: boolean,
    name: string,
    user: User,

}

// get name from localStorage
const name = JSON.parse(localStorage.getItem("name") ?? "")

const initialState: AuthState = {
    isLoggedIn: false,
    name: name ? name : "" ,
    // check for name in local storage, if there is a name, use that name,else put empty string
    user: {
        name: "",
        email: "",
    },

}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        SET_LOGIN(state, action) {
            state.isLoggedIn = action.payload
        },
        SET_NAME(state, action) {
            // save the name to local storage first
            localStorage.setItem("name", JSON.stringify(action.payload))
            state.name = action.payload
        },

        SET_USER: (state, action: PayloadAction<AuthState>) => {
            const profile = action.payload;
            state.user = {
                ...state.user,
                ...profile
            };
        },

    }
});

export const { actions, reducer: authReducer } = authSlice;
export type AuthStateType = ReturnType<typeof authReducer>;

export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn
export const selectName = (state: RootState) => state.auth.name
export const selectUser = (state: RootState) => state.auth.user