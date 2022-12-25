import {Typography} from '@mui/material'
import ProductsList from 'components/Products/ProductsList'

type Props = {  addProductToCart:(total:number,price:number)=>void
}

const Home = ({addProductToCart}: Props) => {
  return (
    <>
    <Typography variant="h4"
    align="center">
        List of products
    </Typography>
    <ProductsList addProductToCart={addProductToCart}/>
    </>
  )
}

export default Home