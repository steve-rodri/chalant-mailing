import { DefaultTemplate } from "./components/DefaultTemplate"
import { FirstMessage } from "./components/messages"

export const Prospecting = (props) => {
  return (
    <DefaultTemplate url={props?.listing?.url}>
      <Message {...props} />
    </DefaultTemplate>
  )
}

const Message = (props) => {
  switch (props.status) {
    case "first": return <FirstMessage {...props} />
    default: return <FirstMessage {...props} />
  }
}

export default Prospecting
