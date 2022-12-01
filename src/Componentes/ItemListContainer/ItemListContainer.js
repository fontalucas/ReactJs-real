import ItemList from "../ItemList/ItemList";
// import { useState, useEffect } from "react";
import { getBurgers } from "../../service/firebase/firestore/burgers"
import { useParams } from "react-router-dom";
import { useAsync } from "../../hook/useAsync"


const ItemListContainer = () => {
        const { categoryId } = useParams()

        const getBurgersWithCategory = () => getBurgers(categoryId)

        const { data: burgers, error, loading } = useAsync(getBurgersWithCategory, [categoryId])


    //tiempo de carga simulado    
    if(loading) {
            return <h1>Cargando productos ...</h1>
        } 
        if(error) {
            return <h1>Algo sucedio, hubo un error :'( </h1>
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