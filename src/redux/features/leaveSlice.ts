import { createSlice } from '@reduxjs/toolkit';

interface LeaveState {
    leave: string | null,
    leaves: Array<string>,
    message: string,
}

const initialState: LeaveState = {
    leave: null,
    leaves: [],
    message: "",

}

const leaveSlice = createSlice({
    name: 'leave',
    initialState,
    reducers: {
        CALC_TOTAL_LEAVE: () => {
            console.log("total leave"); 
        },


    }
});

export const { actions, reducer: leaveReducer } = leaveSlice;
export type LeaveStateType = ReturnType<typeof leaveReducer>;