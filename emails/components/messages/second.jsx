import { PropertyOwner, ListingPrice, Text, Bold } from "../text"

export const SecondMessage = (props) => {
  return (
    <>
      <Text>Hello <PropertyOwner {...props} />,</Text>
      <Text>I hope you're doing well. I wanted to follow-up and see if you received my last email.</Text>
      <Text>As a reminder regarding my last email, my company, CHALANT, specializes in Corporate Housing and can achieve <Bold>2X – 3X</Bold> your current rental asking rate of <ListingPrice {...props} />.</Text>
      <Text>You might be wondering how it's possible for us to make more money for your property than what you're currently charging. It's possible through our marketing efforts to our professional network.</Text>
      <Text>To discuss things further, it would be great if we could meet in person at a date and time that is convenient for you. If that doesn't work, I've provided a link below to schedule an introductory Zoom call between the two of us instead.</Text>
      <Text>Looking forward to hearing from you and achieving massive success together!</Text>
    </>
  )
}

export default SecondMessage;
