import { useState, useEffect } from 'react';
import { products } from '../../mock/products';
import styles from './ItemDetailContainer.module.scss';
import { Spinner } from 'react-bootstrap';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

export default function ItemDetailContainer({ title }) {
  let [ item, setItem ] = useState([]);
  let [ loading, setLoading ] = useState(true);
  

  const { itemId } = useParams();

  const getItem = () => {
    const selectedItem = products.find(product => product.id == itemId);
    return new Promise((resolve, reject) => {      
      setTimeout(() => {
        selectedItem ? resolve(selectedItem) : reject('Hubo un problemas al obtener el producto')
      }, 2000);
    });
  }

  useEffect(() => {
    setLoading(true)
    getItem()
      .then(res => {
        setItem(res)
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
      <div className={ `container ${ styles.itemDetailContainer }` }>
        {
          loading ? <div className={ styles.itemDetailContainer__spinner }>
                      <Spinner variant="secondary" animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </Spinner>
                    </div>
                  : 
                    <ItemDetail item={item} />                    
        }
      </div>
    </div>
  );
}