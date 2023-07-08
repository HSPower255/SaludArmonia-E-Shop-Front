import { ClipLoader } from 'react-spinners'
import { styled } from 'styled-components'

const StyledSpinner = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;`

const Spinner = () => {
    return (
        <StyledSpinner>
            <ClipLoader />
        </StyledSpinner>
    )
}

export default Spinner