import Prospecting from "../Prospecting"

export const FirstMessage = () => {
  return (
    <Prospecting
      emailsSent={0}
      propertyOwner="Steve"
      locatedAt="Westbury, NY"
      listing={{ price: 3000, website: "Craigslist", url: "#" }}
      pastDaysListed="10 days"
      monthlyRate={2000}
      dailyLoss={100}
      totalLoss={1000}
    />
  )
}

export const SecondMessage = () => {
  return (
    <Prospecting
      emailsSent={1}
      propertyOwner="Steve"
      listing={{ price: 3000, website: "Craigslist", url: "#" }}
    />
  )
}

export const ThirdMessage = () => {
  return (
    <Prospecting
      emailsSent={2}
      propertyOwner="Steve"
      listing={{ price: 3000, website: "Craigslist", url: "#" }}
    />
  )
}

export const FourthMessage = () => {
  return (
    <Prospecting
      emailsSent={3}
      propertyOwner="Steve"
      listing={{ price: 3000, website: "Craigslist", url: "#" }}
    />
  )
}
