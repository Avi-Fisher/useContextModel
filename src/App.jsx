import { useState } from 'react'
import './App.css'
import UserProfile from './UserProfile/UserProfile'
import { UserProvide } from './context/UserProvide'

function App() {
  const [name, setName] = useState("Alice")

  return (
    <>
      <UserProvide>
        <UserProfile/>

      
      </UserProvide>

      
    </>
  )
}

export default App
