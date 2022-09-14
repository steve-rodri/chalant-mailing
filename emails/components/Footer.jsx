import { MjmlSection, MjmlColumn, MjmlText } from "mjml-react";
import { grayDark, textSm } from "./theme";

export default function Footer() {
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
      </MjmlColumn>
    </MjmlSection>
  );
}
