import React, { useState } from 'react';
import './RegistrationForm.css';
import { Link } from 'react-router-dom';


const RegistrationForm = () => {
  const [formValues, setFormValues] = useState({
    fullname: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const validate = (values) => {
    let errors = {};

    if (!values.fullname) {
      errors.fullname = 'Full name is required';
    }

    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }

    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 6) {
      errors.password = 'Password needs to be 6 characters or more';
    }

    if (!values.confirmPassword) {
      errors.confirmPassword = 'Confirm password is required';
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = 'Passwords do not match';
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmitting(true);
  };

  return (


    <div className="form-container">
        
      <form onSubmit={handleSubmit} className="registration-form">
        <h1>Create Account</h1>
        <div className="form-group">
          
          <input
            type="text"
            name="fullname"
            placeholder='Full Name'
            value={formValues.fullname}
            onChange={handleChange}
          />
          {formErrors.fullname && <p>{formErrors.fullname}</p>}
        </div>
        <div className="form-group">
   
          <input
            type="email"
            name="email"
            placeholder='Email'
            value={formValues.email}
            onChange={handleChange}
          />
          {formErrors.email && <p>{formErrors.email}</p>}
        </div>
        <div className="form-group">
        
          <input
            type="password"
            name="password"
            placeholder='Password'
            value={formValues.password}
            onChange={handleChange}
          />
          {formErrors.password && <p>{formErrors.password}</p>}
        </div>
        <div className="form-group">
         
          <input
            type="password"
            name="confirmPassword"
            placeholder='Confirm Password'
            value={formValues.confirmPassword}
            onChange={handleChange}
          />
          {formErrors.confirmPassword && <p>{formErrors.confirmPassword}</p>}
        </div>
        <button id='buttonRegsistration' type="submit" disabled={isSubmitting}>Register</button>
        <p className="redirect-text">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
   
  );
};

export default RegistrationForm;
