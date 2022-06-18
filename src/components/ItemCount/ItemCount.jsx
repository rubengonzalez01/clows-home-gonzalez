import { useState } from 'react';
import styles from './ItemCount.module.scss';
import Counter from '../Counter/Counter';
import toast, { Toaster } from 'react-hot-toast';
import AppSpinner from '../AppSpinner/AppSpinner';

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
      addToCart(count);
      toast.success('Producto agregado al carrito');
      setLoading(false);
    }, 500)
  }

  return (    
    <div className={ styles.itemCounter }>
      <Toaster position='bottom-right' />
      <div className={ styles.itemCounter__counter }>
        <Counter count={ count } handleCountPlus={ handleCountPlus } handleCountMinus={ handleCountMinus } />
      </div>
      <div className={ styles.itemCounter__add_cart }>
        <button onClick={ handleAdd } className='btn btn-lg btn-block w-100'>
          { loading ? <AppSpinner variant='light' size='sm' withClass={false}/>
                    : 'Agregar al carrito' 
          }
        </button>
      </div>
    </div>
  );
}