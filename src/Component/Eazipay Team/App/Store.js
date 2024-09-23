import { configureStore } from '@reduxjs/toolkit';
import teamReducer from "../Slice/Slice";

export const store = configureStore({
  reducer: {
    team: teamReducer,
  },
});

export default store;
