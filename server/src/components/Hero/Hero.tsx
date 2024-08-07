
import styled from "styled-components"
import { Container } from "react-bootstrap"
import ModalComponent from "../modal/modal"

const HeroComponent = styled.header`
padding: 5rem 0;
height: 60vh;
background-image: url("https://img.freepik.com/free-vector/blue-pink-halftone-background_53876-99004.jpg");
background-size: cover;
background-position: top;
color: black;
`

const HeaderContainer = styled.div`
    background-color: rgb(238,130,238);
    padding: 3rem;
    color: white;
    width: 32.5rem
`

const Heading = styled.h1`
    font-size: 5rem
`;

const SubHeading = styled.h3`
    margin:1rem 0;
    font-weight: 400;
    color: rgb(75,0,130)
`


const Hero = ()=>{
    return <HeroComponent>
        <Container

        ><HeaderContainer>
            <Heading>Get Paid For Being You</Heading>
            <SubHeading>Create Earn Repeat</SubHeading>
            <ModalComponent
            text="SignUp"
            variant="primary"
            />
            <ModalComponent
            text="Login"
            variant="danger"
            />
        </HeaderContainer>

        </Container>

    </HeroComponent>
};
export default Hero;