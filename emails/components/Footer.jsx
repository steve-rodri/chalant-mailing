import { MjmlSection, MjmlColumn, MjmlText } from "mjml-react";
import { ListingURL } from "./text";
import { grayDark, textSm } from "./theme";

export default function Footer(props) {
  return (
    <MjmlSection cssClass="smooth">
      <MjmlColumn>
        <MjmlText
          cssClass="footer"
          fontSize={textSm}
          color={grayDark}
        >
          © 2022 Chalant LLC
        </MjmlText>
        <ListingURL {...props} />
      </MjmlColumn>
    </MjmlSection>
  );
}
