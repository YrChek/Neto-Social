import { useContext } from "react"
import MyContext from "../context/AuthContext"

export default function UserForm() {

  const {user, out} = useContext(MyContext)

  const style = {
    color: 'red'
  }

  return (
    <div className="user_form">
      {user.error ? <span className="user_name" style={style}>{user.name}</span> : <span className="user_name">Hello {user.name}</span>}
      <div className="user_avatar">
        <img src={user.avatar} alt="" className="avatar"/>
      </div>
      <button className="btn button_out" onClick={out}>Logout</button>
    </div>
  )
}
