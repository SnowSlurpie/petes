import styled from 'styled-components';
import ImgBg from '../../images/pizza-1.jpg';


// container for the hero
export const HeroContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${ImgBg});
  height: 100vh;
  background-position: center;
  background-size: cover;
`;

// styings for contents of the hero
export const HeroContent = styled.div`
  height: calc(100vh - 80px);
  max-height: 100%;
  width: 100vw;
  padding: 0rem calc((100vw - 1300px) / 2);
`;

// stylings for HeroP, HeroH1 and the buttonso they are oriented correctly
export const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0 1rem;
  width: 650px;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;
  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

// stylings for phone numeber line
export const HeroH1 = styled.h1`
  font-size: clamp(2.5rem, 10vw, 2rem);
  font-family: Cooper Black, Serif;
  margin-bottom: 3rem;

  letter-spacing: 3px;
`;

// initial tag line stylings
export const HeroP = styled.p`
  font-family: Cooper Black, Serif;
  font-size: clamp(2.5rem, 10vw, 2rem);
  box-shadow: 3px 5px #e5d5ad;
  margin-bottom: 2rem;
`;

// Button stylings
export const HeroBtn = styled.button`
  font-size: 1.4rem;
  padding: 1rem 4rem;
  font-family: Cooper Black, Serif;
  border: none;
  background: #ca1409;
  color: #000000;
  transition: 0.2s ease-out;

  &:hover {
    background: #09bfca;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;