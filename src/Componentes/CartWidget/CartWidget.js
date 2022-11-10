import './CartWidget.css'
import cart from './cart.svg'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom'

const CartWidget = () => {
    const { totalQuantity} = useContext(CartContext) 

    const navigate = useNavigate()

    return(
        <button to='/cart' classNameName="CartWidget" onClick={() => navigate('/cart')}>
            <img src={cart} alt='cart-widget' classNameName='CartImg'/>
            {totalQuantity}
        </button>
    );
}

export default CartWidget