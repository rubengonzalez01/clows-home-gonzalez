import MyNavbar from "../Navbar/MyNavbar";
import PropTypes from 'prop-types';
import Footer from "../Footer/Footer";

export default function Layout( props ) {
  return(
    <>
      <MyNavbar />
      <div>
        { props.children }
      </div>
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
}