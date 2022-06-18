import { useState, useEffect } from 'react';
import styles from './ItemDetailContainer.module.scss';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import AppSpinner from '../AppSpinner/AppSpinner';

export default function ItemDetailContainer() {
  let [ item, setItem ] = useState([]);
  let [ loading, setLoading ] = useState(true);
  

  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);
    // creo la referencia
    const docRef = doc(db, 'products', itemId);
    // llamo a firestore
    getDoc(docRef)
      .then(doc => {
        setItem({id: doc.id, ...doc.data()});
      })
      .catch(error => {
        console.error("Error: " + error)
      })
      .finally(() => {
        setLoading(false);
      });  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  

  return (
    <div className="d-flex flex-column">
      <div className={ `container ${ styles.itemDetailContainer }` }>
        {
          loading ? <AppSpinner variant='secondary' withClass={true} />
                  : <ItemDetail item={item} />                    
        }
      </div>
    </div>
  );
}