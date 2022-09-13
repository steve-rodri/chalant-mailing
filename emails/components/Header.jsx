import { MjmlSection, MjmlColumn, MjmlImage } from "mjml-react";
import { space } from "./theme"


// const logoSymbol = "https://res.cloudinary.com/chalant/image/upload/v1663031659/logos/portrait/original-logo-symbol_crxvhv.png"
const portraitTransparent = "https://res.cloudinary.com/chalant/image/upload/v1663031659/logos/portrait/transparent-logo_spulk6.png"
// const landscapeTransparent = "https://res.cloudinary.com/chalant/image/upload/v1663031659/logos/landscape/transparent-logo_dzmki2.png"

const Header = () => {
  return (
    <MjmlSection padding={`${space.lg}px 0`}>
      <MjmlColumn>
        <MjmlImage
          src={portraitTransparent}
          height="123px"
          width="100px"
          padding="0"
          align="center"
          borderRadius={"50px"}
        />
      </MjmlColumn>
    </MjmlSection>
  );
};

export default Header;
