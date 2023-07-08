import { Bg, Title, Description, ColumnsWrapper, Column, ButtonsWrapper } from "@/styles/FeaturedStyles"
import Center from "@/components/styledcomponents/StyledDiv"
import ButtonLink from "./styledcomponents/StyledLink"
import Button from "./styledcomponents/StyledButton"
import { useContext } from "react"
import { CartContext } from "./CartContext"
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { RevealWrapper } from "next-reveal"

const Featured = ({ featuredProduct }) => {
  const { addProduct } = useContext(CartContext)

  const addFeaturedToCart = () => {
    addProduct(featuredProduct._id)
  }

  return (
    <Bg>
      <Center>
        <RevealWrapper origin="left">
          <ColumnsWrapper>
            <Column>
              <div>
                <Title>{featuredProduct.name}</Title>
                <Description>{featuredProduct.description}</Description>
                <ButtonsWrapper>
                  <ButtonLink href={`/product/${featuredProduct._id}`} outline={+true} white={1}>Más...</ButtonLink>
                  <Button onClick={addFeaturedToCart}>
                    <AiOutlineShoppingCart size={15} />
                    Agregar al carro
                  </Button>
                </ButtonsWrapper>
              </div>
            </Column>
            <Column>
              <img src={featuredProduct.images?.[0]} alt="Imágen del producto destacado" />
            </Column>
          </ColumnsWrapper>
        </RevealWrapper>
      </Center>
    </Bg>
  )
}

export default Featured