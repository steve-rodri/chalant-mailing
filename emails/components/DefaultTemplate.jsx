import Head from "./Head";
import Footer from "./Footer";
import BookACallButton from "./BookACallButton";
import ViewBrochureButton from "./ViewBrochureButton";
import Signature from "./Signature";
import { brand, space } from "./theme";
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
      <Body width={600}>
        <Section cssClass="smooth" padding={`0 ${space.md}px`}>
          <Column>
            {children}
            <Spacer height={space.md} />
            <BookACallButton {...rest} />
            <Spacer height={space.lg} />
            <Signature {...rest} />
            <Spacer height={space.lg} />
            <ViewBrochureButton />
            <Spacer height={space.sm} />
          </Column>
        </Section>
        <Footer {...rest} />
      </Body>
    </Mjml>
  );
};

export default DefaultTemplate;
