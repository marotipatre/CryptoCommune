import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

interface Data {
  firstName: string;
  lastName: string;
  did: string;
  token: string;
  address: string;
}

const initialState: Data = {
  firstName: "Mahsa",
  address: "",
  lastName: "karimi",
  did: "",
  token: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCustomerToken: (state, action) => {
      state.token = action.payload;
    },
    setCustomerFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    setCustomerLastName: (state, action) => {
      state.lastName = action.payload;
    },
    setCustomerAddress: (state, action) => {
      state.address = action.payload;
    },
    logout: (state: any) => {
      return { ...state, ...initialState };
    },
  },
});

export const selectCustomerToken = (state: any) => state.user.token;
export const selectCustomerAddress = (state: any) => state.user.address;
export const selectCustomerFirstName = (state: any) => state.user.firstName;
export const selectCustomerLastName = (state: any) => state.user.firstName;

export const {
  setCustomerToken,
  setCustomerFirstName,
  setCustomerLastName,
  setCustomerAddress,
  logout,
} = userSlice.actions;

export default userSlice.reducer;
