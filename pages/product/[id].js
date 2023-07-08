import { ColWrapper, PriceRow, Price, MainContainer, ProductDescription } from "@/styles/ProductPageStyles"
import { WhiteBox } from "@/components/styledcomponents/StyledWhiteBox"
import Header from "@/components/Header"
import Center from "@/components/styledcomponents/StyledDiv"
import { Title } from "@/components/styledcomponents/StyledTitle"
import mongooseConnect from "@/lib/mongoose"
import { Product } from "@/models/ProductModel"
import ProductImg from "@/components/styledcomponents/StyledProductImg"
import { useContext } from "react"
import { CartContext } from "@/components/CartContext"
import Button from "@/components/styledcomponents/StyledButton"
import { primary } from "@/lib/colors"
import Footer from "@/components/Footer"
import { AiOutlineShoppingCart } from 'react-icons/ai'

const ProductPage = ({ product }) => {
    const { addProduct } = useContext(CartContext)

    return (
        <>
            <Header />
            <Center>
                <MainContainer>
                    <ColWrapper>
                        <WhiteBox>
                            <ProductImg images={product.images} />
                        </WhiteBox>
                        <div>
                            <Title>{product.name}</Title>
                            <ProductDescription>{product.description}</ProductDescription>
                            <PriceRow>
                                <div>
                                    <Price>$ {product.price}</Price>
                                </div>
                                <div>
                                    <Button outline={+true} primary={primary ? 1 : 0} onClick={() => addProduct(product._id)}>
                                        <AiOutlineShoppingCart size={15} />
                                        Comprar
                                    </Button>
                                </div>
                            </PriceRow>
                        </div>
                    </ColWrapper>
                </MainContainer>
            </Center>
            <Footer />
        </>
    )
}

export default ProductPage

export const getServerSideProps = async (context) => {
    await mongooseConnect()
    const { id } = context.query
    const product = await Product.findById(id)
    return {
        props: {
            product: JSON.parse(JSON.stringify(product))
        }
    }
}