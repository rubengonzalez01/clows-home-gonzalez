import styles from './StoreMap.module.scss';

export default function StoreMap() {
  const storeList = [
    {
      id: 1,
      city: 'Ramos Mejia',
      name: "Clow's Home - Ramos 1",
      location: 'Belgrano 70, Ramos Mejia, Provincia de Buenos Aires.'
    },
    {
      id: 2,
      city: 'Ramos Mejia',
      name: "Clow's Home - Ramos 2",
      location: 'Av. de Mayo 850, Ramos Mejia, Provincia de Buenos Aires.'
    },
    {
      id: 3,
      city: 'Haedo',
      name: "Clow's Home - Haedo",
      location: 'Av. Rivadavia 16254, Haedo, Provincia de Buenos Aires.'
    },
    {
      id: 4,
      city: 'Morón',
      name: "Clow's Home - Morón",
      location: 'Almte. Guillermo Brown 754, Morón, Provincia de Buenos Aires.'
    },
    {
      id: 5,
      city: 'San Justo',
      name: "Clow's Home - Ramos 2",
      location: 'Dr. Ignacio Arieta 3298, San Justo, Provincia de Buenos Aires.'
    },
  ];

  return (
    <div className={`container ${ styles.storeMap }`}>
      <h3 className={ styles.storeMap__title }>Nuestras Sucursales</h3>
      <div className={ styles.storeMap__data }>
        <div className={ styles.storeMap__card_container }>
          {
            storeList.map(store => (
              <div key={store.id} className={ styles.storeMap__card }>
                <h5 className={ styles.storeMap__card_title }>{ store.city }</h5>
                <p className={ styles.storeMap__card_text }>{ store.name }</p>
                <p className={ styles.storeMap__card_text }>{ store.location }</p>
              </div>
            ))
          }
        </div>
        <div className={ styles.storeMap__map_container }>
          <iframe 
            src="https://www.google.com/maps/d/u/0/embed?mid=1HFSOHNvm-IwXwqjXbhyWJwF8BQzXqRY&ehbc=2E312F" 
            width="100%" 
            height="100%"
            title='Sucursales'>
          </iframe>
        </div>
      </div>
    </div>
  );
}