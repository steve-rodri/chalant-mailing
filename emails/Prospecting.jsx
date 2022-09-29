import { DefaultTemplate } from "./components/DefaultTemplate"
import { FirstMessage, SecondMessage, ThirdMessage, FourthMessage } from "./components/messages"

export const Prospecting = (props) => {
  return (
    <DefaultTemplate listing={props?.listing}>
      <Message {...props} />
    </DefaultTemplate>
  )
}

const Message = (props) => {
  switch (props.emailsSent) {
    case 1: return <SecondMessage {...props} />
    case 2: return <ThirdMessage {...props} />
    case 3: return <FourthMessage {...props} />
    default: return <FirstMessage {...props} />
  }
}

export default Prospecting
