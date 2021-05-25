import React from 'react'
import styled from 'styled-components'

function Movies(){
    return(
        <Container>
            <h4>

            Recommended For You
            </h4>

            <Content>
                <Wrap>
                    <img src="/images/viewers-marvel.png" alt="Movie"/>
                </Wrap>
                <Wrap>
                    <img src="/images/viewers-marvel.png" alt="Movie"/>
                </Wrap>
                <Wrap>
                    <img src="/images/viewers-marvel.png" alt="Movie"/>
                </Wrap>
                <Wrap>
                    <img src="/images/viewers-marvel.png" alt="Movie"/>
                </Wrap>
                



            </Content>
        </Container>

    )
}

export default Movies

const Container = styled.div`


`
const Content = styled.div`
    display:grid;
    grid-gap:25px;
    grid-template-columns:repeat(4,minmax(0,1fr));


`

const Wrap = styled.div`
    border-radius:10px;
    overflow:hidden; 
    cursor:pointer;
    border: 3px solid rgb(249,249,249,0.1); 
    box-shadow: rgb(0 0 0 /69%) 0 26px 30px -10px,
    rgba(0 0 0 /73%) 0 16px 10px -10px;   
    transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;

    img{
        width:100%;
        height:100%:
        object-fit:cover;
    }
    &:hover{
        box-shadow: rgb(0 0 0 /80%) 0 40px 58px -16px,
        rgba(0 0 0 /72%) 0 30px 22px -10px; 
        transform: scale(1.05);
        border-color:rgba(249,249,249,0.8);
    }
`

//Line 50 overflow:hidden; for image to be fit inside its assigned div. Border-radius change doesnot show without it.