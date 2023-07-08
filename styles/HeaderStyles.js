import styled from "styled-components"

export const BaseMenuLink = styled.a`
padding: 1rem 1rem;
position: relative;
-webkit-background-clip: text;
-webkit-text-fill-color: #FFF;
transition: all 0.3s ease-in-out;
text-decoration: none;
}`

export const SearchMobile = styled(BaseMenuLink)`
  display: ${({ isMobile }) => (isMobile ? 'inline-block' : 'flex')};
`

export const MenuLink = styled(BaseMenuLink)`
&:before {
  content: '';
  background: #54b3d6;
  display: block;
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 0;
  height: 3px;
  transition: all 0.3s ease-in-out;
  }
  
  &:hover {
  background-position: 0;
  }
  
  &:hover::before {
  width:100%;
  }`

export const Nav = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding: 0 2rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  background: white;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  background-color: #222;
  @media (max-width: 768px) {
    justify-content: space-between;
  }`

export const Logo = styled.a`
  padding: 1rem 0;
  color: white;
  text-decoration: none;
  font-weight: 800;
  font-size: 2rem;
  span {
    font-weight: 300;
    font-size: 1.3rem;
  }`

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isopen }) => (isopen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }`

export const Wrapper = styled.div`
  display: flex;
  gap: 10px;`

export const Lines = styled.div`
  display: none;
  cursor: pointer;
  color: white;
  @media (max-width: 768px) {
    display: flex;
  }`

export const Search = styled.a`
  display: none;
  cursor: pointer;
  color: white;
  @media (max-width: 768px) {
  display: flex;
}`

export const SearchLink = styled.a`
display: flex;
color: white;
@media (max-width: 768px) {
display: none;
}`
