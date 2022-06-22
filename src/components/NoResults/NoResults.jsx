import styles from './NoResults.module.scss';

export default function NoResults(){
  return (
    <section className={ styles.noResults }>
      <div>
        <div className={ styles.noResults__detail }>
          <h1>No hay productos que coincidan con tu búsqueda.</h1>
          <ul>
            <li>Revisá la ortografía de la palabra.</li>
            <li>Utilizá palabras más genéricas o menos palabras.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}