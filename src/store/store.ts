import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import userReducer from "./slices/userSlice";
import editorReducer from "./slices/editorSlice";
import authReducer from "./slices/authSlice"

const store = configureStore({
  reducer: {
    counter: counterReducer,
    form: userReducer,
    editor: editorReducer,
    auth: authReducer
  },
});

export default store;
