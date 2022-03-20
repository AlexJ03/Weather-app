import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    city: {},
};

const citySlice = createSlice({
    name: "city",
    initialState,
    reducers: {
        setCityRed: (state, action) => {
            state.city = action.payload;
        },
    },
});

export const { setCityRed } = citySlice.actions;

export default citySlice.reducer;
