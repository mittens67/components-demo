import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface EditorState {
  content: string;
}

const initialState: EditorState = {
  content: "",
};

const editorSlice = createSlice({
  name: "editor",
  initialState,
  reducers: {
    updateContent: (state, action: PayloadAction<string>) => {
      state.content = action.payload;
    },
    resetContent: (state) => {
      state.content = "";
    },
  },
});

export const { updateContent, resetContent } = editorSlice.actions;
export default editorSlice.reducer;
