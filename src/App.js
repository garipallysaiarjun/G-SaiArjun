import React,{useState} from 'react'
import Signup from './Components/Signup'
import Details from './Components/Details/Details'

const App = () => {
  const [submit, setSubmit] = useState(false)
  const submitHandler=()=> {
    setSubmit(true)
  }
  return (
    <div>
      {! submit && <Signup submit={submitHandler}/>}
      {submit && <Details/>}
    </div>
  )
}

export default App;
