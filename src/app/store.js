import { configureStore } from '@reduxjs/toolkit';
import movieReducer from '../features/movie/movieSlice'
import userslice from '../features/user/userslice';
import userReducer from '../features/user/userslice'

export const store = configureStore({
  reducer: {
    movie: movieReducer, // this is the movie Reducer at our disposal.
    user:userslice
  },
});
