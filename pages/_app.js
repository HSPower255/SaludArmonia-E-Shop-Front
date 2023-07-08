import CreateContextProvider from "@/components/CartContext"
import { createGlobalStyle } from "styled-components"
import { Toaster } from 'react-hot-toast'
import { useEffect, useState } from "react"
import Head from "next/head"

const GlobalStyles = createGlobalStyle`
  body{
    background-color: #eee;
    padding:0;
    margin:0;
    font-family: sans-serif;
 }`

export default function App({ Component, pageProps }) {
  const [isHydrating, setIsHydrating] = useState(true)

  useEffect(() => {
    setIsHydrating(false)
  }, [])

  return (
    <>
      <Head>
        <title>SaludArmonia - Shop</title>
      </Head>
      <GlobalStyles />
      <CreateContextProvider>
        {isHydrating ? null : (
          <>
            <Component {...pageProps} />
            <Toaster />
          </>
        )}
      </CreateContextProvider>
    </>
  )
}
