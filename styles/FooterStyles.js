import styled from 'styled-components'

export const StyledFooter = styled.footer`
position: relative;
bottom: 0;
background-color: #222;
box-sizing: border-box;
width: 100%;
text-align: left;
box-shadow: 0px -5px 10px rgba(0, 0, 0, 0.6);
padding: 30px;
margin-top: 80px;

@media (max-width: 768px) {
    text-align: center;
}`

export const FooterRight = styled.div`
  float: right;
  max-width: 180px;
  @media (max-width: 768px) {
	float: none;
	margin: 0 auto 20px;
}`

export const LinksRight = styled.a`
display: inline-block;
width: 35px;
height: 35px;
border-radius: 5px;

font-size: 30px;
color: #ffffff;
text-align: center;
line-height: 35px;

margin-left: 5px;
transition: all 0.3s ease-in-out;

&:hover {
  color: #54b3d6;
}`

export const FooterLeft = styled.div`
color:  #8f9296;
font-size: 14px;
margin: 0;`

export const LinksContainer = styled.div`
  display: flex;
  gap: 10px;
  @media (max-width: 768px) {
    justify-content: center;
}`

export const LinksLeft = styled.a`
  color: #ffffff;
  text-decoration: none;
  font-size:18px;
  font-weight: bold;
  color:  #ffffff;
  margin: 0 0 10px;
  padding: 0;
  @media (max-width: 768px) {
    font-size: 15px;
}`