import Head from "./Head";
import Header from "./Header";
import Footer from "./Footer";
import ButtonPrimary from "./ButtonPrimary";
import ListingReference from "./ListingReference"
import { SocialIcons } from "./SocialIcons"
import { brand, space } from "./theme"
import {
  Mjml,
  MjmlBody as Body,
  MjmlSection as Section,
  MjmlColumn as Column,
  MjmlSpacer as Spacer,
} from "mjml-react";

export const DefaultTemplate = ({ children, ...rest }) => {
  return (
    <Mjml>
      <Head />
      <Body width={600} backgroundColor={brand.blue.light}>
        <Header />
        <Section cssClass="smooth" padding={`0 ${space.md}px`}>
          <Column>
            {children}
            <Spacer height={space.lg} />
            <ButtonPrimary link="https://linktr.ee/chalant.rentals" uiText="Get In Touch" />
            <Spacer height={space.lg} />
            <SocialIcons />
            <ListingReference {...rest} />
          </Column>
        </Section>
        <Footer />
      </Body>
    </Mjml>
  );
};

export default DefaultTemplate
