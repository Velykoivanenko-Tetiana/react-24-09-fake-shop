import  {
    getProductsObject,
    ProductsProps,
} from 'components/Products/productsArray'
import CartProductsListItem from 'components/CartProductsList/CartProductsListItem'
import { useAppSelector } from 'redux/hooks'

type productsObject = {
    [id:number]: ProductsProps
}

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
    CartItem= CartProductsListItem,

}: Props) => {

    const productsArray = useAppSelector((state) => state.products)
    const productsObject:productsObject = getProductsObject(productsArray)

    return (
        <>
            {Object.keys(productsInCart).map((productId) => (
                <CartItem
                key={productId}
                product={productsObject[parseInt(productId)]}
                productCount={productsInCart[parseInt(productId)]}

            />

            ))}
        </>
    )
}
export default CartProductsList
