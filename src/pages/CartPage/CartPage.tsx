import {Grid, Typography } from '@mui/material'
import CartProductsList from 'components/CartProductsList/CartProductsList'
import CartTotal from 'components/CartTotal/CartTotal'
import CartProductsListItemExtended from 'components/CartProductsList/CartProductsListItemExtended'
type Props = {
    productsInCart: {
        [id: number]: number
    }
    removeProductFromCart:(id:number)=>void
    changeProductQuantity:(id:number,count:number)=>void

}
const CartPage = ({
    productsInCart,
    removeProductFromCart,
    changeProductQuantity
}: Props) => {
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

            <CartProductsList productsInCart ={productsInCart}
            CartItem={CartProductsListItemExtended}
            removeProductFromCart={removeProductFromCart}
            changeProductQuantity={changeProductQuantity}
            />
           
          </Grid>
          <CartTotal productsInCart={productsInCart}/>  
        </div>
    )
}
export default CartPage
