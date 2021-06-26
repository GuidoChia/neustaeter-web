import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import { css } from "styled-components/macro"; //eslint-disable-line

/*
 * This is the entry point component of this project. You can change the below exported default App component to any of
 * the prebuilt landing page components by uncommenting their import and export lines respectively.
 * See one of the landing page components to better understand how to import and render different components (Always
 * make sure if you are building your own page, the root component should be the AnimationRevealPage component. You can
 * disable the animation by using the disabled prop.
 *
 * The App component below is using React router to render the landing page that you see on the live demo website
 * and the component previews.
 *
 */

/* Use AnimationRevealPage as a wrapper component for your pages if you are custom building it */
// import AnimationRevealPage from "helpers/AnimationRevealPage.js";

import LandingPage from "demos/LandingPage.js";
import Footer from "components/footers/MiniCenteredFooter.js";

import Header from "components/headers/light.js";
//import MainLandingPage from "MainLandingPage.js";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TabCardGrid from "components/cards/TabCardGrid";
import AnimationRevealPage from "helpers/AnimationRevealPage";
import AboutUs from "pages/AboutUs";
import ContactUs from "pages/ContactUs";


export default function App() {
  // return <AnimationRevealPage disabled></AnimationRevealPage>;
  return (
    <Router>
      <Switch>
        <Route path="/productos" >
          <AnimationRevealPage disabled>
            <Header />
            <TabCardGrid heading="Productos" />
            <Footer />
          </AnimationRevealPage>
        </Route>
        <Route path="/contacto">
          <ContactUs />
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  );
}

// export default EventLandingPage;
// export default HotelTravelLandingPage;
// export default AgencyLandingPage;
// export default SaaSProductLandingPage;
//export default RestaurantLandingPage;
// export default ServiceLandingPage;
// export default HostingCloudLandingPage;

// export default LoginPage;
// export default SignupPage;
// export default PricingPage;
// export default AboutUsPage;
// export default ContactUsPage;
// export default BlogIndexPage;
// export default TermsOfServicePage;
// export default PrivacyPolicyPage;

// export default MainLandingPage;
