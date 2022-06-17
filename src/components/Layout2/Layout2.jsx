import MyNavbar2 from "../Navbar/MyNavbar2";
import PropTypes from 'prop-types';
import Footer from "../Footer/Footer";

export default function Layout( props ) {
  return(
    <>
      <MyNavbar2 />
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