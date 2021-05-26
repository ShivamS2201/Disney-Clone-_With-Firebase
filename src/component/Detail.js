import React,{ useEffect,useState } from 'react'
import styled from 'styled-components'
import { useParams } from "react-router-dom"
import db from '../firebase';

function Detail(){

    const {id} = useParams();
    const [movie, setMovie] = useState()
    useEffect(()=>{
        db.collection("movies")
        .doc(id)
        .get()
        .then((doc)=>{
            if(doc.exists){ //save movie sata
                setMovie(doc.data()) //We get the movie as object from database.

            }else{
                //redirect homepage or errer page.
            }
        })
    },[id])
    console.log(movie);

    return(
        <Container>
            {movie && ( //wrapper inside a container for wasy binding
                <>
                <Background>
                <img src={movie.backgroundImg} alt="Background-details" />
            </Background>
            <Heading>
            <img src={movie.titleImg} alt="Image-Header"/>          
            </Heading>
            <Controls>
                <PlayButton>
                    <img alt="img" src="/images/play-icon-black.png"  />
                    <span>PLAY</span>
                </PlayButton>
                <TrailerButton>
                <img alt="img" src="/images/play-icon-white.png" />
                    <span>TRAILER</span>
                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWatchButton>
                    <img alt="img" src="/images/group-icon.png" alt="GroupIcon" />
                </GroupWatchButton>
            </Controls>
            <SubTitle>
            {movie.subTitle}
            </SubTitle>
        <Description>{movie.description}</Description>
        </>
            )
            }
            
        </Container>
    )
}
export default Detail
const Container = styled.div`
    min-height:calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position:relative;
    align-items:center;

`
const Background = styled.div`
position:fixed;
top:0px;
left:0;
right:0;
bottom:0;
z-index:-1;
opacity:0.78;
    img{
        width:100%;
        height:100%;
        object-fit:cover;
        @media (max-width: 768px) {
            width: initial;
          }
        
    }

`
const Heading = styled.div`
    height: 23vw;
    padding-top:20px;
    padding-bottom:15px;
    width:35vw;
    min-height:170px;
    min-width:200px;
    img{
        width:100%;
        height:100%;
        object-fit:contain;
    }
`

//Use containers To imploy a image and do as above
const Controls = styled.div`
display:flex;
align-items:center;

`
const PlayButton = styled.button`
    border-radius:4px;
    border:none;
    cursor:pointer;
    font-size:15px;
    padding:0 24px;
    margin-right:22px;
    display: flex;
    letter-spacing:1.8px;
  align-items: center;
    height:56px;
    background:rgb(249,249,249);
    img {
        width: 32px;
      }

    &:hover{
        background: rgb(198,198,198)
    }
    @media (max-width: 768px) {
        height: 45px;
        padding: 0px 12px;
        font-size: 12px;
        margin: 0px 10px 0px 0px;
        img {
          width: 25px;
        }
      }
`
const TrailerButton = styled(PlayButton)`
border:rgba(249,249,249);
background:rgba(0,0,0,0.3);
color:rgb(249,249,249);
text-transform:uppercase;


`
//Trailer Button gets the Play button passed as a property.

const AddButton = styled.button`
margin-right: 16px;
height: 44px;
width: 44px;
border-radius: 50%;
border: 2px solid white;
align-items: center;
justify-content: center;
background-color: rgba(0,0,0,0.6);
cursor: pointer;
span{
    font-size: 30px;
    color: white;
    &:first-child {
        height: 2px;
        transform: translate(1px, 0px) rotate(0deg);
        width: 16px;
      }
      &:nth-child(2) {
        height: 16px;
        transform: translateX(-8px) rotate(0deg);
        width: 2px;
      }
}
`
const GroupWatchButton = styled.button`
height: 44px;
background-color: rgba(0,0,0,0.6);
width: 44px;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;

`

const SubTitle = styled.div`
color:rgb(249,249,249);
font-size:12.5px;
min-height:20px;
margin-top:20px;
@media (max-width: 768px) {
    font-size: 12px;
  }

`
const Description = styled(SubTitle)`
line-height:1.4;
font-size:16px;
margin-top:16px;
max-width:760px;
@media (max-width: 768px) {
    font-size: 14px;
  }
`
//Given Descripton a parameter of type subtitile. 