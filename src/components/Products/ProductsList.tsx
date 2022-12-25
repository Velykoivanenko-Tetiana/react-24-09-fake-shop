import { Grid } from '@mui/material'
import ProductsListItem from './ProductsListItem'
import productsArray from './productsArray'
type Props = {
  addProductToCart:(total:number,price:number)=>void

}
type ProductsProps ={
  id:number
    title:string
    desc: string
    type:string
    capacity:string
    price:number    
    image:string

}


const ProductsList = ({addProductToCart}: Props) => {
  return (
    <>
    <Grid container direction="row" alignItems="center" spacing={4}>
    {productsArray.map(({
      id,
      title,
    desc,
    type,
    capacity,
    price,
    image
  }: ProductsProps) => (
                    <Grid item xs={12} sm={6} md={4}>
                        <ProductsListItem
                            title={title}
                            desc={desc}
                            type={type}
                            capacity={capacity}
                            price={price}
                            image={image}
                            addProductToCart={addProductToCart}
                        />
                    </Grid>
                ))}
</Grid>
    </>
  )
}

export default ProductsList