import { useNavigate } from 'react-router-dom';
import OrderListTable from '../OrderListTable/OrderListTable';
import styles from './OrderList.module.scss';

export default function OrderList({ orderList, selectedOrder, isSelected, handleSelect }) {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  }

  return (
    <div className={ styles.orderList__orders_container }>
      <div className={ styles.orderList__idList }>
      {
        orderList.length > 0 
          ? <div>
              <h5 className={ styles.orderList__orders_title }>Pedidos</h5>
              {
                orderList.map((order) => (
                  <div className={`${styles.orderList__order} ${ selectedOrder && order.id === selectedOrder.id && styles.orderList__order_active }`} onClick={ () => handleSelect(order) } key={order.id} >
                    <span className={ styles.orderList__orderId }>{ order.id }</span>
                  </div>
                ))
              }
            </div>
          : 
          <div className={ styles.orderList__noElements }>
            <div className={ styles.orderList__description }>
              <h4 className={ styles.orderList__empty_title }>Aún no tienes pedidos</h4>
              <span>Para comprar, navegar por las categorías en el sitio, o busque su producto.</span>
            </div>
            <div className={ styles.orderList__button_container }>
              <button onClick={ handleGoHome } className={`btn btn-lg btn-block ${ styles.orderList__button_primary }`}>Elegir productos</button>
            </div>
          </div>             
      }
      </div>
      {
        isSelected ? <OrderListTable selectedOrder={selectedOrder} />
                    : null
      } 
    </div>
  );
}