import React from 'react';
import './SingleImage.css';

const SingleImage = () => {
    const dummyImage = {
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8qC8u8YJXqbl_KDqdxlCTVc5bcVowChUHHw&s',
        name: 'Sample Image',
        caption: 'A beautiful scenery',
        description: 'This is a sample image of a beautiful scenery.',
        rating: 4.5,
        steps: [
            { number: 1, description: 'Step 1: Find a good spot to take a photo.' },
            { number: 2, description: 'Step 2: Adjust your camera settings.' },
            { number: 3, description: 'Step 3: Capture the photo.' },
        ],
    };

    return (
        <div className="single-image-container">
            <div className="image-box">
                <img src={dummyImage.url} alt={dummyImage.caption} />
            </div>
            <div className="details-box">
                <h2>{dummyImage.name}</h2>
                <p><strong>Caption:</strong> {dummyImage.caption}</p>
                <p><strong>Description:</strong> {dummyImage.description}</p>
                <div className="rating-box">
                    <label><strong>Rating:</strong></label>
                    <span>{dummyImage.rating}</span>
                </div>
                <div className="steps-box">
                    <h3>Steps:</h3>
                    <ul>
                        {dummyImage.steps.map((step) => (
                            <li key={step.number}>
                                <strong>Step {step.number}:</strong> {step.description}
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
