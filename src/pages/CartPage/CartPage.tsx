import { Typography } from '@mui/material'
import CartProductsList from 'components/CartProductsList/CartProductsList'
import CartTotal from 'components/CartTotal/CartTotal'
type Props = {
    productsInCart: {
        [id: number]: number
    }
 
}
const CartPage = ({
    productsInCart,

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
            <Grid container spaising={4}></Grid>
            <CartProductsList productsInCart ={productsInCart}/>
            <CartTotal productsInCart={productsInCart}/>
        </div>
    )
}
export default CartPage
