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
import galponOneImageSrc from "images/products/galpones y tinglados/galpon4.jpg";
import galponTwoImageSrc from "images/products/inicio2.jpg";

export default () => {
  const Subheading = tw.span`tracking-wider text-sm font-medium`;
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12`;
  const HighlightedTextInverse = tw.span`bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block`;
  const Description = tw.span`inline-block mt-8`;
  const imageCss = tw``;
  return (
    <AnimationRevealPage disabled>
      <Hero
        heading={
          <>
            Metal <HighlightedText>Menonita</HighlightedText>
          </>
        }
        description="Colonia menonita, Guatrache, La Pampa.
        <br />15 años de experiencia, fabricado y armado por nosotros, calidad en materiales, construcción y armado.<br/>Llamá al: <b>2954-400084</b>"
        imageSrc={galponOneImageSrc}
        imageCss={imageCss}
      />
      <MainFeature
        heading={
          <>
            Más de 15 años
            <br />
            <HighlightedText> nos avalan.</HighlightedText>
          </>
        }
        description={
          <Description>
            Venta de:
            <ul>
              <li>Silos aéreos de 6 a 120 toneladas</li>
              <li>Comederos autoconsumo de 1,8 a 18 toneladas</li>
              <li>Sin fines de 7 a 16 metros</li>
              <li>Silos para fertilizantes</li>
              <li>Elevadores de rollos</li>'<li>Carros tipofama</li>
              <li>Carros para hacienda</li>
              <li>Carros tipofama</li>
            </ul>
            Transporte y armado exclusivo de la fabrica.
            <br />
            <br />
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
      <ContactUsForm />
      <Footer />
    </AnimationRevealPage>
  );
};
