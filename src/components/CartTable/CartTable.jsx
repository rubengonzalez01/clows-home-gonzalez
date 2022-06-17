import { useNavigate } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import CartTableSummary from '../CartTableSummary/CartTableSummary';
import TableItem from '../TableItem/TableItem';
import styles from './CartTable.module.scss';

export default function CartTable() {
  const navigate = useNavigate();
  const { itemList, setCheckout } = useCartContext();

  const handleClick = () => {
    setCheckout(false);
    navigate('/');
  }

  return (
    <div className={ `container ${ styles.cartTable }`}>
      <h3 className={ styles.cartTable__title }>CARRITO DE COMPRAS</h3>
      {
        itemList.length > 0 ?      
            <div className={ styles.cartTable__withElements }>      
              <div>
                <table className={ styles.cartTable__table }>
                  <thead className={ styles.cartTable__head }>
                    <tr>
                      <th className={ styles.cartTable__head_item }>PRODUCTO</th>
                      <th className={ styles.cartTable__head_item }>PRECIO</th>
                      <th className={ styles.cartTable__head_item }>CANTIDAD</th>
                      <th className={ styles.cartTable__head_item }>TOTAL</th>
                      <th className={ styles.cartTable__head_item }></th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      itemList ? itemList.map( item => <TableItem  key={ item.id } item={ item } />)
                              : null
                    }
                    
                  </tbody>
                </table>
              </div>
              <CartTableSummary />              
            </div>

      :     <div className={ styles.cartTable__noElements }>
              <div className={ styles.cartTable__description }>
                <h4 className={ styles.cartTable__empty_title }>Su carrito está vacío</h4>
                <span>Para seguir comprando, navegar por las categorías en el sitio, o busque su producto.</span>
              </div>
              <div className={ styles.cartTable__button_container }>
                <button onClick={ handleClick } className={`btn btn-lg btn-block ${ styles.cartTable__button_primary }`}>Elegir productos</button>
              </div>
            </div>

      }
    </div>
  );
}