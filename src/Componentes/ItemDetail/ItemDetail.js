import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { useCart } from '../../context/CartContext'
import { NotificationContext } from '../../notification/NotificationService'


const ItemDetail = ({ id, name, img, category, description, price, stock }) => {

    const { addItem, isInCart, getProductQuantity } = useCart()
    const { setNotification } = useContext(NotificationContext)

    const handleOnAdd = (quantity) => {

        const productToAdd = {
            id,
            name,
            price
        }

        addItem(productToAdd, quantity)
        setNotification('success', `Se agrego correctamente ${quantity} ${name}`)
    }

    const quantityAdded = getProductQuantity(id)

    return (
        <article classNameName="CardItem">
            <header classNameName="Header">
                <h6 classNameName="ItemHeader">
                    {name}
                </h6>
            </header>
            <picture>
                <img src={img} alt={name} classNameName="ItemImg"/>
            </picture>
            <section>
                <p classNameName="Info">
                    Linea: {category}
                </p>
                <p classNameName="Info">
                    Descripción: {description}
                </p>
                <p classNameName="Info">
                    Precio: ${price}
                </p>
            </section>           
            <footer classNameName='ItemFooter'>
                { stock !== 0 ? <ItemCount onAdd={handleOnAdd} stock={stock} initial={quantityAdded} />: <p>No hay stock</p>}
                { isInCart(id) && <Link to='/cart' classNameName='Optioncheck' style={{ backgroundColor: 'blue'}}>Finalizar compra</Link> }
            </footer>
        </article>
    )
}

export default ItemDetail