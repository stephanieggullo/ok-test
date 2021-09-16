import { createSlice, configureStore } from '@reduxjs/toolkit';

const wizardSlice = createSlice({
  name: 'wizard',
  initialState: {
    step: null,
    feedback: null,
  },
  reducers: {
    setStep(state, action) {
      state.step = action.payload;
    },
    setFeedback(state, action) {
      state.feedback = action.payload;
    },
  },
});

const store = configureStore({ reducer: wizardSlice.reducer });

export const wizardActions = wizardSlice.actions;
export const wizardReducer = wizardSlice.reducer;

export default store;
