import MyNavbar from "../Navbar/MyNavbar";
import PropTypes from 'prop-types';
import ControlledCarousel from "../Carousel/ControlledCarousel";
import PurchaceOptions from "../PurchaceOptions/PurchaceOptions";

export default function Layout( props ) {
  return(
    <>
      <MyNavbar />
      <ControlledCarousel />
      <PurchaceOptions />
      <div>
        { props.children }
      </div>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
}