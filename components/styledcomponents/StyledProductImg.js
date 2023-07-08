import styled from "styled-components"
import { useState } from "react"

const Image = styled.img`
    max-width: 100%;
    max-height: 100%;`

const BigImage = styled.img`
  max-width: 100%;
  max-height: 200px;`

const ImageButtons = styled.div`
    display: flex;
    gap: 10px;
    flex-grow: 0;
    margin-top: 10px;`

const ImageButton = styled.div`
    border: 2px solid #ccc;
    ${props => props.active ? `
      border-color: #ccc;
    ` : `
      border-color: transparent;
    `}
    height: 40px;
    padding: 2px;
    cursor: pointer;
    border-radius: 5px;`

const BigImageWrapper = styled.div`
  text-align: center;`

const ProductImg = ({ images }) => {
    const [activeImage, setActiveImage] = useState(images?.[0])

    return (
        <>
            <BigImageWrapper>
                <BigImage src={activeImage} />
            </BigImageWrapper>
            <ImageButtons>
                {images.map(img => (
                    <ImageButton
                        key={img}
                        active={img ? activeImage : 0}
                        onClick={() => setActiveImage(img)}>
                        <Image
                            src={img}
                            alt="Imágen del producto"
                        />
                    </ImageButton>
                ))}
            </ImageButtons>
        </>
    )
}

export default ProductImg