import { createSlice } from "@reduxjs/toolkit";

export const queueListSlice = createSlice({
  name: "queueListSlice",
  initialState: { queueList: { expertises: {} } },
  reducers: {
    queueListData: (state, action) => {
      state.queueList = action.payload;
    },
  },
});

export const { queueListData } = queueListSlice.actions;

export default queueListSlice.reducer;
