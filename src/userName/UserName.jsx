import {useContext} from 'react'
import { UserContext } from '../context/UserProvide'



export default function UserName() {

    const {name} = useContext(UserContext)

  return (
    <div>
      <h1>{name}</h1>
    </div>
  )
}
