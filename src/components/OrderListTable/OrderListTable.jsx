import styles from './OrderListTable.module.scss';

export default function OrderListTable({ selectedOrder }) {
  const currency = Intl.NumberFormat('de-DE');

  return (
    <div className={ styles.orderListTable__orderResume }>
      <div className={ styles.orderListTable__resume_content }>
        <p className={ styles.orderListTable__resume_text }><b>Nro. de pedido:</b> { selectedOrder.id }</p>
        <p className={ styles.orderListTable__resume_text }><b>Fecha:</b> { selectedOrder.date }</p>
        <p className={ styles.orderListTable__resume_text }><b>Total a abonar:</b> $ { currency.format(selectedOrder.total) }</p>
        <p className={ styles.orderListTable__resume_text }><b>Estado:</b> { selectedOrder.state }</p>
        <div className={ styles.orderListTable__item_list }>
          <table className={ styles.orderListTable__table }>
            <thead className={ styles.orderListTable__head }>
              <tr>
                <th className={`${styles.orderListTable__head_item} ${styles.orderListTable__head_item_principal}`}>PRODUCTO</th>
                <th className={`${styles.orderListTable__head_item} ${styles.orderListTable__head_item_secondary}`}>PRECIO</th>
                <th className={`${styles.orderListTable__head_item} ${styles.orderListTable__head_item_secondary}`}>CANTIDAD</th>
                <th className={`${styles.orderListTable__head_item} ${styles.orderListTable__head_item_secondary}`}>TOTAL</th>
              </tr>
            </thead>
            <tbody>
              {
                  selectedOrder.items 
                  ? selectedOrder.items.map( item => (
                                                      <tr key={item.id}>
                                                        <td className={ styles.orderListTable__body_data }>{ item.name }</td>
                                                        <td className={` ${styles.orderListTable__body_data} ${styles.orderListTable__body_data_right} `}>${ currency.format(item.price) }</td>
                                                        <td className={` ${styles.orderListTable__body_data} ${styles.orderListTable__body_data_right} `}>{ item.quantity }</td>
                                                        <td className={` ${styles.orderListTable__body_data} ${styles.orderListTable__body_data_right} `}>${ currency.format(item.total_price) }</td>
                                                      </tr>
                                                    ))
                  : null
                }                    
              </tbody>
            </table>
        </div>
      </div>
    </div>
  );
}