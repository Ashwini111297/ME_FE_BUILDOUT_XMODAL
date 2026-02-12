import React, { useState } from "react";
import "./XModal.css";

function XModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    dob: "",
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const validateForm = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (formData.email && !formData.email.includes("@")) {
    alert(
      `please include an '@' in the email address. ${formData.email} is missing an '@'`
    );
    return false;
  }

    const phoneRegex = /^\d{10}$/;
    if (formData.phone && !phoneRegex.test(formData.phone)) {
      alert("Invalid phone number. Please enter a 10-digit phone number");
      return false;
    }

   
    if (formData.dob) {
      const selectedDate = new Date(formData.dob);
      if (selectedDate > today) {
        alert("Invalid date of birth. Date of birth cannot be in the future");
        return false;
      }
    }

    if (!formData.username.trim()) {
      alert("Please fill out this field");
      return false;
    }

    if (!formData.email.trim()) {
      alert("Please fill out this field");
      return false;
    }

    if (!formData.phone.trim()) {
      alert("Please fill out this field");
      return false;
    }

    if (!formData.dob.trim()) {
      alert("Please fill out this field");
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      onClose();
      setFormData({
        username: "",
        email: "",
        phone: "",
        dob: "",
      });
    }
  };

  const handleModalClick = (e) => {
    if (e.target.className === "modal") {
      onClose();
    }
  };

  return (
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
  );
}

export default XModal;
