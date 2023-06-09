import React from "react";
import styled from "styled-components";

const Herosection = () => {
   return (
    <Hero>
         <Lefthero></Lefthero>
         <Righthero>
            <Texthold>
            <h2>#1 advocate for rural and 
               low income African woman</h2>
            <h5>we envision a world without poor women 
               a women-empowered, women productive and
            women-emancipated world.</h5>
               <Button>Donate Now</Button>
            </Texthold>
         </Righthero>
    </Hero>
        
   )
};

export default Herosection;

const Hero = styled.div`
width: 100%;
height: 90vh;
background-color: white;
display: flex;
justify-content: center;
align-items: center;
`;

const Lefthero = styled.div`
  width: 50%;
  height: 80vh;
  background-image: url(/women.jpg);
  background-position: center;
//   background-repeat: no-repeat;
  background-size: cover;
  background-color: pink;
`;

const Righthero = styled.div`
width: 50%;
height: 80vh;
background-color: teal;
display: flex;
// justify-content: center;
align-items: flex-start;
`;

const Texthold = styled.div`
width: 50%;
  height: 60%;
  color: white;
  margin-top: 100px;
  margin-left: 50px;
  /* background-color: antiquewhite; */
`;

const Button = styled.div`
width: 100px;
border-radius: 3px;
height: 30px;
color: white;
border: 1px solid white;
background-color: transparent;
display: flex;
justify-content: center;
align-items: center;

:hover{
   width: 120px;
   // height: 60%;
   background-color: black;
   color: white;
   cursor: pointer;
   border: 1px solid black;
}
`;