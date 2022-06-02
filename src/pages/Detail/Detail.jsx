import ItemDetailContainer from '../../components/ItemDetailContainer/ItemDetailContainer';
import styles from './Detail.module.scss';

export default function Detail() {

  const title = 'Detalle del producto';

  return (
    <div className={`pt-4 pb-5 ${ styles.ItemDetailContainer }`}>
      <ItemDetailContainer title={ title }/>
    </div>
  );
}