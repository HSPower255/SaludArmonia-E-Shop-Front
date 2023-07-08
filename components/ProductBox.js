import { WhiteBox, Name, ProductInfoBox, PriceRow, Price, } from "@/styles/ProductBoxStyles"
import Button from "@/components/styledcomponents/StyledButton"
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useContext } from "react"
import { CartContext } from "./CartContext"

const ProductBox = ({ _id, name, price, images }) => {
  const { addProduct } = useContext(CartContext)
  const url = `/product/${_id}`

  return (
    <div>
      <WhiteBox href={url}>
        <div>
          <img src={images?.[0]} alt="Imágen del producto" />
        </div>
      </WhiteBox>
      <ProductInfoBox>
        <Name href={url}>{name}</Name>
        <PriceRow>
          <Price>
            $ {price}
          </Price>
          <Button onClick={() => addProduct(_id)} primary={+true} outline={+true}>
            <AiOutlineShoppingCart size={15} />
            Comprar
          </Button>
        </PriceRow>
      </ProductInfoBox>
    </div>
  )
}

export default ProductBox