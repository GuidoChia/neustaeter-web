import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/MiniCenteredFooter.js";
//import ContactUsForm from "components/forms/TwoColContactUsWithIllustrationFullForm.js";
import ContactUsForm from "components/forms/SimpleContactUs.js";
import ContactDetails from "components/cards/ThreeColContactDetails.js";

const Address = tw.span`leading-relaxed`;
const AddressLine = tw.span`block`;
const Email = tw.span`text-sm mt-6 block text-gray-500`;
const Phone = tw.span`text-sm mt-0 block text-gray-500`;

export default () => {
  return (
    <AnimationRevealPage disabled>
      <Header />
      <ContactUsForm />
      {/*<ContactDetails
        cards={[
          {
            title: "New York",
            description: (
              <>
                <Address>
                  <AddressLine>40 Gates Court</AddressLine>
                  <AddressLine>Endicott, NY 13760</AddressLine>
                </Address>
                <Email>contact@treact.com</Email>
                <Phone>+1 (203) 991-6988</Phone>
              </>
            ),
          }
        ]}
      />*/}
      <Footer />
    </AnimationRevealPage>
  );
};
