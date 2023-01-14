import productsArray, {
    getProductsObject,
    ProductsProps,
} from 'components/Products/productsArray'
import CartProductsListItem from 'components/CartProductsList/CartProductsListItem'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: ProductsProps
    }
    CartItem?: any
}
const CartProductsList = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
    CartItem= CartProductsListItem,
}: Props) => {
    return (
        <div>
            {Object.keys(productsInCart).map((productId) => (
                <CartItem
                key={productId}
                product={productsObject[parseInt(productId)]}
                productCount={productsInCart[parseInt(productId)]}
            />

            ))}
        </div>
    )
}
export default CartProductsList