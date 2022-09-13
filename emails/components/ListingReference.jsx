import { Text, ListingURL } from "./text"

export const ListingReference = ({ url }) => {
  return (
    <>
      <Text align="center" padding="0">Your Listing: (for Reference)</Text>
      <ListingURL listingUrl={url} align="center" />
    </>
  )
}

export default ListingReference
