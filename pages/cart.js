import { ColumnsWrapper, Box, ProductInfoCell, ProductImageBox, QuantityLabel, CityHolder, MainContainer } from "@/styles/CartStyles"
import Header from "@/components/Header"
import Center from "@/components/styledcomponents/StyledDiv"
import Button from "@/components/styledcomponents/StyledButton"
import { useContext, useEffect, useState } from "react"
import { CartContext } from "@/components/CartContext"
import axios from "axios"
import Table from "@/components/styledcomponents/StyledTable"
import Input from "@/components/styledcomponents/StyledInput"
import Footer from "@/components/Footer"
import { RevealWrapper } from "next-reveal"
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'


const CartPage = () => {
  const [products, setProducts] = useState([])
  const { cartProducts, addProduct, removeProduct } = useContext(CartContext)

  useEffect(() => {
    if (cartProducts.length > 0) {
      axios.post('/api/cart', { ids: cartProducts }).then(response => { setProducts(response.data) })
    } else {
      setProducts([])
    }
  }, [cartProducts])

  const addOne = (id) => {
    addProduct(id)
  }

  const removeOne = (id) => {
    removeProduct(id)
  }

  const totalPrice = cartProducts.reduce((total, productId) => {
    const price = products.find(product => product._id === productId)?.price || 0
    return total + price
  }, 0)

  return (
    <>
      <MainContainer>
        <Header />
        <Center>
          <ColumnsWrapper>
            <RevealWrapper>
              <Box>
                <h2>Productos en el Carro</h2>
                {!cartProducts?.length ? (
                  <div>El carro de compras está vacío</div>
                ) : (
                  <Table>
                    <thead>
                      <tr>
                        <th>Productos</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.map(product => (
                        <tr key={product._id}>
                          <ProductInfoCell>
                            <ProductImageBox>
                              <img src={product.images[0]} alt="Imágen del producto" />
                            </ProductImageBox>
                            {product.title}
                          </ProductInfoCell>
                          <td>
                            <Button
                              onClick={() => removeOne(product._id)}>
                              <AiOutlineMinus />
                            </Button>
                            <QuantityLabel>
                              {cartProducts.filter(id => id === product._id).length}
                            </QuantityLabel>
                            <Button
                              onClick={() => addOne(product._id)}>
                              <AiOutlinePlus />
                            </Button>
                          </td>
                          <td>
                            $ {cartProducts.filter(id => id === product._id).length * product.price}
                          </td>
                        </tr>
                      ))}
                      <tr>
                        <td></td>
                        <td>Total:</td>
                        <td>$ {totalPrice}</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                    </tbody>
                  </Table>
                )}
              </Box>
            </RevealWrapper>
            {!!cartProducts?.length && (
              <RevealWrapper>
                <Box>
                  <h2>Datos de pago</h2>
                  <Input type="text"
                    placeholder="Nombre"
                    name="name"
                  />
                  <Input type="text"
                    placeholder="Email"
                    name="email"
                  />
                  <CityHolder>
                    <Input type="text"
                      placeholder="Ciudad"
                      name="city"
                    />
                    <Input type="text"
                      placeholder="Código Postal"
                      name="postalCode"
                    />
                  </CityHolder>
                  <Input type="text"
                    placeholder="Calle"
                    name="streetAddress"
                  />
                  <Input type="text"
                    placeholder="País"
                    name="country"
                  />
                  <Button black block>
                    Pagar
                  </Button>
                </Box>
              </RevealWrapper>
            )}
          </ColumnsWrapper>
        </Center>
      </MainContainer>
      <Footer />
    </>
  )
}

export default CartPage