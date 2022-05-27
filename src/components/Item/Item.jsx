import item from '../../assets/products/product1_300-300.webp';
import styles from './Item.module.scss';
import ItemCount from '../ItemCount/ItemCount';

export default function Item() {
  return(
    <div className={ styles.item }>
      <div className={ styles.item__wrapper }>
        <div className={ styles.item__image_container }>
          <img className={ styles.item__image } src={item} alt="producto" />
        </div>
        <div className={ styles.item__body }>
          <h3 className={ styles.item__title }>Royal Canin comida deliciosa para todos</h3>
          <h2 className={ styles.item__price }>$1500</h2>
          <span className={ styles.item__options }>3 cuotas sin interes de $500</span>
        </div>
        <div className={ styles.item__footer }>
          <ItemCount initial={1} stock='10' />
          <div className={ styles.item__add_cart }>
            <button className='btn btn-info btn-lg btn-block w-100'>Agregar</button>
          </div>
        </div>
      </div>
    </div>
  );
}