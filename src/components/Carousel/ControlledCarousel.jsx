import { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { useWindowSize } from '../../hooks/useWindowsSize';
import foto1 from '../../assets/carousel/banner1.webp';
import foto2 from '../../assets/carousel/banner2.webp';
import foto3 from '../../assets/carousel/banner3.webp';
import foto4 from '../../assets/carousel/banner1b.webp';
import foto5 from '../../assets/carousel/banner2b.webp';
import foto6 from '../../assets/carousel/banner3b.webp';
import styles from './ControlledCarousel.module.scss';

export default function ControlledCarousel() {
  const [width] = useWindowSize();
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel className={ styles.controlledCarousel } activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        {
          // eslint-disable-next-line no-restricted-globals
          width < 992 ? 
            <img className="d-block w-100" alt='sanicat sale' src={ foto4 } /> : 
            <img className="d-block w-100" alt='sanicat sale' src={ foto1 } />
        }
      </Carousel.Item>
      <Carousel.Item>
        {
          // eslint-disable-next-line no-restricted-globals
          width < 992 ? 
            <img className="d-block w-100" alt='shipping cost' src={ foto5 } /> : 
            <img className="d-block w-100" alt='shipping cost' src={ foto2 } />
        }
      </Carousel.Item>
      <Carousel.Item>
        {
          // eslint-disable-next-line no-restricted-globals
          width < 992 ? 
            <img className="d-block w-100" alt='linda smart' src={ foto6 } /> : 
            <img className="d-block w-100" alt='linda smart' src={ foto3 } />
        }
      </Carousel.Item>
    </Carousel>
  );
}