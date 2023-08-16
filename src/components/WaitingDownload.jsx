/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import getFetch from "./getFetch";
import MyContext from "../context/AuthContext";

export default function WaitingDownload() {

  const {token, setUser} = useContext(MyContext)

  useEffect(() => {
    const data = async () => { 
      const { data, error } = await getFetch('private/me', token, true)
      error ? setUser({name: 'Ошибка авторизации', error}) : setUser(data)
    }
    data()
  }, [])

  return <div className="load">...Authorization</div>
}
