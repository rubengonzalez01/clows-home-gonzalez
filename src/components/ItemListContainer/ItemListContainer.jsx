import { useState, useEffect } from 'react';
import styles from './ItemListContainer.module.scss';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore'; 
import { db } from '../../firebase/config';
import AppSpinner from '../AppSpinner/AppSpinner';

export default function ItemListContainer() {
  let [ listProducts, setListProducts ] = useState([]);
  let [ loading, setLoading ] = useState(true);

  
  const { categoryType } = useParams()
  let title = categoryType ? categoryType.toUpperCase() : 'LOS MÁS VENDIDOS';

  useEffect(() => {
    setLoading(true);
    // arma la referencia a la db
    const productsRef = collection(db, 'products');
    //query de busqueda
    const q = categoryType ? query(productsRef, where('category','==', categoryType)) : productsRef;
    // llama a firestore
    getDocs(q)
      .then(resp => {
        const newItems = resp.docs.map(doc => {
          return {
            id: doc.id,
            ...doc.data()
          }
        });
        setListProducts(newItems);
      })
      .catch(error => {
        console.error("Error: " + error)
      })
      .finally(() => {
        setLoading(false);
      });  
  }, [categoryType]);
  

  return (
    <div className="d-flex flex-column">
      <div className={ styles.itemContainer__title }>
        <h2 className={ styles.itemContainer__title_text }>{ title }</h2>
      </div>
      <div className={ `container ${styles.itemContainer}` }>
        <div className={ styles.itemContainer__group }>
        {
          loading ? <AppSpinner variant='secondary' withClass={true} />
                  : <ItemList listProducts={listProducts} />                    
        }
        </div>
      </div>
    </div>
  );
}