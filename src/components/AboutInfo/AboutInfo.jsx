import styles from './AboutInfo.module.scss';
import image from '../../assets/logo/ragdoll.png';

export default function AboutInfo() {
  return(
    <div className={`container ${ styles.aboutInfo }`}>
      <h3 className={ styles.aboutInfo__title }>Nosotros</h3>
      <div className={ styles.aboutInfo__container }>
        <div className={ styles.aboutInfo__image }>
          <img src={ image } alt="nosotros" />
        </div>
        <div className={ styles.aboutInfo__body }>
          <p className={ styles.aboutInfo__intro }>
            Clow's Home surge como una dedicatoria a Clow, mi amado compañero felino, que acompaña mi día a día brindando sus caricias y locuras. De ahí también la gama de colores elegida para la marca.<br />
            La premisa de la idea es proporcionar a nuestras amadas mascotas grán variedad de productos para su bienestar y entretenimiento. <br />
            El amor por lo que hacemos y la calidez humana es lo que nos caracteriza.
          </p>
          <div className={ styles.aboutInfo__text_container }>
            <h5 className={ styles.aboutInfo__title_descr }>Nuestra Misión</h5>
            <p className={ styles.aboutInfo__description }>
            Contribuimos a crear un mundo mejor.
            Ayudamos a amar y proteger a sus mascotas.
            Creamos equipos de trabajo solidarios, proactivos y capacitados.
            Invertimos e Innovamos para poder seguir mejorando y poder acercarnos cada día más.
            Priorizamos el aporte y la participación solidaria para crear una comunidad inclusiva y el cuidado del medio ambiente.
            </p>
          </div>          
        </div>
      </div>
      <div className={ styles.aboutInfo__group }>
        <h5 className={ styles.aboutInfo__title_descr }>Nuestras Valores</h5>
        <div className={ styles.aboutInfo__text_group }>
          <div className={ styles.aboutInfo__group_block }>
            <h5 className={ styles.aboutInfo__text_group_title }>Confianza</h5>
            <p className={ styles.aboutInfo__description_center }>
              La seguridad en nosotros mismos por lo que hacemos tras tantos años en el rubro. La familiaridad y esperanza depositada por nuestros clientes para poder cumplir con sus deseos con la mejor calidad y tiempo posible.
            </p>
          </div>
          <div className={ styles.aboutInfo__group_block }>
            <h5 className={ styles.aboutInfo__text_group_title }>Amor</h5>
            <p className={ styles.aboutInfo__description_center }>
              Es el vínculo de afecto que nace de la valoración por lo que hacemos, nuestras mascotas y clientes. Puede verse como un valor o como una propiedad de las relaciones que hemos establecido.
            </p>
          </div>
          <div className={ styles.aboutInfo__group_block }>
            <h5 className={ styles.aboutInfo__text_group_title }>Calidez</h5>
            <p className={ styles.aboutInfo__description_center }>
              Refleja el amor, la vocación y el respeto a los demás. Es el afecto, la cordialidad y la amabilidad en el trato con nuestros compañeros, clientes, socios comerciales y demás interlocutores.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}