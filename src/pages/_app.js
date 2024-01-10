import React from 'react';
import Layout from '../components/Layout';
// import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/globals.css';
// import '../assets/js/vendor/jquery-3.6.0.min.js';
// import '../assets/js/popper.min.js';
// import '../assets/js/bootstrap.min.js';
// import '../assets/js/isotope.pkgd.min.js';
// import '../assets/js/imagesloaded.pkgd.min.js';
// import '../assets/js/jquery.magnific-popup.min.js';
// import '../assets/js/owl.carousel.min.js';
// import '../assets/js/jquery.odometer.min.js';
// import '../assets/js/jquery.appear.js';
// import '../assets/js/slick.min.js';
// import '../assets/js/ajax-form.js';
// import '../assets/js/wow.min.js';
// import '../assets/js/aos.js';
// import '../assets/js/plugins.js';
// import '../assets/js/main.js';


 {/* <script src="../assets/js/vendor/jquery-3.6.0.min.js"></script>
<script src="js/popper.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/isotope.pkgd.min.js"></script>
<script src="js/imagesloaded.pkgd.min.js"></script>
<script src="js/jquery.magnific-popup.min.js"></script>
<script src="js/owl.carousel.min.js"></script>
<script src="js/jquery.odometer.min.js"></script>
<script src="js/jquery.appear.js"></script>
<script src="js/slick.min.js"></script>
<script src="js/ajax-form.js"></script>
<script src="js/wow.min.js"></script>
<script src="js/aos.js"></script>
<script src="js/plugins.js"></script>
<script src="js/main.js"></script> */}

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;