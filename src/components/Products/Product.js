import styled from "styled-components";

const Product = ({ heading, data }) => {
  return (
    <ProductContainer>
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductWrapper>
        {data.map((product, index) => {
          return (
            <ProductCard key={index}>
              <ProductImg src={product.img} alt={product.alt} />
              <ProductInfo>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductDesc>{product.desc}</ProductDesc>
                <ProductPrice>{product.price}</ProductPrice>
                <ProductButton>{product.button}</ProductButton>
              </ProductInfo>
            </ProductCard>
          );
        })}
      </ProductWrapper>
    </ProductContainer>
  );
};

export default Product;

const ProductContainer = styled.div`
  width: 100vw;
  padding: 5rem 4rem;
  background: #150f0f;
  color: #fff;
  min-height: 100vh;
`;
const ProductsHeading = styled.h1`
  font-size: 1.9rem;
  font-weight: 400;
  margin-bottom: 5rem;
  text-align: center;
`;
const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

const ProductCard = styled.div`
  margin: 0 2rem;
  line-height: 2;
  width: 300px;
`;
const ProductImg = styled.img`
  height: 300px;
  box-shadow: 8px 8px #fdc500;
`;

const ProductTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
`;
const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
`;

const ProductPrice = styled.p`
  margin-bottom: 1rem;
  font-size: 2rem;
`;

const ProductDesc = styled.p`
  margin-bottom: 1rem;
`;

const ProductButton = styled.button`
  font-size: 1rem;
  padding: 1rem 2rem;
  border: none;
  background: #e31837;
  color: #fff;
  border-radius: 1rem;
  transition: 0.2s ease-output;

  &:hover {
    background: #ffc500;
    transition: 0.2s ease-in-out;
    cursor: pointer;
    color: #000;
  }
`;
