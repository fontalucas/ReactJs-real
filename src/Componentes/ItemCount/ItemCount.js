import './ItemCount.css'
import { useState } from 'react'

const ItemCount = ({stock, initial = 1, onAdd})=> {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity+1)
        }
    }

    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1)
        }     
    }

    return(
        <div classNameName='Counter'>          
            <div classNameName='Controls'>
                <button classNameName="Button" onClick={decrement}>-</button>
                <h4 classNameName='Number'>{quantity}</h4>
                <button classNameName="Button" onClick={increment}>+</button>
            </div>
            <div>
                <button classNameName="Button" onClick={() => onAdd(quantity)}>Agregar al carrito</button>
            </div>
        </div>
    )

}
export default ItemCount