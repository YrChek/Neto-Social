import { createContext } from "react";

const MyContext = createContext({
  token: 'null',
  user: 'null',
  setUser: () => {console.log('Ошибка контекста')},
  auth: () => {console.log('Ошибка контекста')},
  out: () => {console.log('Ошибка контекста')}
})

export default MyContext
