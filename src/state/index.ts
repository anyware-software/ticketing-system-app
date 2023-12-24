import { PayloadAction, createSlice } from "@reduxjs/toolkit";
interface AppState {
  mode: string;
  app: any;
  user: any;
}
const initialState: AppState = {
  mode: "light",
  app: null,
  user: null,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setMode: (state: AppState) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setLogin: (state , action) => {
      const { user } = action.payload;
      state.user = user;
      console.log(user);
    },
  },
});

export const {
  setMode,
  setLogin,
} = appSlice.actions;
export default appSlice.reducer;
