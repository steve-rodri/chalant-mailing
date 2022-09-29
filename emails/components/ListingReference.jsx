import { Text, ListingURL } from "./text"

export const ListingReference = ({ listing }) => {
  return (
    <>
      <Text align="center" padding="0">Your Listing: (for Reference)</Text>
      <ListingURL listing={listing} align="center" />
    </>
  )
}

export default ListingReference
