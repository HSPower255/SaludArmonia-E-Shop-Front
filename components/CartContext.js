import { createContext, useEffect, useState } from "react"
import { toast } from "react-hot-toast"
import { useRouter } from "next/router"

export const CartContext = createContext({})

const CreateContextProvider = ({ children }) => {
    const ls = typeof window !== "undefined" ? window.localStorage : null
    const [cartProducts, setCartProducts] = useState([])
    const router = useRouter()

    useEffect(() => {
        if (cartProducts?.length > 0) {
            ls?.setItem('cart', JSON.stringify(cartProducts))
        }
    }, [cartProducts])

    useEffect(() => {
        if (ls && ls.getItem('cart')) {
            setCartProducts(JSON.parse(ls.getItem('cart')))
        }
    }, [ls])

    const addProduct = (productId) => {
        setCartProducts(prev => [...prev, productId])
        if (router.pathname !== '/cart') {
            toast.success('Producto agregado al carro!')
        }
    }

    const removeProduct = (productId) => {
        setCartProducts(prev => {
            const idPosition = prev.indexOf(productId)
            if (prev.length === 1) ls.removeItem('cart')
            if (idPosition !== -1) {
                return prev.filter((_, index) => index !== idPosition)
            }
            return prev
        })
    }

    return (
        <CartContext.Provider value={{ cartProducts, setCartProducts, addProduct, removeProduct }}>
            {children}
        </CartContext.Provider>
    )
}

export default CreateContextProvider