import { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import styles from './ItemCount.module.scss';
import Counter from '../Counter/Counter';

export default function ItemCount ({ initial, stock, addToCart }) {
  let [count, setCount] = useState(initial);
  let [ loading, setLoading ] = useState(false);

  const handleCountPlus = () => {
    if(count < stock){ 
      setCount(count + 1);
    }
  }

  const handleCountMinus = () => {
    if(count > 1){
      setCount(count - 1);
    }
  }

  const handleAdd = () => {
    setLoading(true);
    setTimeout(() => {
      addToCart(count)
      setLoading(false);
    }, 500)
  }

  return (    
    <div className={ styles.itemCounter }>
      <div className={ styles.itemCounter__counter }>
        <Counter count={ count } handleCountPlus={ handleCountPlus } handleCountMinus={ handleCountMinus } />
      </div>
      <div className={ styles.itemCounter__add_cart }>
        <button onClick={ handleAdd } className='btn btn-lg btn-block w-100'>
          { loading ? <div className={ styles.itemCounter__spinner }>
                          <Spinner variant="light" animation="border" role="status" size="sm">
                            <span className="visually-hidden">Loading...</span>
                          </Spinner>
                        </div>
                      : 'Agregar al carrito' 
          }
        </button>
      </div>
    </div>
  );
}