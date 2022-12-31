import Header from 'container/Header/Header'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import Main from'container/Main/Main'
import {useState} from 'react'



type productsInCart = {
    [id:number]:number
}

const App = () => {
    const [productsInCart, setProductsInCart] = useState<productsInCart>({
        1: 5,
        2: 2,
    })

    const addProductToCart = () => {}

    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header productsInCart={productsInCart} />
            <Main addProductToCart={addProductToCart} />
        </StyledEngineProvider>
    )
}



export default App