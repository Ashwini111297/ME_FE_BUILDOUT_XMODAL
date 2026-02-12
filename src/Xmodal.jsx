import React, { useState } from 'react';
import './XModal.css';

function XModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    dob: ''
  });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFormData({
      username: '',
      email: '',
      phone: '',
      dob: ''
    });
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const validateForm = () => {
    // Check if all fields are filled
    if (!formData.username.trim()) {
      alert('Please fill in the username field.');
      return false;
    }

    if (!formData.email.trim()) {
      alert('Please fill in the email field.');
      return false;
    }

    if (!formData.phone.trim()) {
      alert('Please fill in the phone number field.');
      return false;
    }

    if (!formData.dob.trim()) {
      alert('Please fill in the date of birth field.');
      return false;
    }

    // Validate email - must contain '@'
    if (!formData.email.includes('@')) {
      alert('Invalid email. Please check your email address.');
      return false;
    }

    // Validate phone - must be exactly 10 digits
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      alert('Invalid phone number. Please enter a 10-digit phone number.');
      return false;
    }

    // Validate date of birth - cannot be in the future
    const selectedDate = new Date(formData.dob);
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Reset time to compare dates only
    
    if (selectedDate > today) {
      alert('Invalid date of birth. The date of birth cannot be in the future.');
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Form is valid, close modal and reset
      closeModal();
    }
  };

  const handleModalClick = (e) => {
    // Close modal if clicking on the overlay (modal background)
    if (e.target.className === 'modal') {
      closeModal();
    }
  };

  return (
    <div className="app">
      <h1>User Details Modal</h1>
      <button onClick={openModal}>Open Form</button>

      {isModalOpen && (
        <div className="modal" onClick={handleModalClick}>
          <div className="modal-content">
            <h2>Fill Details</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  id="username"
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address:</label>
                <input
                  type="text"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number:</label>
                <input
                  type="text"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="dob">Date of Birth:</label>
                <input
                  type="date"
                  id="dob"
                  value={formData.dob}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default XModal;