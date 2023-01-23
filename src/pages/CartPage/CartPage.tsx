import {Grid, Typography } from '@mui/material'
import CartProductsList from 'components/CartProductsList/CartProductsList'
import CartTotal from 'components/CartTotal/CartTotal'
import CartProductsListItemExtended from 'components/CartProductsList/CartProductsListItemExtended'
import { useAppSelector } from 'redux/hooks'
import { Link } from 'react-router-dom'

const CartPage = () => {
    const productsInCart = useAppSelector((state) => state.productsInCart)
    return (
        <div>
            <Typography
                variant="h4"
                style={{
                    margin: ' 30px 0px',
                }}
            >
                Cart
            </Typography>
            <Grid container spacing={4}>

            <CartProductsList 
            productsInCart ={productsInCart}
            CartItem={CartProductsListItemExtended}
            />
           
          </Grid>
          <CartTotal productsInCart={productsInCart}/>  
          <Link to="/checkout">Proceed to checkout</Link>
        </div>
    )
}
export default CartPage
