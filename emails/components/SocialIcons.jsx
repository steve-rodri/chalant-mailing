import { MjmlSocial, MjmlSocialElement } from "mjml-react";
import { textBase, space } from "./theme"

export const SocialIcons = () => {
  return (
    <MjmlSocial fontSize={textBase} iconSize="35px" padding={`${space.xs}px 0`}>
      <MjmlSocialElement name="facebook" href="https://facebook.com/chalant.rentals" />
      <MjmlSocialElement name="instagram" href="https://instagram.com/chalant.rentals" />
    </MjmlSocial>
  )
}
