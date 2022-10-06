import Prospecting from "../Prospecting"

export const FirstMessage = () => {
  return (
    <Prospecting
      emailsSent={0}
      sendingFrom={{ name: "Steve Rodriguez", email: "steve@chalant.rentals", title: "Founder" }}
      propertyOwner="Shari"
      locatedAt="at 70 Greybarn Lane, Amityville, NY"
      listing={{ price: 4000, website: "Craigslist", url: "https://steverodri.com" }}
      pastDaysListed="13 days"
      monthlyRate={2000}
      dailyLoss={100}
      totalLoss={1300}
    />
  )
}

export const SecondMessage = () => {
  return (
    <Prospecting
      emailsSent={1}
      sendingFrom={{ name: "Steve Rodriguez", email: "steve@chalant.rentals", title: "Founder" }}
      propertyOwner="Shari"
      listing={{ price: 4000, website: "Craigslist", url: "https://steverodri.com" }}
    />
  )
}

export const ThirdMessage = () => {
  return (
    <Prospecting
      emailsSent={2}
      sendingFrom={{ name: "Steve Rodriguez", email: "steve@chalant.rentals", title: "Founder" }}
      propertyOwner="Shari"
      listing={{ price: 4000, website: "Craigslist", url: "https://steverodri.com" }}
    />
  )
}

export const FourthMessage = () => {
  return (
    <Prospecting
      emailsSent={3}
      sendingFrom={{ name: "Steve Rodriguez", email: "steve@chalant.rentals", title: "Founder" }}
      propertyOwner="Shari"
      listing={{ price: 4000, website: "Craigslist", url: "https://steverodri.com" }}
    />
  )
}
