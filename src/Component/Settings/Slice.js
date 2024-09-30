import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  logo: null,
  companyName: "",
  isRegistered: null,
  cacDocument: null,
  officeAddress: "",
  // proofOfAddress: null,
  companySize: "",
  pensionCode: "",
  payeState: "",
  payeId: "",
  nhfCode: "",
  website: "",
  industry: "",
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
    // setProofOfAddress: (state, action) => {
    //   state.proofOfAddress = action.payload;
    // },
    setCompanySize: (state, action) => {
      state.companySize = action.payload;
    },
    setPensionCode: (state, action) => {
      state.pensionCode = action.payload;
    },
    setPayeState: (state, action) => {
      state.payeState = action.payload;
    },
    setPayeId: (state, action) => {
      state.payeId = action.payload;
    },
    setNhfCode: (state, action) => {
      state.nhfCode = action.payload;
    },
    setWebsite: (state, action) => {
      state.website = action.payload;
    },
    setIndustry: (state, action) => {
      state.industry = action.payload;
    },
    resetForm: () => initialState, // Added Reset Action
  },
});

export const {
  setLogo,
  setCompanyName,
  setIsRegistered,
  setCACDocument,
  setOfficeAddress,
  // setProofOfAddress,
  setCompanySize,
  setPensionCode,
  setPayeState,
  setPayeId,
  setNhfCode,
  setWebsite,
  setIndustry,
  resetForm,
} = formSlice.actions;

export default formSlice.reducer;
