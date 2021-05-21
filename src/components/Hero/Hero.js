import { useState } from "react";
import styled from "styled-components";
import ImgBg from "../../assests/bg.jpg";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <HeroContainer>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroContent>
        <HeroH1> Greatest Pizza Ever</HeroH1>
        <Herop> Ready in 20 minutes</Herop>
        <HeroBtn>Place Order</HeroBtn>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;

const HeroContainer = styled.div`
  background: url(${ImgBg});
  height: 100vh;
  width: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 6rem;
  padding: 1rem;
  line-height: 2rem;
  color: #fff;
`;
const HeroH1 = styled.h1`
  font-weight: 600;
  font-size: 3.2rem;
  letter-spacing: 3px;
  padding: 1rem;
  margin-top: 3rem;
  line-height: 1.1.rem;

  @media screen and (max-width: 992px) {
    width: 80%;
    font-size: 2rem;
    text-align: center;
  }
`;
const Herop = styled.p`
  font-size: 1.4rem;
  padding: 1.2rem;
  line-height: 1.1.rem;
  font-weight: 500;
`;
const HeroBtn = styled.button`
  font-size: 1.1rem;
  font-weight: 500;
  padding: 1rem 2rem;
  border: none;
  color: #fff;
  text-align: center;
  background: #e21837;
  transition: 0.2s ease-out;
  border-radius: 0.8rem;

  &:hover {
    background: #ffc500;
    cursor: pointer;
    color: #000;
    transition: 0.2s ease-out;
  }
`;
