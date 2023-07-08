import styled from "styled-components"
import Center from "@/components/styledcomponents/StyledDiv"
import ProductsGrid from "@/components/ProductsGrid"

export const MainContainer = styled.div`
  min-height: 80vh; `

const Title = styled.h2`
  font-size: 2rem;
  margin: 30px 0 20px;
  font-weight: bold;`

const NewProducts = ({ products }) => {
  return (
    <Center>
      <MainContainer>
        <Title>Agregados recientemente...</Title>
        <ProductsGrid products={products} />
      </MainContainer>
    </Center>
  )
}

export default NewProducts