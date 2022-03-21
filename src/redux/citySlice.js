import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    city: {},
    cityName: "",
};

const citySlice = createSlice({
    name: "city",
    initialState,
    reducers: {
        setCityRed: (state, action) => {
            state.city = action.payload;
        },
        setCityName: (state, action) => {
            state.cityName = action.payload;
        },
    },
});

export const { setCityRed, setCityName, } = citySlice.actions;

export default citySlice.reducer;
