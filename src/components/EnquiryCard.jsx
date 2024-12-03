import React, { useState } from 'react';
import './EnquiryCard.css';

const EnquiryCard = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    placeToVisit: '',
    agree: false
  });

  const [formErrors, setFormErrors] = useState({
    phone: '',
    placeToVisit: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[0-9]{10}$/;  // Validates a 10-digit phone number
    return phoneRegex.test(phone);
  };

  const validatePlaceToVisit = (place) => {
    return place.trim() !== '';  // Checks if place is not empty
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    let errors = {};
    let isValid = true;

    // Validate phone number
    if (!validatePhone(formData.phone)) {
      errors.phone = 'Please enter a valid 10-digit phone number.';
      isValid = false;
    }

    // Validate place to visit
    if (!validatePlaceToVisit(formData.placeToVisit)) {
      errors.placeToVisit = 'Please enter a valid place to visit.';
      isValid = false;
    }

    // If form is invalid, set error messages
    if (!isValid) {
      setFormErrors(errors);
      return;
    }

    // Reset form fields after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      placeToVisit: '',
      agree: false
    });

    // Clear errors
    setFormErrors({});
    
    // Handle further logic after submission, such as sending data to a server
    console.log('Form submitted:', formData);  // For example, logging the data
  };

  return (
    <div className="enquiry-card">
      <div className="icon-row">
        <div className="icon">
          <i className="fas fa-umbrella-beach"></i> Holidays
        </div>
        <div className="icon">
          <i className="fas fa-hotel"></i> Hotel
        </div>
        <div className="icon">
          <i className="fas fa-bus"></i> Bus / Cab
        </div>
        <div className="icon">
          <i className="fas fa-plane"></i> Flight
        </div>
        <div className="icon">
          <i className="fas fa-train"></i> Train
        </div>
      </div>
      <h2>Enquiry For Your Tour Package</h2>
      <form className="enquiry-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="input-wrapper">
            <i className="fas fa-user"></i>
            <input
              type="text"
              name="name"
              placeholder="First Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-wrapper">
            <i className="fas fa-envelope"></i>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-wrapper">
            <i className="fas fa-phone"></i>
            <input
              type="text"
              name="phone"
              placeholder="Enter Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            {formErrors.phone && <div className="error-message">{formErrors.phone}</div>}
          </div>
          <div className="input-wrapper">
            <i className="fas fa-map-marker-alt"></i>
            <input
              type="text"
              name="placeToVisit"
              placeholder="Place To Visit"
              value={formData.placeToVisit}
              onChange={handleChange}
              required
            />
            {formErrors.placeToVisit && <div className="error-message">{formErrors.placeToVisit}</div>}
          </div>
        </div>
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
            />
            You authorize our team to call, SMS, email, or WhatsApp you for package details and promotional offers.
          </label>
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default EnquiryCard;