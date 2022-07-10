import styles from './PurchaseSummaryItem.module.scss';

export default function PurchaseSummaryItem({ item }) {
  const currency = Intl.NumberFormat('de-DE');

  return (
    <div className={ styles.purchaseSummaryItem }>
      <div className={ styles.purchaseSummaryItem__wrapper }>
        <div className={ styles.purchaseSummaryItem__image_container }>
          <img className={ styles.purchaseSummaryItem__image } src={ item.image } alt={ item.title } />
        </div>
        <div className={ styles.purchaseSummaryItem__data }>
          <h5 className={ styles.purchaseSummaryItem__title }>{ item.name }</h5>
          <span className={ styles.purchaseSummaryItem__price }>$ { currency.format(item.price) }</span>
          <span className={ styles.purchaseSummaryItem__quantity }>Cantidad: { item.quantity }</span>
        </div>
      </div>
    </div>
  );
}