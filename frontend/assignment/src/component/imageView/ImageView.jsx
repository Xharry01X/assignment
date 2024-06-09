import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from "@tanstack/react-query";
import fetchImages from '../api/fetchApi';
import "./imageView.css";

const TitlebarImageList = () => {
  const navigate = useNavigate();
  
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["images"],
    queryFn: fetchImages
  });

  const handleImageClick = (id) => {
    navigate(`/image/${id}`);
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:4000/api/img/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        refetch(); // Re-fetch images after successful delete
      } else {
        console.error('Failed to delete image:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting image:', error);
    }
  };

  return (
    <div className='image-view'>
      {isLoading && <p>Loading...</p>}
      {data && (
        <div className="image-list">
          {data.map((item) => (
            <div key={item._id} className="image-list-item">
              <img
                src={item.url}
                alt={item.caption}
                loading="lazy"
                onClick={() => handleImageClick(item._id)}
              />
              <div className="image-details">
                <p className="image-title">{item.name}</p>
                <p className="image-description">{item.description}</p>
              </div>
              <button 
                className="delete-button"
                onClick={() => handleDelete(item._id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TitlebarImageList;
