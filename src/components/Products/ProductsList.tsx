import { Grid } from '@mui/material'
import ProductsListItem from './ProductsListItem'
import productsArray from './productsArray'
type Props = {
   
}
type ProductsProps ={
    title:string
    desc: string
    type:string
    capacity:string
    price:number
}


const ProductsList = (props: Props) => {
  return (
    <>
    <Grid container direction="row" alignItems="center" spacing={4}>
    {productsArray.map((product: ProductsProps) => (
                    <Grid item xs={12} sm={6} md={4}>
                        <ProductsListItem
                            title={product.title}
                            desc={product.desc}
                            type={product.type}
                            capacity={product.capacity}
                            price={product.price}
                        />
                    </Grid>
                ))}
</Grid>
    </>
  )
}

export default ProductsList