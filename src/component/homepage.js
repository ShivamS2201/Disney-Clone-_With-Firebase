import React,{useEffect} from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import Viewers from './Viewers'
import db from '../firebase'
import Movies from './Movies'
//For dispatching or getting Movies from database. Read more at Dispatch@react
import { useDispatch } from 'react-redux'
import { setMovies } from '../features/movie/movieSlice' //Method to put in our dispatched movies into the sections/places.
//UseEffect is to get the movies from DB,
//It says whenever I load my page-> Run the functions/methods,etc.


//Redux manages the database. 
//Reduces the Passing of data from one call to anoher
function Home(){
    const dispatch = useDispatch();

    useEffect(()=>{
        db.collection("movies").onSnapshot((snapshot)=>{
            let tempMovies = snapshot.docs.map((doc)=>{ //map function to map all files in db to a method to present it on frontend.
                return {id: doc.id, ...doc.data()}  // ... means unpacks the object to {} for returning to temp movies.

            })
            dispatch(setMovies(tempMovies));
        }) //Snapshot->Whenevercall is done Database, static picture is sent to us.
    }
    , [])
    return(     
        <Container>
            <ImgSlider />
            <Viewers />
            <Movies />
        </Container>
    );
}

export default Home

const Container = styled.main`
min-height:calc(100vh - 70px);
padding:0 calc(3.5vw + 5px);
position:relative;
overflow-x:hidden;
&:before{
    background:url("/images/home-background.png") center center / cover no-repeat fixed;
    content:"";
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index:-1;

}

`
// before->position is absolute to main which is its relative left,right,top bottom to set it cover, center ,center to help it. Is always fixed.
//z-index to make in the back.
//vh-vertical height, calc-calculates, vw-vertical width

/*  ABOUT DB
id, description, title, cardImg
*/