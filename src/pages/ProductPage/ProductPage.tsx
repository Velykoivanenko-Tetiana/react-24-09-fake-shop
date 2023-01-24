import { useParams } from "react-router-dom"
import  {
    getProductsObject,
    ProductsProps,
} from 'components/Products/productsArray'
import { useAppSelector } from 'redux/hooks'

type productsObject = {
    [id:number]: ProductsProps
}

type Props = {}

const ProductPage = (props: Props) => {
    const {id} = useParams()
    const productsArray = useAppSelector((state) => state.products)
    const productsObject:productsObject = getProductsObject(productsArray)
    const productId:string = id || ''
  return (
    <div>{productsObject[parseInt(productId)].name}</div>
  )
}

export default ProductPage