import ItemDetailContainer from '../../components/ItemDetailContainer/ItemDetailContainer';
import styles from './Detail.module.scss';

export default function Detail() {

  return (
    <div className={`pt-4 pb-5 ${ styles.detail }`}>
      <ItemDetailContainer />
    </div>
  );
}