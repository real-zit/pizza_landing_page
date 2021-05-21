import FeaturePic from "../../assests/pizz.jpg";
import styled from "styled-components";

const Feature = () => {
  return (
    <FeatureContainer>
      <h1>Pizza of the Day</h1>
      <p>The Best Pizza of the Day</p>
      <FeatureButton>Order Now</FeatureButton>
    </FeatureContainer>
  );
};

export default Feature;
const FeatureContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${FeaturePic});
  height: 100vh;
  max-height: 500px;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  padding: 0 1rem;

  h1: {
    font-size: 2.5rem;
    font-weight: 600;
  }

  p: {
    margin-bottom: 2rem;
    font-size: 1rem;
  }
`;

const FeatureButton = styled.button`
  font-size: 1, 4rem;
  padding: 0.6rem 3rem;
  border: none;
  color: #000;
  transition: 0.2s ease-out;
  margin: 2rem;
  border-radius: 1rem;
  font-weight: 600;

  &:hover {
    background: #ffc500;
    transition: 0.2s ease-in-out;
    cursor: pointer;
    color: #fff;
  }
`;
