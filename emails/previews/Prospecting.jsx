import Prospecting from "../Prospecting"

export const FirstMessage = () => {
  return (
    <Prospecting
      status="first"
      propertyOwner="Steve"
      locatedAt="Westbury, NY"
      listing={{ price: 3000, website: "Craigslist", url: "#" }}
      pastDaysListed={10}
      monthlyRate={2000}
      dailyLoss={100}
      totalLoss={1000}
    />
  )
}
