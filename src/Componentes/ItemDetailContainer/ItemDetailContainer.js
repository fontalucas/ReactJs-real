import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams, useNavigate } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../service/firebase'


const ItemDetailContainer = ({setCart}) => {
    const [burgers, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const { productId } = useParams()
    const navigate = useNavigate()
        
        useEffect(() => {
            document.title = loading ? 'Cargando' : `Detalle ${burgers.name} `
})
        
        useEffect(() => {
            const docRef = doc(db, 'burgers', productId)
            getDoc(docRef)
                .then(response => {
                    const data = response.data()
                    const productAdapted = { id: response.id, ...data }
                    setProduct(productAdapted)
            })
            .catch(error => {
                console.log(error)
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
            <div classNameName='ItemDetailContainer' >
                <ItemDetail {...burgers}/>
                <button classNameName='OptionA' onClick={() => navigate(-1)}>Atras</button>
            </div>
            </>
    )
}

export default ItemDetailContainer