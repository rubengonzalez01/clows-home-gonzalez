import MyNavbar from "../Navbar/MyNavbar";
import PropTypes from 'prop-types';
import ControlledCarousel from "../Carousel/ControlledCarousel";

export default function Layout( props ) {
  return(
    <>
      <MyNavbar />
      <ControlledCarousel />
      <div>
        { props.children }
      </div>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
}