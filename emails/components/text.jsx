import { MjmlText } from "mjml-react";
import { leadingRelaxed, textBase, space } from "./theme";

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
    <MjmlText style={{ fontWeight: "700" }} lineHeight={leadingRelaxed}>{children}</MjmlText>
  )
}

export const PropertyOwner = ({ propertyOwner = "Property Owner" }) => {
  return <Text>{propertyOwner}</Text>
}

export const LocatedAt = ({ locatedAt }) => {
  return <Text>{locatedAt}</Text>
}

export const ListingPrice = ({ listingPrice }) => {
  return <Text>{listingPrice}</Text>
}

export const ListingWebsite = ({ listingWebsite }) => {
  return <Text>{listingWebsite}</Text>
}
export const ListingURL = ({ listingUrl }) => {
  return <Text align="center" padding="0">{listingUrl}</Text>
}

export const PastDaysListed = ({ pastDaysListed }) => {
  return <Text>{pastDaysListed}</Text>
}

export const MonthlyRate = ({ monthlyRate }) => {
  return <Text>{monthlyRate}</Text>
}

export const DailyLoss = ({ dailyLoss }) => {
  return <Text>{dailyLoss}</Text>
}

export const TotalLoss = ({ totalLoss }) => {
  return <Text>{totalLoss}</Text>
}
