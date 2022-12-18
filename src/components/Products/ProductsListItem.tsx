import { Card, CardActions, CardContent, Button } from '@mui/material'
import './ProductsListItem.scss'
type Props = {   title: string
    desc: string
    type:string
    capacity:string
    price:number
}
const ProductsListItem = (props: Props) => {
    return (
        <Card className="product-list-item">
            <CardContent>
                <h4 className="product-title">{props.title}</h4>
                <p className="product-desc">{props.desc}</p>
                <div className="product-features">
                    <span>Type:</span> {props.type}
                </div>
                <div className="product-features">
                    <span>Capacity:</span> {props.capacity} gb
                </div>
                <div className="product-price">{props.price}$ </div>
            </CardContent>

            <CardActions className="btns-wrap">
                <Button variant="outlined">Add to cart</Button>
            </CardActions>
        </Card>

    )
}
export default ProductsListItem
