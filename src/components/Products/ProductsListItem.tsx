import { Card, CardActions, CardContent, Button,TextField } from '@mui/material'
import './ProductsListItem.scss'
import{useState} from 'react'

type Props = {   title: string
    desc: string
    type:string
    capacity:string
    price:number
    image:string

}
const ProductsListItem = ({
    title,
    desc,
    type,
    capacity,
    price,
    image
}: Props) => {
    const[count, setCount] = useState<number>(1)
    const[color, setColor] = useState<string>('green')
    const onIncrement = ()=>{
        setCount((prevState:number)=> prevState+1)
    }

    const onDecrement = ()=>{
        setCount((prevState:number)=> prevState-1)
    }
    const changeColor = () => {
    setColor((prevState:string)=>{
        if(prevState === 'green'){
            return 'red'
        }
        else{
            return 'green'
        }

    }
        )
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
                <p>Color: green</p>
                <button onClick={()=>changeColor()}>Change color</button>

                <div className="product-quantity">
                    <Button variant="outlined"onClick={()=>onDecrement()}>-</Button>
                    <TextField size="small" value={count}/>
                    <Button variant="outlined" onClick={()=>onIncrement()}>+</Button>
                </div>

            </CardContent>

            <CardActions className="btns-wrap">
                <Button variant="outlined">Add to cart</Button>
            </CardActions>
        </Card>

    )
}
export default ProductsListItem
