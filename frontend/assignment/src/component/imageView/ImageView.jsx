import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from "@tanstack/react-query";
import fetchImages from '../api/fetchApi';
import "./imageView.css";

const TitlebarImageList = () => {
  const navigate = useNavigate();
  
  const { data, isLoading } = useQuery({
    queryKey: ["images"],
    queryFn: fetchImages
  });

  const handleImageClick = (id) => {
    navigate(`/image/${id}`);
  };

  return (
    <div className='image-view'>
      {isLoading && <p>Loading...</p>}
      {data && (
        <div className="image-list">
          {data.map((item) => (
            <div key={item._id} className="image-list-item" onClick={() => handleImageClick(item._id)}>
              <img
                src={item.url}
                alt={item.caption}
                loading="lazy"
              />
              <div className="image-details">
                <p className="image-title">{item.name}</p>
                <p className="image-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TitlebarImageList;
