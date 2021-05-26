import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    movies: []
}

const movieSlice = createSlice({

    name: "movie",
    initialState,
    reducers:{
        setMovies: (state,action) =>{
            state.movies = action.payload;
        }
    }
})
export const { setMovies } = movieSlice.actions;
export const selectMovies = (state) => state.movie.movies
export default movieSlice.reducer;
/* In Home.js use Effect we grab data from database use Dispatch to dispatch an action->Set movies to temp movies and store it in react store
    Then we finally Grab those in Movies component (From the store.)
*/
//            select____ whatever you want.
/* 
Redux-> Actions, Reducers, State
Actions - Log in,Log out, Set db, save data.
Reducers - What takes an action and changes state.
State- Any components current settings that might get change
..Whole app is aware of this change
More at Redux docs.
*/