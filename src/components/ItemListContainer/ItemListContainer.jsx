import Item from "../Item/Item";
import styles from './ItemListContainer.module.scss';

export default function ItemListContainer({ title }) {
  return (
    <>
      <h1>{ title }</h1>
      <div className={ styles.itemContainer }>
        <div className={ styles.itemContainer__group }>
          <Item />    
          <Item />    
          <Item />    
          <Item />    
          <Item />    
          <Item /> 
        </div>
      </div>
    </>
  );
}