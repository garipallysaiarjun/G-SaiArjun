import React,{useState} from 'react'
import './Details.css'
import axios from "axios"

const Details = () => {
  const [user, setUser] = useState([])
  const onClick=()=>{
    axios.get('https://ixonotest.herokuapp.com/api/User/get-profiles')
    .then(res=>setUser(res.data))
  }
  const Click=()=>{
    setUser([])
  }
  return (
    <div>
      <button className='clear' onClick={Click}>Clear All</button>
      <br />
      <button className='details' onClick={onClick}>Show Details</button>
      <div>
        <table>
          <tr>
            <th>S.No</th>
            <th>Email</th>
            <th>Name</th>
            <th>Mobile Number</th>
            <th>Password</th>
            <th>Username</th>
          </tr>
          {
            user.map((item) =>
               <tr>
                 <td>{item.id}</td>
                 <td>{item.email}</td>
                 <td>{item.name}</td>
                 <td>{item.mobileNum}</td>
                 <td>{item.password}</td>
                 <td>{item.username}</td>
               </tr>
              )
          }
        </table>
      </div>
    </div>
  )
}

export default Details; 
