// src/store/slices/userSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  id: string;
  name: string;
  address: string;
  email: string;
  phone: string;
}

interface UsersState {
  users: User[];
}

const initialState: UsersState = {
  users: [],
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      console.log("Current user state")
      console.log(state.users.length)
      state.users.push(action.payload);
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
