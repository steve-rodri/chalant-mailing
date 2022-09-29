import { PropertyOwner, ListingPrice, Text, Bold } from "../text"

export const FourthMessage = (props) => {
  return (
    <>
      <Text>Hello <PropertyOwner {...props} />,</Text>
      <Text>Did you see the previous emails I sent?</Text>
      <Text>Would you be against having a brief 5-minute phone call to discuss the opportunity on how we can achieve <Bold>2X – 3X</Bold> your asking rental rate of <ListingPrice {...props} />?</Text>
      <Text>To discuss things further, it would be great if we could meet in person at a date and time that is convenient for you. If that doesn't work, I've provided a link below to schedule an introductory Zoom call between the two of us instead.</Text>
      <Text>Looking forward to achieving massive success with you!</Text>
    </>
  )
}

export default FourthMessage;
