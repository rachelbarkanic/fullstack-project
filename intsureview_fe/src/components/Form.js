import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    textInput: '',
    selectInput: '',
    input1: '',
    input2: '',
    input3: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send form data to backend API endpoint
    // Simulating success and error responses
    if (formData.textInput && formData.selectInput) {
      // Simulating success response
      setSuccessMessage('Form submitted successfully');
      setErrorMessage('');
    } else {
      // Simulating error response
      setSuccessMessage('');
      setErrorMessage('Form submission failed. Please fill in required fields.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="textInput"
        value={formData.textInput}
        onChange={handleChange}
        placeholder="Text Input"
      />
      <select name="selectInput" value={formData.selectInput} onChange={handleChange}>
        <option value="">Select an option</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
      <input
        type="text"
        name="input1"
        value={formData.input1}
        onChange={handleChange}
        placeholder="Input 1"
      />
      <input
        type="text"
        name="input2"
        value={formData.input2}
        onChange={handleChange}
        placeholder="Input 2"
      />
      <input
        type="text"
        name="input3"
        value={formData.input3}
        onChange={handleChange}
        placeholder="Input 3"
      />
      <button type="submit">Submit</button>
      {successMessage && <p className="success">{successMessage}</p>}
      {errorMessage && <p className="error">{errorMessage}</p>}
    </form>
  );
};

export default Form;
