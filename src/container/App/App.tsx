import Header from 'container/Header/Header'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import Main from'container/Main/Main'
import {useState} from 'react'

type CartDataProps = {
    totalCount:number
    totalPrice:number
}
const App = () => {
    const[cartData, setCartData]=useState<CartDataProps>({
        totalCount:0,
    totalPrice:0,
    })
    const addProductToCart = (total:number, price:number) => {
        setCartData((prevState:CartDataProps)=>({
            totalCount: prevState.totalCount + total, 
            totalPrice: prevState.totalPrice + total * price,
        }))
    }
    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header cartData={cartData}/> 
            <button onClick={()=> addProductToCart(5,500)}>Add to cart</button>
            <Main />
        </StyledEngineProvider>
    )

}
export default App