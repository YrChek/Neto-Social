import { useState } from "react";

export default function NewsItem({ data }) {
  const [image, setImage] = useState(data.image);

  const handleError = () => {
    setImage('no_photo.png')
  }

  return (
    <div className="newsItem">
      <div className="item-image-container">
          <div className="loader"></div>
          <img src={image} alt="" className="item-image" onError={handleError}/>
      </div>
      <div className="item-text">
        <h2>{data.title}</h2>
        <p>{data.content}</p>
      </div>
    </div>
  )
}
