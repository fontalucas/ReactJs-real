import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Componentes/NavBar/NavBar';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext';
import { NotificationProvider } from './notification/NotificationService.js';
import Cart from './Componentes/Cart/Cart'
import Checkout from './Componentes/Checkout/Chekout';

function App() {

  return (
    <div className="App">
        <NotificationProvider>
          <CartProvider>
            <BrowserRouter>
              <NavBar />
                <Routes>
                  <Route path='/' element={<ItemListContainer />}/>
                  <Route path='/category/:categoryId' element={<ItemListContainer />}/>
                  {/* <Route path='/contact' element={<h2>CONTACTO</h2>}/> */}
                  <Route path='/detail/:productId' element={<ItemDetailContainer />}/>
                  <Route path='/cart' element={<Cart />}/>
                  <Route path='/checkout' element={<Checkout />}/>
                </Routes>
            </BrowserRouter>
          </CartProvider>
        </NotificationProvider>
    </div>


  );
}

export default App;
