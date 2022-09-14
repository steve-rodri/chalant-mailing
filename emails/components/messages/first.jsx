import {
  PropertyOwner,
  LocatedAt,
  ListingPrice,
  ListingWebsite,
  PastDaysListed,
  MonthlyRate,
  DailyLoss,
  TotalLoss,
  Text,
  Bold,
} from "../text"

export const FirstMessage = (props) => {
  return (
    <>
      <Text>Hello <PropertyOwner {...props} />,</Text>
      <Text>
        I’d like to discuss an important opportunity regarding your property
        located <LocatedAt {...props} />. Your property is currently listed
        for <ListingPrice {...props} /> per month. My company, Chalant, can
        achieve <Bold>2X – 3X</Bold> your rental rate by utilizing your
        property for Corporate Housing. To be more specific, Chalant provides
        housing to business professionals, travel nurses, and corporate
        relocation providers that are willing to pay more money than your
        current rental rate.
      </Text>
      <Text>
        I noticed that your property has been
        posted on <ListingWebsite {...props} /> for the
        past <PastDaysListed {...props} />.
        At a rental rate of <MonthlyRate {...props} />/month, you’re
        losing <DailyLoss {...props} /> each day that the property
        remains unrented - <TotalLoss {...props} /> lost in
        the last <PastDaysListed {...props} /> alone. My company can
        assist in getting your property booked with high-quality
        corporate tenants.
      </Text>
      <Text>
        My company also carries up to $2,000,000 in liability insurance and
        property damage insurance for each property that we manage. If this
        is something that interests you, I’d like to discuss how we can work
        with you.
      </Text>
      <Text>
        It would be great if we could meet in
        person at a date and time that is convenient for you. If that doesn’t
        work, please provide the best phone number to reach you at. I’ve also
        provided a link below to schedule an introductory Zoom call between
        the two of us instead if that is preferable.
      </Text>
      <Text>Thank you and I look forward to speaking with you soon!</Text>
    </>
  )
}

export default FirstMessage;
