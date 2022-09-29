import { PropertyOwner, ListingPrice, Text, Bold } from "../text"

export const ThirdMessage = (props) => {
  return (
    <>
      <Text>Hello <PropertyOwner {...props} />,</Text>
      <Text>I hope you're doing well. I wanted to follow-up and see if you received my last two emails.</Text>
      <Text>As a reminder regarding my last email, my company, CHALANT, specializes in Corporate Housing and can achieve <Bold>2X – 3X</Bold> your current rental asking rate of <ListingPrice {...props} />. I wanted to add that in addition to everything I mentioned previously, I'd like to offer you our services in a 90 Day Trial where my company will show you just how much money we can make for your property in Corporate Housing. In other words, if we don't perform within 90 days, we get fired! That's why we're going to work as hard as possible to achieve top tier results for your property.</Text>
      <Text>To discuss things further, it would be great if we could meet in person at a date and time that is convenient for you. If that doesn't work, I've provided a link below to schedule an introductory Zoom call between the two of us instead.</Text>
      <Text>Looking forward to achieving massive success with you!</Text>
    </>
  )
}

export default ThirdMessage;
