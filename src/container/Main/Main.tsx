import Container from '@mui/material/Container'
import CartPage from 'pages/CartPage/CartPage'
import AboutPage from 'pages/AboutPage/AboutPage'
import PaymentPage from 'pages/PaymentPage/PaymentPage'
import ShippingPage from 'pages/ShippingPage/ShippingPage'
import Home from 'pages/Home/Home'
import { Route, Routes } from 'react-router-dom'


type Props = {
  addProductToCart:(id:number,count:number)=>void
  productsInCart: {
    [id: number]: number
}

}

const Main = ({addProductToCart, productsInCart
}: Props) => {
  return (
    <main
    style={{
        padding:'40px 0',
    }}>
    <Container maxWidth='lg'>
      <Routes>
        <Route 
        path="/"
        element={< Home addProductToCart={addProductToCart} />}
        />
        <Route 
        path="cart"
        element={<CartPage productsInCart={productsInCart}
          />}
        />
        <Route 
        path="about"
        element={<AboutPage/>}
        />
        <Route 
        path="payment"
        element={<PaymentPage/>}
        />
         <Route 
        path="shipping"
        element={<ShippingPage/>}
        />
      </Routes>
    <Home addProductToCart={addProductToCart}/>
    </Container>
    </main>
  )
}

export default Main