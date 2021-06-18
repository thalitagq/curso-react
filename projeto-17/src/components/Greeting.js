import { useState } from "react"
import Output from './Output'
import Async from './Async'
const Greeting = () => {
  const [changedText, setChangedText] = useState(false)
  
  const ChangeTextHandler = () => {
    setChangedText(true)
  }

  return (
    <div>
      <h2>Hello</h2>
      {!changedText && <Output>It's good to see you</Output>}
      {changedText && <Output>Changed</Output>}
      <button onClick={ChangeTextHandler}>Change Text</button>
      <Async/>
    </div>
  );

}

export default Greeting