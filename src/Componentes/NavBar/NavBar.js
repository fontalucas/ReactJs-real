import "./NavBar.css";
import { useState, useEffect } from 'react'
import CartWidget from "../CartWidget/CartWidget.js";
import { NavLink } from "react-router-dom";
import { getDocs, collection, query, orderBy } from 'firebase/firestore'
import { db } from '../../service/firebase'


const NavBar = () => {
    //no pude hacer funcionar la sincronización con firebase
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const collectionRef = query(collection(db, 'categories'), orderBy('order')) 
    
        getDocs(collectionRef).then(response => {
    
        const categoriesAdapted = response.docs.map(doc => {
            const data = doc.data()
            const id = doc.id
    
            return { id, ...data}
        })
        setCategories(categoriesAdapted)
        })
    }, [])
    

    return (

    <>
        <nav>
            <NavLink to='/'>
                <img className="cabecera-img" src="https://i.ibb.co/4pjQ0SR/logo.jpg" alt="logo del bar"></img>
            </NavLink>
        </nav>
        <nav classNameName="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <div className="navbar-nav">
                    {/* NO PUDE HACER FUNCIONAR EL MAP DE CATEGORIAS PARA TRAERLO DEL FIRESTORE */}
            {/* {categories.map(cat => (
                <NavLink key={cat.id} to={`/category/${cat.slug}`} classNameName={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>{cat.label}</NavLink>
            ))} */}
                    <NavLink to={'/category/clasica'} classNameName={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>LINEA CLASICA</NavLink>
                    <NavLink to={'/category/cheese'} classNameName={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>LINEA CHESSE</NavLink>
                    <NavLink to={'/category/homenaje'} classNameName={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>LINEA HOMENAJE</NavLink>
                    <NavLink to={'/contacto/'} classNameName={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>ENCONTRANOS</NavLink>
                </div>
                <div classNameName="carrito">
                    <CartWidget classNameName="carrito" />
                </div>
            </div>
        </nav>
    </>
    )
}

export default NavBar;

//<div className="cabecera-img">
//            <img src="https://i.ibb.co/4pjQ0SR/logo.jpg" alt="logo del bar"></img>
//        </div>
//        <div className="navbar">
//            <ul className="navbar-nav">
//      
//                <a className="nav-link active" aria-current="page" href="!#">Hamburguesas</a>
//            </li>
//            <li className="nav-item">
//                <a className="nav-link" href="!#">Tap</a>
//            </li>
//            <li className="nav-item">
//                <a className="nav-link" href="!#">Gaseosas</a>
//            </li>
//        </ul>
//        </div>
//            </>