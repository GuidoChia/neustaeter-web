import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithVideo.js";
import Features from "components/features/ThreeColSimple.js";
import MainFeature from "components/features/TwoColWithButton.js";
import TabGrid from "components/cards/TabCardGrid.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import ContactUsForm from "components/forms/SimpleContactUs.js";

import chefIconImageSrc from "images/chef-icon.svg";
import celebrationIconImageSrc from "images/celebration-icon.svg";
import shopIconImageSrc from "images/shop-icon.svg";
import galponOneImageSrc from "images/products/galpon1.jpg";
import galponTwoImageSrc from "images/products/galpon2.jpg";

export default () => {
  const Subheading = tw.span`tracking-wider text-sm font-medium`;
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12`;
  const HighlightedTextInverse = tw.span`bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block`;
  const Description = tw.span`inline-block mt-8`;
  const imageCss = tw`rounded-4xl`;
  return (
    <AnimationRevealPage disabled>
      <Hero
        heading={
          <>
            Metalurgia <HighlightedText>Menonita</HighlightedText>
          </>
        }
        description="Metalurgia de confianza desde la colonia menonita."
        imageSrc={galponOneImageSrc}
        imageCss={imageCss}
      />
      <MainFeature
        subheading={<Subheading>Establecidos en AÑO</Subheading>}
        heading={
          <>
            Trabajando hace
            <br />
            <HighlightedText>más de 10 años.</HighlightedText>
          </>
        }
        description={
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <br />
            <br />
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </Description>
        }
        buttonRounded={false}
        textOnLeft={false}
        primaryButtonText="Latest Offers"
        imageSrc={galponTwoImageSrc}
        imageCss={imageCss}
        imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
      />
      {/* TabGrid Component also accepts a tabs prop to customize the tabs and its content directly. Please open the TabGrid component file to see the structure of the tabs props.*/}
      <TabGrid heading={<>Nuestros productos</>} />
      <ContactUsForm/>
      <Footer />
    </AnimationRevealPage>
  );
};
