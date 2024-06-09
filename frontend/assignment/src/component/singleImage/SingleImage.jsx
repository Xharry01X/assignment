import React from 'react';
import './SingleImage.css';
import { useParams } from 'react-router-dom';
import useSWR from "swr";

const fetcher = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }
    return response.json();
};

const SingleImage = () => {
    const { id } = useParams();
    const { data, error } = useSWR(`http://localhost:4000/api/img/${id}`, fetcher);

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    if (!data) {
        return <p>Loading...</p>;
    }

    const { url, name, caption, description, rating, steps } = data;

    return (
        <div className="single-image-container">
            <div className="image-box">
                <img src={url} alt={caption} />
            </div>
            <div className="details-box">
                <h2>{name}</h2>
                <p><strong>Caption:</strong> {caption}</p>
                <p><strong>Description:</strong> {description}</p>
                <div className="rating-box">
                    <label><strong>Rating:</strong></label>
                    <span>{rating}</span>
                </div>
                <div className="steps-box">
                    <h3>Steps:</h3>
                    <ul>
                        {steps.map((step, index) => (
                            <li key={index}>
                                <strong>Step {step.stepNumber}:</strong> {step.description}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="button-box">
                    <button className="update-button">Update</button>
                    <button className="delete-button">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default SingleImage;
