import { Card, CardActions, CardContent, Button,TextField } from '@mui/material'
import './ProductsListItem.scss'
import{useState} from 'react'

type Props = {  
    id:number
    title: string
    desc: string
    type:string
    capacity:string
    price:number
    image:string
    addProductToCart:(total:number,price:number)=>void
}
const ProductsListItem = ({
    id,
    title,
    desc,
    type,
    capacity,
    price,
    image,
    addProductToCart,
}: Props) => {
    const[count, setCount] = useState<number>(1)
    const[color, setColor] = useState<string>('green')
    const onIncrement = ()=>{
        setCount((prevState:number)=> prevState+1)
    }

    const onDecrement = ()=>{
        setCount((prevState:number)=> prevState-1)
    }
    
    
    return (
        <Card className="product-list-item">
            <CardContent>
                <div className="product-img">
                    <img src={image} alt=""/>
                </div>
                <h4 className="product-title">{title}</h4>
                <p className="product-desc">{desc}</p>
                <div className="product-features">
                    <span>Type:</span> {type}
                </div>
                <div className="product-features">
                    <span>Capacity:</span> {capacity} gb
                </div>
                <div className="product-price">{price}$ </div>
               

                <div className="product-quantity">
                    <Button variant="outlined"onClick={()=>onDecrement()}
                    disabled={count<=1}>-</Button>
                    <TextField size="small" value={count}/>
                    <Button variant="outlined" onClick={()=>onIncrement()}
                    disabled={count>=10}>+</Button>
                </div>

            </CardContent>

            <CardActions className="btns-wrap">
                <Button variant="outlined"
                onClick={()=>addProductToCart(id,count)}>Add to cart</Button>
            </CardActions>
        </Card>

    )
}
export default ProductsListItem
