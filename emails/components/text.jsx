import { MjmlText } from "mjml-react";
import { leadingRelaxed, textBase, textSm, grayDark, space } from "./theme";

const numberWithCommas = (x) => {
  return Math.round(x).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const Text = ({ children, ...rest }) => {
  return (
    <MjmlText
      padding={`${space.md}px 0`}
      lineHeight={leadingRelaxed}
      fontSize={textBase}
      align="justify"
      {...rest}
    >
      {children}
    </MjmlText>
  )
}

export const Bold = ({ children }) => {
  return (
    <MjmlText style={{ fontWeight: "700" }} lineHeight={leadingRelaxed} fontWeight={700}>{children}</MjmlText>
  )
}

export const PropertyOwner = ({ propertyOwner = "Property Owner" }) => {
  return <Text>{propertyOwner}</Text>
}

export const LocatedAt = ({ locatedAt }) => {
  return <Text>{locatedAt}</Text>
}

export const ListingPrice = ({ listing }) => {
  return <Text>${numberWithCommas(listing?.price)}</Text>
}

export const ListingWebsite = ({ listing }) => {
  return <Text>{listing?.website}</Text>
}
export const ListingURL = ({ listing }) => {
  return (
    <MjmlText
      fontSize={textSm}
      color={grayDark}
    >
      <a href={listing?.url || "#"} style={{ color: grayDark }}>Your Listing</a>
    </MjmlText>
  )
}

export const PastDaysListed = ({ pastDaysListed }) => {
  return <Text>{pastDaysListed}</Text>
}

export const MonthlyRate = ({ monthlyRate }) => {
  return <Text>${numberWithCommas(monthlyRate)}</Text>
}

export const DailyLoss = ({ dailyLoss }) => {
  return <Text>${numberWithCommas(dailyLoss)}</Text>
}

export const TotalLoss = ({ totalLoss }) => {
  return <Text>${numberWithCommas(totalLoss)}</Text>
}
