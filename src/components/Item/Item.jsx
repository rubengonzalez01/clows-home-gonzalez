import styles from './Item.module.scss';
import ItemCount from '../ItemCount/ItemCount';
import { useNavigate } from 'react-router-dom';

export default function Item({ product }) {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(`/productos/${product.category}/${product.id}`);
  } 

  return(
    <div className={ styles.item }>
      <div className={ styles.item__wrapper }>
        <div className={ styles.item__image_container }>
          <img onClick={ handleClick } className={ styles.item__image } src={product.image} alt="producto" />
        </div>
        <div className={ styles.item__body }>
          <h3 className={ styles.item__title }>{product.name}</h3>
          <h2 className={ styles.item__price }>${product.price}</h2>
          <span className={ styles.item__options }>{product.options}</span>
        </div>
        <div className={ styles.item__footer }>
          <ItemCount initial={1} stock={product.stock} />
          <div className={ styles.item__add_cart }>
            <button className='btn btn-lg btn-block w-100'>Agregar</button>
          </div>
        </div>
      </div>
    </div>
  );
}