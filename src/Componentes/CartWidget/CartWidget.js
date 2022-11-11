import './CartWidget.css'
import cart from './cart.svg'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom'

const CartWidget = () => {
    const { totalQuantity} = useContext(CartContext) 

    const navigate = useNavigate()

    return(
        <button to='/cart' className="CartWidget" onClick={() => navigate('/cart')}>
            <img src={cart} alt='cart-widget' className='CartImg'/>
            {totalQuantity}
        </button>
    );
}

export default CartWidget