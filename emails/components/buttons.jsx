import { MjmlButton } from "mjml-react";
import { brand, textSm, black } from "./theme";
import { leadingTight, textBase, borderBase } from "./theme";

export const ButtonPrimary = ({ link, uiText, ...rest }) => {
  return (
    <MjmlButton
      lineHeight={leadingTight}
      fontSize={textBase}
      innerPadding="25px 60px"
      align="center"
      href={link}
      backgroundColor={brand.blue.dark}
      borderRadius={borderBase}
      {...rest}
    >
      {uiText}
    </MjmlButton>
  );
};

export const ButtonSecondary = ({ link, uiText, ...rest }) => {
  return (
    <MjmlButton
      lineHeight={leadingTight}
      fontSize={textSm}
      innerPadding="12px 30px"
      padding={0}
      href={link}
      backgroundColor={brand.blue.medium}
      color={black}
      borderRadius={borderBase}
      {...rest}
    >
      {uiText}
    </MjmlButton>
  );
};

export default ButtonPrimary;
