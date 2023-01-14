import productsArray, {
    getProductsObject,
    ProductsProps,
} from 'components/Products/productsArray'
import CartProductsList from 'components/CartProductsList/CartProductsList'
import CartTotal from 'components/CartTotal/CartTotal'

type Props = {
    productsInCart:{
        [id:number]:number
    }
    productsObject?:{
        [id:number]:ProductsProps
    }
}
const CartHeader = ({productsInCart,
    productsObject = getProductsObject(productsArray),
}: Props) => {
    return (
    <div> 
        <div> 
        {Object.keys(productsInCart).map((productId) => (
                <div key={productId}>
                    {productsObject[parseInt(productId)].title} :
                    {productsInCart[parseInt(productId)]}
                </div>

    ))}
    </div>
    
    <CartTotal productsInCart={productsInCart}/>
    </div>

    )}

export default CartHeader
