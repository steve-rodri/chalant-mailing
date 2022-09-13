import Prospecting from "../Prospecting"

export const FirstMessage = () => {
  return (
    <Prospecting
      status="first"
      propertyOwner="Steve"
      locatedAt="Westbury, NY"
      listingPrice="$3000"
      listingWebsite="Craigslist"
      listingUrl="#"
      pastDaysListed={10}
      monthlyRate={2000}
      dailyLoss={100}
      totalLoss={1000}
    />
  )
}
