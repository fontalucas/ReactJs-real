import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";
// import { getProduct, getProductByCategory } from "../../asyncMock"; ya no es necesario, traemos de firestore
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../service/firebase'

const ItemListContainer = () => {
        const [burgers, setProduct] = useState([])
        const [loading, setLoading] = useState(true)
        const { categoryId } = useParams()


        useEffect(() => {
            document.title = 'Listado de productos'
        }, [])

        useEffect(() => {

            setLoading(true)

            const collectionRef = categoryId 
                ? query(collection(db, 'burgers'), where('category', '==', categoryId))
                : collection(db, 'burgers')
    
            getDocs(collectionRef)
                .then(response => {
                    console.log(response)
                        const productsAdapted = response.docs.map(doc => {
                        const data = doc.data()
                            console.log(data)
    
                    return { id: doc.id, ...data }
                })

                setProduct(productsAdapted)

            }).catch(error => {
                console.log(error)
            }).finally(() => {
                setLoading(false)
            })  
        }, [categoryId])

    //tiempo de carga simulado    
    if(loading) {
            return <h1>Cargando productos ...</h1>
        } 

        return (
            <div>
                <h1>NUESTRAS BURGERS</h1> 
                <div>
                    <ItemList burgers={burgers}/>
                </div>
            </div>
    )
}
export default ItemListContainer;