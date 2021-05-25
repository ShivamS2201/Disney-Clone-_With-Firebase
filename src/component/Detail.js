import React from 'react'
import styled from 'styled-components'

function Detail(){
    return(
        <Container>
            <Background>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg" alt="Background-details" />
            </Background>
            <ImgHeading>
            <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78" alt="Image-Header"/>          
            </ImgHeading>
            <Controls>
                <PlayButton>
                    <img src="/images/play-icon-black.png" />
                    <span>PLAY</span>
                </PlayButton>
                <TrailerButton>
                <img src="/images/play-icon-white.png" />
                    <span>TRAILER</span>
                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWatchButton>
                    <img src="/images/group-icon.png" alt="GroupIcon" />
                </GroupWatchButton>
            </Controls>
            <SubTitle>
            Super Awesome ~ i have just ~ seen thi
            </SubTitle>
        <Description>Qazi! I heard you'll be doing some awesome projects this may! A great idea is to make react native clones of all clever programmer react builds🔥
            New age coder
​           waitI thank youtube for the day I came across this channel. Between the three of these guys, this is probably the best beginner channel there is. thank so much nas!</Description>
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
top:0;
left:0;
right:0;
bottom:0;
z-index:-1;
opacity:0.78;
    img{
        width:100%;
        height:100%;
        object-fit:cover;
        
        
    }

`
const ImgHeading = styled.div`
    height: 30vw;
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

    &:hover{
        background: rgb(198,198,198)
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
font-size:15px;
min-height:20px;
margin-top:26px;
`
const Description = styled(SubTitle)`
line-height:1.4;
font-size:16px;
margin-top:16px;

`