import { configureStore } from '@reduxjs/toolkit';
import appReducer from './index';

const store = configureStore({
  reducer: {
    app: appReducer,
  },
});

export default store;
