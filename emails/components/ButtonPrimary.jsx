import { MjmlButton } from "mjml-react";
import { brand } from "./theme";
import { leadingTight, textBase, borderBase } from "./theme";

const ButtonPrimary = ({ link, uiText }) => {
  return (
    <MjmlButton
      lineHeight={leadingTight}
      fontSize={textBase}
      height={75}
      padding="0"
      align="center"
      href={link}
      backgroundColor={brand.blue.dark}
      borderRadius={borderBase}
      width="100%"
    >
      {uiText}
    </MjmlButton>
  );
};

export default ButtonPrimary;
