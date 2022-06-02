import { useState, useEffect } from 'react';
import { products } from '../../mock/products';
import styles from './ItemListContainer.module.scss';
import ItemList from '../ItemList/ItemList';
import { Spinner } from 'react-bootstrap';

export default function ItemListContainer({ title }) {
  let [ listProducts, setListProducts ] = useState([]);
  let [ loading, setLoading ] = useState(true);

  const getProducts = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        products ? resolve(products) : reject('Hubo un problemas al obtener los productos')
      }, 2000);
    });
  }

  useEffect(() => {
    setLoading(true)
    getProducts()
      .then(res => {
        setListProducts(res)
      })
      .catch(error => {
        console.error("Error: " + error)
      })
      .finally(() => {
        setLoading(false);
      });  
  }, []);
  

  return (
    <div className="d-flex flex-column">
      <div className={ styles.itemContainer__title }>
        <h2 className={ styles.itemContainer__title_text }>{ title }</h2>
      </div>
      <div className={ `container ${styles.itemContainer}` }>
        <div className={ styles.itemContainer__group }>
        {
          loading ? <div className={ styles.itemContainer__spinner }>
                      <Spinner variant="secondary" animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </Spinner>
                    </div>
                  : 
                    <ItemList listProducts={listProducts} />                    
        }
        </div>
      </div>
    </div>
  );
}