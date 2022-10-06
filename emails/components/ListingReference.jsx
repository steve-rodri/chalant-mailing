import { Text, ListingURL } from "./text"

export const ListingReference = ({ listing }) => {
  return (
    <>
      <Text align="center" padding="0">Your Listing (for reference):</Text>
      <ListingURL listing={listing} />
    </>
  )
}

export default ListingReference
