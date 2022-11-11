import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({id, img , name, description, price}) => {
  return (
  <div className='parent'>
    <div className='div1'>
    <div className="card">
        <img src={img} alt={name} className="card-img-top" />
      <div className="card-body">
        <h4 className="card-title">{name}</h4>
        <h6>${price}</h6>
      </div>
      <footer>
        <Link className='btn-detalle' to={`/detail/${id}`}>Ver detalle</Link>
      </footer>
    </div>
    </div>
  </div>

  )
}
export default Item;