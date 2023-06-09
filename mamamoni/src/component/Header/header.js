import React from "react";
import styled from "styled-components"

const Header = () =>{
    return (
        <Container>
            <Headerwrap> 
                <LeftNav>
                    <img src="/mamamoni.png"/>
                </LeftNav>
                <RightNav>
                    <nav>Home</nav>
                    <nav>About</nav>
                    <nav>Our programs</nav>
                    <nav>Become a Volunteer</nav>
                    <nav>Blogs & Events</nav>
                    <nav>Contact</nav>
                    <nav>Gallery</nav>
                </RightNav>
            </Headerwrap>
           
        </Container>

    )
};

export default Header;

const Container = styled.div`
width: 100%;
height: 10vh;
/* background-color: darkgoldenrod; */
display: flex;
justify-content: center;
align-items: center;
`;

const Headerwrap = styled.div`
width: 80%;
height: 70px;
/* background-color: whitesmoke; */
display: flex;
justify-content: space-between;
align-items: center;
`;

const LeftNav = styled.div`
height: 60px;
width: 130px;
// background-color: aqua; 

img{
   height: 70px;
   width: 130px; 
}
`;

const RightNav = styled.div`
width: 70%;
/* background-color: yellow; */
display: flex;
justify-content: space-between;
align-items: center;
cursor: pointer;
`;