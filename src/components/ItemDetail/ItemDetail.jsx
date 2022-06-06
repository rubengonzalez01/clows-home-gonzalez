import styles from './ItemDetail.module.scss';
import ItemCount from '../ItemCount/ItemCount';
import { Breadcrumb } from 'react-bootstrap';

export default function ItemDetail({ item }) {
  return (
    <div className={ styles.itemDetail }>
      <Breadcrumb>
        <Breadcrumb.Item className={ styles.itemDetail__breadcrumb } href="/">Inicio</Breadcrumb.Item>
        <Breadcrumb.Item className={ styles.itemDetail__breadcrumb } href="/">Productos</Breadcrumb.Item>
        <Breadcrumb.Item className={ styles.itemDetail__breadcrumb } active>{ item.name }</Breadcrumb.Item>
      </Breadcrumb>
      <div className={ styles.itemDetail__wrapper }>
        <div className={ styles.itemDetail__images }>
          <img className={ styles.itemDetail__image } src={ item.image } alt={item.name} />
        </div>
        <div className={ styles.itemDetail__body }>
          <div className={ styles.itemDetail__data }>
            <h5 className={ styles.itemDetail__title }>{ item.name }</h5>
            <span className={ styles.itemDetail__price }>${ item.price }</span>
            <span className={ styles.itemDetail__options }>{ item.options }</span>
          </div>
          <div className={ styles.itemDetail__counter }>
            <ItemCount initial={1} stock={ item.stock } />
            <div className={ styles.itemDetail__add_cart }>
              <button className='btn btn-lg btn-block w-100'>Agregar</button>
            </div>
          </div>
          <div className={ styles.itemDetail__description }>
            <h5 className={ styles.itemDetail__description_title }>Descripción</h5>
            <p className={ styles.itemDetail__description_text }>{ item.description }</p>
          </div>
        </div>
      </div>
    </div>
  );
}