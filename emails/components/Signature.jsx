import { MjmlText } from "mjml-react";
import { leadingRelaxed, textBase } from "./theme";

const Text = ({ children, ...rest }) => (
  <MjmlText
    padding={0}
    lineHeight={leadingRelaxed}
    fontSize={textBase}
    {...rest}
  >
    {children}
  </MjmlText>
)

export const Signature = ({ sendingFrom }) => {
  return (
    <>
      <Text>{sendingFrom.name}</Text>
      <Text>{`${sendingFrom.title} | Chalant`}</Text>
      <Text><a href="tel:(631) 613-8674">(631) 613-8674</a></Text>
      <Text><a href="https://chalant.rentals">https://chalant.rentals</a></Text>
    </>

  )
}

export default Signature


