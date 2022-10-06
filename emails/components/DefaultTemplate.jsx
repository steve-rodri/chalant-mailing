import Head from "./Head";
import Header from "./Header";
import Footer from "./Footer";
import ListingReference from "./ListingReference"
import BookACallButton from "./BookACallButton"
import Signature from "./Signature"
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
            <BookACallButton {...rest} />
            <Spacer height={space.lg} />
            <ListingReference {...rest} />
            <Spacer height={space.lg} />
            <Spacer height={space.lg} />
            <Spacer height={space.lg} />
            <Signature {...rest} />
          </Column>
        </Section>
        <Footer />
      </Body>
    </Mjml>
  );
};


export default DefaultTemplate
