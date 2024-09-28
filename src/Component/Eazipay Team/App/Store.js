import { configureStore } from '@reduxjs/toolkit';
import teamReducer from "../Slice/Slice";
import formReducer from "../../Settings/Slice"

export const store = configureStore({
  reducer: {
    team: teamReducer,
    form: formReducer,
  },
});

export default store;
