import { useState } from 'react';
import { useEffect } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore'; 
import { db } from '../../firebase/config';
import AppSpinner from '../AppSpinner/AppSpinner';
import styles from './OrderListContainer.module.scss';
import { useAuthContext } from '../../context/AuthContext';
import OrderList from '../OrderList/OrderList';

export default function OrderListContainer() {
  const { user } = useAuthContext();
  const [loading, setLoading] = useState(false);
  const [orderList, setOrderList] = useState([]);
  const [isSelected, setIsSelected] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
 
  const handleSelect = (order) => {
    setIsSelected(true);
    setSelectedOrder(order);
  }

  useEffect(() => {
    setLoading(true);
    // arma la referencia a la db
    const ordersRef = collection(db, "orders");
    //query de busqueda
    const q = query(ordersRef, where('buyer.email','==', user));
    // llama a firestore
    getDocs(q)
      .then(resp => {
        let userOrders = [];

        userOrders = resp.docs.map(doc => {
          return {
            id: doc.id,
            ...doc.data()
          }
        });

        if(userOrders.length > 0) {
          handleSelect(userOrders[0]);
        }
        setOrderList(userOrders);
      })
      .catch(error => {
        console.error("Error: " + error)
      })
      .finally(() => {
        setLoading(false);
      });  
      // eslint-disable-next-line
  }, []);


  return (
    <div className={ styles.orderListContainer }>
      <h3 className={ styles.orderListContainer__title }>Mis pedidos</h3>
      <div className={ styles.orderListContainer__container }>
        {
          loading ? <AppSpinner variant='secondary' withClass={true} />
                  : <OrderList orderList={orderList} selectedOrder={selectedOrder} isSelected={isSelected} handleSelect={handleSelect} />
        } 
      </div>
    </div>
  );
}