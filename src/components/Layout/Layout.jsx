import MyNavbar from "../Navbar/MyNavbar";
import PropTypes from 'prop-types';

export default function Layout( props ) {
  return(
    <>
      <MyNavbar />
      <div>
        { props.children }
      </div>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
}