import { ButtonPrimary } from "./buttons";

const getFirstName = (name) => {
  if (!name) return;
  const [first] = name.split(" ")
  return first.toLowerCase()
}

export const BookACallButton = ({ sendingFrom }) => {
  const firstName = getFirstName(sendingFrom?.name)
  const link = `https://calendly.com/chalant-${firstName}/introduction`
  if (!firstName) return;
  return (
    <ButtonPrimary link={link} uiText="Book a Call" />
  )
}

export default BookACallButton
