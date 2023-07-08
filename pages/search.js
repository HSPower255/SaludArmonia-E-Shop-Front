import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { MainContainer, SearchInput } from "@/styles/SearchPageStyles"
import Center from "@/components/styledcomponents/StyledDiv"
import { useEffect, useState } from "react"
import axios from "axios"
import ProductsGrid from "@/components/ProductsGrid"
import StyledSpinner from "@/components/Spinner"

const SearchPage = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [phrase, setPhrase] = useState("")
    const [products, setProducts] = useState([])
    let timeoutId

    useEffect(() => {
        clearTimeout(timeoutId)
        if (phrase.length > 0) {
            setIsLoading(true)
            timeoutId = setTimeout(() => {
                searchProducts()
            }, 500)
        } else {
            setProducts([])
        }
        return () => {
            clearTimeout(timeoutId)
        }
    }, [phrase])

    const searchProducts = () => {
        axios.get(`/api/products?phrase=${encodeURIComponent(phrase)}`)
            .then((response) => {
                setProducts(response.data)
                setIsLoading(false)
            })
    }

    return (
        <>
            <Header />
            <Center>
                <MainContainer>
                    <SearchInput
                        autoFocus
                        value={phrase}
                        onChange={e => setPhrase(e.target.value)}
                        placeholder="Buscar productos..."
                    />
                    {isLoading ? (
                        <StyledSpinner />
                    ) : (
                        <>
                            {phrase !== '' && products.length === 0 && (
                                <h2>No se encontraron productos con este nombre.</h2>
                            )}
                            {products.length > 0 && (
                                <ProductsGrid products={products} />
                            )}
                        </>
                    )}
                </MainContainer>
            </Center>
            <Footer />
        </>
    )
}

export default SearchPage