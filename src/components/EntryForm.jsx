import { useContext, useState } from "react";
import MyContext from "../context/AuthContext";

export default function EntryForm() {

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const { auth } = useContext(MyContext)

  const handlerForm = (e) => {
    e.preventDefault()
    auth({login, password})
  }
  
  return (
    <form className="form" onSubmit={handlerForm}>
      <input
        className="input username_form" 
        type="text" 
        placeholder='Username'
        value = {login}
        onChange={(e) => setLogin(e.target.value)} 
      />
      <input 
        className="input pasword_form" 
        type="text" 
        placeholder='Password'
        value = {password}
        onChange={(e) => setPassword(e.target.value)} 
      />
      <button className="btn button_form">Login</button>
    </form>
  )
}
