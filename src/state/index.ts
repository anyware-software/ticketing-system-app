import { PayloadAction, createSlice } from "@reduxjs/toolkit";
interface AppState {
  mode: string;
  app: any;
  user: any;
  drawer: boolean;
}
const initialState: AppState = {
  mode: "light",
  app: null,
  user: null,
  drawer: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setMode: (state: AppState) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setLogin: (state, action) => {
      const { user } = action.payload;
      state.user = user;
      // console.log(user);
    },
    toggleDrawer: (
      state: AppState,
      action: { payload?: boolean | undefined }
    ) => {
      if (action.payload === undefined) {
        state.drawer = !state.drawer;
      } else {
        state.drawer = action.payload;
      }
    },
  },
});

export const { setMode, setLogin, toggleDrawer } = appSlice.actions;
export default appSlice.reducer;
