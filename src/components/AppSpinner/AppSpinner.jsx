import styles from './AppSpinner.module.scss';
import { Spinner } from 'react-bootstrap';

export default function AppSpinner({ variant, size, withClass }) {
  return (
    <div className={ withClass ? styles.appSpinner : '' }>
      <Spinner variant={ variant } animation="border" role="status" size={ size }>
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}