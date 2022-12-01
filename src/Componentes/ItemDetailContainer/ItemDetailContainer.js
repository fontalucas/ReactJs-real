import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams, useNavigate } from 'react-router-dom'
// import { getDoc, doc } from 'firebase/firestore'
// import { db } from '../../service/firebase'
import { getBurger } from '../../service/firebase/firestore/burgers'

const ItemDetailContainer = ({setCart}) => {
    const [burger, setBurger] = useState([])
    const [loading, setLoading] = useState(true)
    
    const { productId } = useParams()
    
    const navigate = useNavigate()
        
        useEffect(() => {
            document.title = loading ? 'Cargando' : `Detalle ${burger.name} `
})
        useEffect(() => {
            setLoading(true)

            getBurger(productId).then(burger => {
                setBurger(burger)
            })
            .catch(error => {
            })
            .finally(() => {
                setLoading(false)
            })
            
        }, [productId])

        if(loading) {
            return (
                <h1>Cargando productos</h1>
            )
        }

        return (
            <>
            <div className='ItemDetailContainer' >
                <ItemDetail {...burger}/>
                <button className='OptionA' onClick={() => navigate(-1)}>Atras</button>
            </div>
            </>
    )
}

export default ItemDetailContainer