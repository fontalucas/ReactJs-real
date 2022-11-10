import './CartItem.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'


const CartItem = ({ id, img, name, quantity, price }) => {
    const { removeItem } = useContext(CartContext)

    const handleRemove = (id) => {
        removeItem(id)
    }
    
    return (
        <article classNameName='CardCartItem'>
            <header classNameName="HeaderCartItem">
                <img  classNameName='imagencarrito' src={img} alt={name} />
                <h2 classNameName="ItemHeaderCartItem">
                    {name}
                </h2>
            </header>
            <section classNameName='ContainerItemCartItem'>
                <p classNameName="InfoCartItem">
                    Cantidad: {quantity}
                </p>
                <p classNameName="InfoCartItem">
                    Precio por Unidad: ${price}
                </p>
            </section>           
            <footer classNameName='ItemFooterCartItem'>
                <p classNameName="InfoCartItem">
                     Subtotal: ${price * quantity}
                </p>
                 {/* <ItemCount onAdd={handleOnAdd} stock={stock}/> */}
                <button classNameName='ButtonCartItem' onClick={() => handleRemove(id)}>X</button>
            </footer>
        </article>
    )
}

export default CartItem