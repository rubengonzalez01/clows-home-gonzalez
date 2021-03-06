import styles from './Item.module.scss';
import ItemCount from '../ItemCount/ItemCount';
import { useNavigate } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';

export default function Item({ product }) {
  const { addItem } = useCartContext();
  const navigate = useNavigate();
  const currency = Intl.NumberFormat('de-DE');

  const onAdd = (value) => {
    const itemWithQuantity = {
      ...product,
      quantity: value,
      total_price: product.price * value
    }
    
    addItem(itemWithQuantity);
  };
  
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
          <h3 className={ styles.item__title }>{ product.name }</h3>
          <h2 className={ styles.item__price }>$ { currency.format(product.price) }</h2>
          <span className={ styles.item__options }>{ product.options }</span>
        </div>
        <div className={ styles.item__footer }>
          <ItemCount 
            initial={1} 
            stock={product.stock}
            addToCart={ onAdd } />
        </div>
      </div>
    </div>
  );
}