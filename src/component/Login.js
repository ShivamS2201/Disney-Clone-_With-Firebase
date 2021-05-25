import React from 'react'
import styled from 'styled-components'

function Login(){

    return(
        <Container>
            <CTA> 
                <CTALogoOne src="/images/cta-logo-one.svg" />
                <SignUp>GET ALL THERE</SignUp>
          <Description>
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.
          </Description>
          <CTALogoTwo src="/images/cta-logo-two.png" alt="" />
        </CTA>
        </Container>
    )
}

export default Login;

//styled-component/macro' to get readable class names!!!

const Container = styled.div`
    position:relative;
    display:flex;
    align-items:top;
    justify-content:center;
    height: calc(100vh - 70px);
    &:before {
        background-image: url("/images/login-background.jpg") ;
        background-position: top;
        background-repeat:no-repeat;
        background-size:cover;
        content:"";
        position: absolute;
        opacity: 0.8;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }
`

const CTA = styled.div`
max-width: 650px;
align-items:center;
width: 100%;
display: flex;
flex-direction:column;
margin-top:100px;

`
const CTALogoOne = styled.img`
  margin-bottom: 10px;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 90%;
`;

const SignUp = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  margin-top:10px
  margin-bottom: 8px;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 17px 0;
  text-align:center;
  cursor:pointer;
  border: 1px solid transparent;
  border-radius: 4px;
  transition:all 250ms;
  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 11px;
  margin: 0 0 24px;
  text-align:center;
  line-height: 1.5;
  letter-spacing: 1.5px;
`;

const CTALogoTwo = styled.img`
  max-width: 650px;
  margin-bottom: 20px;
  display: inline-block;
  align-items:center;
  vertical-align: bottom;
  width: 90%;
`;