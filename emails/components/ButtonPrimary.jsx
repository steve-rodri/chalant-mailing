import { MjmlButton } from "mjml-react";
import { brand } from "./theme";
import { leadingTight, textBase, borderBase } from "./theme";

const ButtonPrimary = ({ link, uiText }) => {
  return (
    <MjmlButton
      lineHeight={leadingTight}
      fontSize={textBase}
      innerPadding="25px 60px"
      align="center"
      href={link}
      backgroundColor={brand.blue.dark}
      borderRadius={borderBase}
    >
      {uiText}
    </MjmlButton>
  );
};

export default ButtonPrimary;
