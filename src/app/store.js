import { configureStore } from '@reduxjs/toolkit';
import apartmentsReducer from '../features/counter/apartmentsSlice';

export const store = configureStore({
  reducer: {
    apartments: apartmentsReducer
  },
});
