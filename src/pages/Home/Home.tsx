import {Typography} from '@mui/material'
import ProductsList from 'components/Products/ProductsList'
import Reviews from 'components/Reviews/Reviews'
type Props = {  addProductToCart:(total:number,price:number)=>void
}

const Home = ({addProductToCart}: Props) => {
  return (
    <>
    <Typography variant="h4"
    align="center"
    sx={{
      marginBottom: '40px',
    }}
    component="h1"
    >
        List of products
    </Typography>
    <ProductsList addProductToCart={addProductToCart}/>
    <Reviews />
    </>
  )
}

export default Home