import './Checkout.css'
import { useState, useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { NotificationContext} from '../../notification/NotificationService'
import { collection, getDocs, query, where, documentId, writeBatch, addDoc } from 'firebase/firestore'
import { db } from '../../service/firebase/index'
import { useNavigate } from "react-router-dom"
import { Form } from 'react-bootstrap'


const Checkout = () => {
    const [loading, setLoading] = useState(false)

    const { cart, total, clearCart } = useContext(CartContext)
    const { setNotification } = useContext(NotificationContext)

    const navigate = useNavigate()
    //Intente diferentes formas de hacer el formulario y captar los inputs pero no me estoy dando cuenta por que no funcionan.

    const buyer = {
            nombre: "",
            email: "",
            phone: ""
    }

    const [user, setUser] = useState(false)

    const capturarInputs = (e) => {
        const {name, value} = e.target;
        setUser({...user, [name]:value})
    }

    const guardarDatos = async(e) => {
        e.preventDefault();
        try {
            await addDoc(collection(db, 'orders'),{
                ...user
            })
        } catch (error) {
            console.log(error);
        } setUser({...buyer})
        }
    

    const createOrder = async () => {
            setLoading(true)

        try {
            const objOrder = {
                buyer: user,
                items: cart,
                total: total
                
            }
            const batch = writeBatch(db)
            
            const outOfStock = []
            
            const ids = cart.map(prod => prod.id)
            
            const productsRef = collection(db, 'burgers')

            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))


            const { docs } = productsAddedFromFirestore
            
            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock
                
                const productsAddedFromFirestore = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productsAddedFromFirestore?.quantity
                
                if(stockDb >- prodQuantity) {
                    batch.update(doc.ref, {stock: stockDb - prodQuantity})
                } else {
                    outOfStock.push({id: doc.id, ...dataDoc})
                }
            })
            
            if(outOfStock.length === 0) {
                await batch.commit()
                
                const orderRef = collection(db, 'orders')
                
                const orderAdded = await addDoc(orderRef, objOrder)
                
                clearCart()
                
                setTimeout(() => {
                    navigate('/')
                }, 2000)
                
                setNotification('success', `Genial! El id de su orden es: ${orderAdded.id}`)
            } else {
                setNotification('error','Disculpe, no tenemos stock de uno de los productos')
            }
            
        } catch(error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
        
    }

    if(loading) {
        return <h1>Generando su orden...</h1>
    }
    

    return (
        <section className="container">
            <div className="cajaformulario">
                <h1>Checkout</h1>
                <Form  onSubmit={guardarDatos} method="POST" id="contact-form" className="formulario" >                
                    <div className="box">
                        <label>Nombre</label> <br></br>
                        <input type="text" name="nombre" placeholder='Ingrese su nombre'  onChange={capturarInputs} value={user.nombre} />
                    </div>

                    <div className="box">
                        <label>Email</label> <br></br>              
                        <input type="email" name="email" placeholder='Ingrese su email'  onChange={capturarInputs} value={user.email} />
                    </div>
                    <div className="box"> 
                        <label>Numero de telefono</label> <br></br>
                        <input type="number" name="phone" placeholder='Ingrese su numero de telefono'  onChange={capturarInputs} value={user.phone} />
                    </div>
                    <div>
                        <button className="enviar" onClick={createOrder} type="button" value="Generar orden" /> 
                    </div>   
                </Form>
            </div>
        </section>
    )
}

export default Checkout





        /* <div>
            <h1>Checkout</h1>
            <form id="contact-form" className="formulario">
                <div className="mb-3">
                    <label for="formGroupExampleInput" className="form-label">Nombre</label>
                    <input type="text" className="form-control" placeholder="Escriba su nombre" />
                </div>
                <div className="mb-3">
                    <label for="formGroupExampleInput2" className="form-label">Email</label>
                    <input type="text" className="form-control" placeholder="Escriba su email" />
                </div>
                <div className="mb-3">
                    <label for="formGroupExampleInput2" className="form-label">Telefono</label>
                    <input type="number" className="form-control" placeholder="Escriba su telefono" />
                </div>
                <div className="enviar">
                    <input type="submit" value="Enviar" onClick={createOrder}>Generar orden </input>
                </div> 
            </form>
        </div> */