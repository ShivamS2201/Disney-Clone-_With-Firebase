import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
function ImgSlider(){
    let settings = {
        dots:true,
        infinite:true,
        speed:300,
        sliderToShow:1,
        sliderToScroll:1,
        autoplay:true
    }
    return(
    <Carousel {...settings}>
        <Wrap>
        <img src="/images/slider-scale.jpg" />
        </Wrap>
        <Wrap>
        <img src="/images/slider-scales.jpg" />
        </Wrap>
        <Wrap>
        <img src="/images/slider-badging.jpg" />
        </Wrap>
        <Wrap>
        <img src="/images/slider-badag.jpg" />
        </Wrap>

    </Carousel>
    
)
}

export default ImgSlider

const Carousel = styled(Slider)`
margin-top:20px;

    ul li button{
        &:before{
            font-size:7px;
            color:rgb(150,158,171);
        }
    }
    
    li.slick-active button:before{
        color:white;
    }
    button{
        z-index:1;
    }
    .slick-list{
        overflow:visible;
    }
`


//We are passing a slider component to styled to change its css accordingly.
const Wrap = styled.div`
    cursor:pointer;
img{
        border:4px solid transparent;
        width:100%;
        height:100%;
        transition-duration:300ms;
        border-radius:10px;
        box-shadow: rgb( 0 0 0 / 69%) 0px 26px 30px -10px,
        rgba(0 0 0 / 73%) 0px 16px 10px -10px;

        &:hover{
            border:4px solid rgba(249,249,249,0.8)
        }

    }
`