import { StyledFooter, FooterRight, FooterLeft, LinksContainer, LinksRight, LinksLeft } from '@/styles/FooterStyles'
import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineWhatsApp, AiOutlineMail, AiOutlineLinkedin } from 'react-icons/ai'
import Center from './styledcomponents/StyledDiv'

const Footer = () => {
    return (
        <StyledFooter>
            <Center>
                <FooterRight >
                    <LinksRight href="#">
                        <AiOutlineInstagram />
                    </LinksRight>
                    <LinksRight href="#">
                        <AiOutlineFacebook />
                    </LinksRight>
                    <LinksRight href="#">
                        <AiOutlineWhatsApp />
                    </LinksRight>
                    <LinksRight href="#">
                        <AiOutlineMail />
                    </LinksRight>
                </FooterRight>

                <FooterLeft >
                    <LinksContainer>
                        |
                        <LinksLeft href={'/'}>Inicio</LinksLeft>
                        |
                        <LinksLeft href={'/products'}>Productos</LinksLeft>
                        |
                        <LinksLeft href={'/categories'}>Categorías</LinksLeft>
                        |
                        <LinksLeft href={'/cart'}>Carro</LinksLeft>
                        |
                    </LinksContainer>
                    • Página creada por Santiago Tourn
                </FooterLeft>
            </Center>
        </StyledFooter>
    )
}

export default Footer
