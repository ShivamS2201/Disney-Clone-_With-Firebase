import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import movieReducer from '../features/movie/movieSlice'


export const store = configureStore({
  reducer: {
    movie: movieReducer, // this is the movie Reducer at our disposal.
  },
});
