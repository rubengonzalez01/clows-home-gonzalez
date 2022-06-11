import { BiMinus, BiPlus } from 'react-icons/bi';
import styles from './Counter.module.scss';

export default function Counter({ handleCountMinus, handleCountPlus, count }){
  return (
    <div className={ styles.counter__pannel }>
      <button onClick={handleCountMinus} className={ styles.counter__button }>
        <BiMinus />
      </button>
      <span className={ styles.counter__count }>{ count }</span>
      <button onClick={handleCountPlus} className={ styles.counter__button }>
        <BiPlus />
      </button>
    </div>
  );
}