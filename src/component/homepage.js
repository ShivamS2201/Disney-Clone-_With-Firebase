import React from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider'
function Home(){
    return(     
        <Container>
            <ImgSlider />
            
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