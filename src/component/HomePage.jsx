import React from "react";
import styled from "styled-components";
import bannerImage from "./../images/banner.jpg";

const Container = styled.div`
  padding: 20px;
`;

const Banner = styled.div`
  background-image: url(${bannerImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: auto; /* Set the desired height */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  padding: 40px 0; /* Adjust padding as needed */
`;

const BannerText = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

const ProductCard = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ProductImage = styled.img`
  width: 100%;
  border-radius: 5px;
`;

const ProductTitle = styled.h2`
  font-size: 18px;
  margin: 10px 0;
`;

const ProductPrice = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

const HomePage = () => {
  return (
    <Container>
      <Banner>
        <BannerText>Welcome to Our Phone Store</BannerText>
        <p>Find the best deals on your favorite products!</p>
      </Banner>
      <ProductGrid>
        <ProductCard>
          <ProductImage
            src="https://m.media-amazon.com/images/I/61qJX973fRL._AC_UF894,1000_QL80_.jpg"
            alt="Product"
          />
          <ProductTitle>Product 1</ProductTitle>
          <ProductPrice>$19.99</ProductPrice>
        </ProductCard>
        <ProductCard>
          <ProductImage
            src="https://i.ebayimg.com/images/g/XqQAAOSwZbJkAUnm/s-l400.jpg"
            alt="Product"
          />
          <ProductTitle>Product 2</ProductTitle>
          <ProductPrice>$24.99</ProductPrice>
        </ProductCard>
        <ProductCard>
          <ProductImage
            src="https://i.ebayimg.com/images/g/nTMAAOSwJyxj20jZ/s-l1200.webp"
            alt="Product"
          />
          <ProductTitle>Product 3</ProductTitle>
          <ProductPrice>$29.99</ProductPrice>
        </ProductCard>
        <ProductCard>
          <ProductImage
            src="https://www.bell.ca/Styles/images/iPhone_15_Pro_Blue_Titanium_lrg2.png"
            alt="Product"
          />
          <ProductTitle>Product 3</ProductTitle>
          <ProductPrice>$29.99</ProductPrice>
        </ProductCard>
        <ProductCard>
          <ProductImage
            src="https://i.ebayimg.com/images/g/XqQAAOSwZbJkAUnm/s-l400.jpg"
            alt="Product"
          />
          <ProductTitle>Product 3</ProductTitle>
          <ProductPrice>$29.99</ProductPrice>
        </ProductCard>
        <ProductCard>
          <ProductImage
            src="https://m.media-amazon.com/images/I/61qJX973fRL._AC_UF894,1000_QL80_.jpg"
            alt="Product"
          />
          <ProductTitle>Product 1</ProductTitle>
          <ProductPrice>$19.99</ProductPrice>
        </ProductCard>
        <ProductCard>
          <ProductImage
            src="https://i.ebayimg.com/images/g/XqQAAOSwZbJkAUnm/s-l400.jpg"
            alt="Product"
          />
          <ProductTitle>Product 2</ProductTitle>
          <ProductPrice>$24.99</ProductPrice>
        </ProductCard>
        <ProductCard>
          <ProductImage
            src="https://i.ebayimg.com/images/g/nTMAAOSwJyxj20jZ/s-l1200.webp"
            alt="Product"
          />
          <ProductTitle>Product 3</ProductTitle>
          <ProductPrice>$29.99</ProductPrice>
        </ProductCard>
        <ProductCard>
          <ProductImage
            src="https://www.bell.ca/Styles/images/iPhone_15_Pro_Blue_Titanium_lrg2.png"
            alt="Product"
          />
          <ProductTitle>Product 3</ProductTitle>
          <ProductPrice>$29.99</ProductPrice>
        </ProductCard>
        <ProductCard>
          <ProductImage
            src="https://i.ebayimg.com/images/g/XqQAAOSwZbJkAUnm/s-l400.jpg"
            alt="Product"
          />
          <ProductTitle>Product 3</ProductTitle>
          <ProductPrice>$29.99</ProductPrice>
        </ProductCard>
      </ProductGrid>
    </Container>
  );
};

export default HomePage;
