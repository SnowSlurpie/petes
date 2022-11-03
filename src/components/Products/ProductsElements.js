import styled from 'styled-components';


// menu stylings page

// container stylings for the menu section
export const ProductsContainer = styled.div`
  /* width: 100vw; */
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: #f0b82a;
  color: #eeeee;
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;


// stylings for each card for each menu page
export const ProductCard = styled.div`
  margin: 0 2rem;
  line-height: 2;
  width: 948px;
`;

// stylings for the pdf images
export const ProductImg = styled.img`
  height: 100%;
  min-width: 300px;
  max-width: 100%;
  box-shadow: 8px 8px #e5d5ad;
`;

// stylings for the heading aka 'view our menu'
export const ProductsHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
`;
