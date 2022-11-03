import styled from 'styled-components';

// stylings page for the navbar

// stylings for navbar itself
export const Nav = styled.div`
padding: 16px 24px;
display:flex;
flex-direction: row;
object-fit:contain;
`;

// logo stylings
export const Logo = styled.div`
display:flex;
flex-direction: row;
object-fit:contain;
justify-content: left;
`;

// stylings for hours to appear in the right side of the top
export const Hours = styled.div`
color: #fff;
font-size: 1rem;
display: flex;
flex: 4;
justify-content: right;
text-decoration: none;
text-align: left;
font-family: Cooper Black, Serif;

@media screen and (max-width: 400px) {
  position: absolute;
  top: 10px;
  left: 25px;
}
`;

// Stylings for 'Pete's Pizza & Grill' line 
export const Name = styled.a`
color: #fff;
font-size: 6rem;
display: flex;
text-decoration: none;
justify-content: center;
text-align: center;
font-family: Cooper Black, Serif;

@media screen and (max-width: 400px) {
  position: absolute;
  top: 10px;
  left: 25px;
}
`;

// Stylings for the address under the name
export const Address = styled.a`
display: flex;
text-decoration: none;
text-align: center;
justify-content: center;
color: #fff;
font-family: Cooper Black, Serif;
`;

