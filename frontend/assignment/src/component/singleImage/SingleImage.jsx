import React, { useState } from 'react';
import './SingleImage.css';
import { useParams } from 'react-router-dom';
import useSWR from "swr";
import { useNavigate } from 'react-router-dom';

const fetcher = async (url) => {
   
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }
    return response.json();
};

const SingleImage = () => {
    const navigation = useNavigate()
    const { id } = useParams();
    const { data, error, mutate } = useSWR(`http://localhost:4000/api/img/${id}`, fetcher);

    const [isUpdateFormOpen, setIsUpdateFormOpen] = useState(false);
    const [updatedUrl, setUpdatedUrl] = useState('');
    const [updatedName, setUpdatedName] = useState('');
    const [updatedCaption, setUpdatedCaption] = useState('');
    const [updatedDescription, setUpdatedDescription] = useState('');
    const [updatedRating, setUpdatedRating] = useState(0);
    const [updatedSteps, setUpdatedSteps] = useState([{ stepNumber: 1, description: '' }]);

    const handleUpdateButtonClick = () => {
        setIsUpdateFormOpen(true);
    };

    const handleUpdateFormClose = () => {
        setIsUpdateFormOpen(false);
    };

    const handleUrlChange = (e) => {
        setUpdatedUrl(e.target.value);
    };

    const handleNameChange = (e) => {
        setUpdatedName(e.target.value);
    };

    const handleCaptionChange = (e) => {
        setUpdatedCaption(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setUpdatedDescription(e.target.value);
    };

    const handleRatingChange = (e) => {
        setUpdatedRating(e.target.value);
    };

    const handleStepChange = (index, e) => {
        const newSteps = [...updatedSteps];
        newSteps[index].description = e.target.value;
        setUpdatedSteps(newSteps);
    };

    const handleAddStep = () => {
        const newStepNumber = updatedSteps.length + 1;
        setUpdatedSteps([...updatedSteps, { stepNumber: newStepNumber, description: '' }]);
    };

    const handleRemoveStep = (index) => {
        const newSteps = [...updatedSteps];
        newSteps.splice(index, 1);
        setUpdatedSteps(newSteps);
    };

    const handleUpdate = async () => {
        try {
            const response = await fetch(`http://localhost:4000/api/img/update/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    url: updatedUrl,
                    name: updatedName,
                    caption: updatedCaption,
                    description: updatedDescription,
                    rating: updatedRating,
                    steps: updatedSteps,
                }),
            });

            if (response.ok) {
                
                setIsUpdateFormOpen(false);
                mutate(); // Trigger re-fetching of data
            } else {
                console.error('Failed to update image:', response.statusText);
            }
        } catch (error) {
            console.error('Error updating image:', error);
        }
    };

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    if (!data) {
        return <p>Loading...</p>;
    }

    const { url, name, caption, description, rating, steps } = data;

    const handleCreate=()=>{
    navigation("/upload")
    }

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
                    <strong>Rating:</strong> {rating}
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
                    <button className="update-button" onClick={handleUpdateButtonClick}>Update</button>
                    <button className="delete-button" onClick={handleCreate}>Create</button>
                </div>
            </div>
            {isUpdateFormOpen && (
                <div className="update-form">
                    <h3>Update Image</h3>
                    <label htmlFor="updatedUrl">URL:</label>
                    <input type="text" id="updatedUrl" value={updatedUrl} onChange={handleUrlChange} />
                    <label htmlFor="updatedName">Name:</label>
                    <input type="text" id="updatedName" value={updatedName} onChange={handleNameChange} />
                    <label htmlFor="updatedCaption">Caption:</label>
                    <input type="text" id="updatedCaption" value={updatedCaption} onChange={handleCaptionChange} />
                    <label htmlFor="updatedDescription">Description:</label>
                    <textarea id="updatedDescription" value={updatedDescription} onChange={handleDescriptionChange}></textarea>
                    <label htmlFor="updatedRating">Rating:</label>
                    <input type="number" id="updatedRating" value={updatedRating} onChange={handleRatingChange} />
                    <label>Steps:</label>
                    {updatedSteps.map((step, index) => (
                        <div key={index}>
                            <input type="text" value={step.description} onChange={(e) => handleStepChange(index, e)} />
                            <button onClick={() => handleRemoveStep(index)}>Remove Step</button>
                        </div>
                    ))}
                    <button onClick={handleAddStep}>Add Step</button>
                    <div className="button-container">
                        <button onClick={handleUpdate}>Update</button>
                        <button onClick={handleUpdateFormClose}>Cancel</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SingleImage;
