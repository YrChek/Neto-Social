/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import getFetch from "./getFetch";
import NewsItem from "./NewsItem";
import MyContext from "../context/AuthContext";

export default function News() {

  const [data, setData] = useState([]);
  const { token, out } = useContext(MyContext)

  useEffect(() => {
    const data = async () => { 
      const { data, error } = await getFetch('private/news', token, false)
      if (error) {
        if (error === 401) out()
      } else {
        setData(data)
        }
    }
    data()
  }, [])

  return (
    <div className="news">
      {data.map(el => <NewsItem data={el} key={el.id} />)}
    </div>
  )
}
