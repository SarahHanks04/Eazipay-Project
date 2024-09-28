import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  logo: null,
  companyName: "",
  isRegistered: null,
  cacDocument: null,
  officeAddress: "",
  proofOfAddress: null,
  companySize: "",
  pensionCode: "",
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setLogo: (state, action) => {
      state.logo = action.payload;
    },
    setCompanyName: (state, action) => {
      state.companyName = action.payload;
    },
    setIsRegistered: (state, action) => {
      state.isRegistered = action.payload;
    },
    setCACDocument: (state, action) => {
      state.cacDocument = action.payload;
    },
    setOfficeAddress: (state, action) => {
      state.officeAddress = action.payload;
    },
    setProofOfAddress: (state, action) => {
      state.proofOfAddress = action.payload;
    },
    setCompanySize: (state, action) => {
      state.companySize = action.payload;
    },
    setPensionCode: (state, action) => {
      state.pensionCode = action.payload;
    },
  },
});

export const {
  setLogo,
  setCompanyName,
  setIsRegistered,
  setCACDocument,
  setOfficeAddress,
  setProofOfAddress,
  setCompanySize,
  setPensionCode,
} = formSlice.actions;

export default formSlice.reducer;
