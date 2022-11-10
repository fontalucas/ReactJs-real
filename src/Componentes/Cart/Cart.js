import './Cart.css'
import { useContext } from "react"
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cart, clearCart, totalQuantity, total} = useContext(CartContext)  

    if(totalQuantity === 0) {
        return (
            <h1>NO HAY PRODUCTOS EN EL CARRITO</h1>
        )
    }

    return (     
        <div>
            { cart.map(p => <CartItem key={p.id} {...p}/>) }
            <h3>Total: ${total}</h3>
            <button onClick={() => clearCart()} classNameName="Button">Limpiar carrito</button>
            <Link to='/checkout' classNameName='Optioncheck2'>Checkout</Link>
        </div>
    )
}

export default Cart
    

