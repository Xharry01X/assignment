import React, { useState, useEffect, useContext } from 'react';
import { uploadImage } from '../api/api';
import { UserContext } from '../context/Context';
import './Upload.css';

const Upload = () => {
  const { userId, authenticated } = useContext(UserContext);
  const [formData, setFormData] = useState({
    url: '',
    name: '',
    description: '',
    caption: '',
    steps: [{ stepNumber: 1, description: '' }],
    rating: '',
  });
  const [submit, setSubmit] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    if (submit && authenticated) {
      const submitForm = async () => {
        try {
          await uploadImage(formData); // Token will be included in the cookie
          setSuccess('Image uploaded successfully!');
          setError('');
        } catch (err) {
          setError(err.message);
          setSuccess('');
        }
      };
      submitForm();
      setSubmit(false);
    }
  }, [submit, formData, authenticated]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleStepChange = (index, e) => {
    const steps = [...formData.steps];
    steps[index][e.target.name] = e.target.value;
    setFormData({ ...formData, steps });
  };

  const addStep = () => {
    setFormData({
      ...formData,
      steps: [...formData.steps, { stepNumber: formData.steps.length + 1, description: '' }],
    });
  };

  const removeStep = (index) => {
    const steps = formData.steps.filter((_, i) => i !== index);
    setFormData({ ...formData, steps });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
  };

  return (
    <div className="upload-form-container">
      <form className="upload-form" onSubmit={handleSubmit}>
        <h2>Upload Image</h2>
        <div className="form-group">
          <label htmlFor="url">Image URL</label>
          <input type="text" id="url" name="url" value={formData.url} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea id="description" name="description" value={formData.description} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="caption">Caption</label>
          <textarea id="caption" name="caption" value={formData.caption} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="rating">Rating</label>
          <input type="number" id="rating" name="rating" value={formData.rating} onChange={handleChange} required min="0" max="5" step="0.1" />
        </div>
        <div className="form-group steps-group">
          <label>Steps</label>
          {formData.steps.map((step, index) => (
            <div key={index} className="step-item">
              <input
                type="text"
                name="description"
                placeholder={`Step ${step.stepNumber}`}
                value={step.description}
                onChange={(e) => handleStepChange(index, e)}
                required
              />
              {index > 0 && <button type="button" onClick={() => removeStep(index)}>Remove</button>}
            </div>
          ))}
          <button type="button" onClick={addStep}>Add Step</button>
        </div>
        <button type="submit" className="submit-button">Upload</button>
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}
      </form>
    </div>
  );
};

export default Upload;
