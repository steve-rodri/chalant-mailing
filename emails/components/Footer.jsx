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
          © 2022 Chalant LLC&nbsp;&nbsp;·&nbsp;&nbsp;
          <a href="#" target="_blank">
            Unsubscribe
          </a>
        </MjmlText>
      </MjmlColumn>
    </MjmlSection>
  );
}
