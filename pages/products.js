import Header from "@/components/Header"
import ProductsGrid from "@/components/ProductsGrid"
import Center from "@/components/styledcomponents/StyledDiv"
import mongooseConnect from "@/lib/mongoose"
import { Product } from "@/models/ProductModel"
import { Title } from "@/components/styledcomponents/StyledTitle"
import Footer from "@/components/Footer"
import styled from "styled-components"

const MainContainer = styled.div`
  min-height: 100vh; `

const ProductsPage = ({ products }) => {
    return (
        <>
            <Header />
            <Center>
                <MainContainer>
                    <Title>Todos los Productos</Title>
                    <ProductsGrid products={products} />
                </MainContainer>
            </Center>
            <Footer />
        </>
    )
}

export default ProductsPage

export const getServerSideProps = async () => {
    await mongooseConnect()
    const products = await Product.find({}, null, { sort: { '_id': -1 } })
    return {
        props: {
            products: JSON.parse(JSON.stringify(products))
        }
    }
}