import  {
    getProductsObject,
    ProductsProps,
} from 'components/Products/productsArray'
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
}

const CartTotal = ({
    productsInCart,
}: Props) => {
    const productsArray = useAppSelector((state) => state.products)
    const productsObject:productsObject = getProductsObject(productsArray)
    return (
        <div>
            Total:{' '}
            {Object.keys(productsInCart).reduce(
                (total, productId) =>
                    total +
                    productsInCart[parseInt(productId)] *
                        productsObject[parseInt(productId)].price,
                0
            )}
        </div>
    )
}
export default CartTotal
