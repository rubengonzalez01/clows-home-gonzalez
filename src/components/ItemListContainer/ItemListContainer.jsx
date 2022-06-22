import { useState, useEffect } from 'react';
import styles from './ItemListContainer.module.scss';
import ItemList from '../ItemList/ItemList';
import { useParams, useLocation } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore'; 
import { db } from '../../firebase/config';
import AppSpinner from '../AppSpinner/AppSpinner';
import { useCartContext } from '../../context/CartContext';

export default function ItemListContainer() {
  let [ listProducts, setListProducts ] = useState([]);
  let [ loading, setLoading ] = useState(true);
  const { searchQuery } = useCartContext();
  const location = useLocation();

  const { categoryType } = useParams();

  let title = '';
  if(categoryType) {
    title = CATEGORY[categoryType];
  } else {
    title = location.pathname === '/productos' ? 'Resultados de la búsqueda' : 'Los más pedidos';
  }

  useEffect(() => {
    setLoading(true);
    // arma la referencia a la db
    const productsRef = collection(db, 'products');
    //query de busqueda
    const q = categoryType ? query(productsRef, where('category','==', categoryType)) : productsRef;
    // llama a firestore
    getDocs(q)
      .then(resp => {
        let newItems = [];

        if(location.pathname !== '/productos'){
          newItems = resp.docs.map(doc => {
            return {
              id: doc.id,
              ...doc.data()
            }
          })
        } else {
          newItems = resp.docs.filter(doc => 
            doc.data().name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            doc.data().category.toLowerCase().includes(searchQuery.toLowerCase()) ||
            doc.data().description.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map(doc => {
            return {
              id: doc.id,
              ...doc.data()
            }
          })
        }
        setListProducts(newItems);
      })
      .catch(error => {
        console.error("Error: " + error)
      })
      .finally(() => {
        setLoading(false);
      });  
      // eslint-disable-next-line
  }, [categoryType, searchQuery]);

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

export const CATEGORY = {
  perros: 'Perros',
  gatos: 'Gatos',
  otros: 'Otros'
}