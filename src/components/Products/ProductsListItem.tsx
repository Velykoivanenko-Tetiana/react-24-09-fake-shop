import { Card, CardActions, CardContent, Button } from '@mui/material'
import './ProductsListItem.scss'
type Props = {}
const ProductsListItem = (props: Props) => {
    return (
        <Card className="product-list-item">
            <CardContent>
                <h4 className="product-title">iPhone X</h4>
                <p className="product-desc">This is iphone X</p>
                <div className="product-features">
                    <span>Type:</span> phone
                </div>
                <div className="product-features">
                    <span>Capacity:</span> 64 gb
                </div>
                <div className="product-price">500$ </div>
            </CardContent>
            <CardActions className="btns-wrap">
                <Button variant="outlined">Add to cart</Button>
            </CardActions>
        </Card>

    )
}
export default ProductsListItem
