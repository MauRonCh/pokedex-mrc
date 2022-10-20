import { createSlice } from "@reduxjs/toolkit";

const usernameSlice = createSlice({
    name: 'username',
    initialState: '',
    reducers: {
        setGlobalUsername: (state, action) => action.payload
    }
})

export const {setGlobalUsername} = usernameSlice.actions;

export default usernameSlice.reducer;