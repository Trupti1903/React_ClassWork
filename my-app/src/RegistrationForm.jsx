// Create a registration form with following details
// 1. Name (Text)
// 2. Email (Text)
// 3. Password (Text, Regular Expression)
// 4. Confirm Password (Text, should match Password)
//5. Gender (Radio button)
// 6. Country (Dropdown)
// 7. Terms and Conditions (Checkbox)
// 8. Color picker (color)
// 9. DOB (Date picker)
// 10. Submit button


// without using form, manage or manipulate the individual components
// keep the error messages for each field separately and beside the respective field with red colour 
// when user click on submit button, all the data should validated


import React, { useState } from "react";

const RegistrationForm = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        password:"",
        confirmpassword:"",
        gender:"",
        country:"",
        terms: false,
        color: "#000000",
        dob: ""
    });

    const [error, setErrors] = useState({});

    const handlechange = (e) => {
        const { name, value, type, checked } = e.target;
        setData({
            ...data,
            [name]: type === "checkbox" ? checked : value });
        };

        const validate = () => {
            let newErrors = {};

            if (!data.name.trim()) {
                newErrors.name = "Name is required";
            }

            if (!data.email) {
                newErrors.email = "Email is required";
            } else if (!/^\S+@\S+\.\S+$/.test(data.email)) {
                newErrors.email = "Invalid email format";
            }
            
            
            if (!data.password) {
                newErrors.password = "Password is required";
            } else if (!/^(?=.*[A-Z])(?=.*\d).{8,}$/.test(data.password)) {
                newErrors.password =
                "Password must be 8 chars, 1 uppercase & 1 number";
            }
            
            if (!data.confirmPassword) {
                newErrors.confirmPassword = "Confirm your password";
            } else if (data.password !== data.confirmPassword) {
                newErrors.confirmPassword = "Passwords do not match";
            }

            if (!data.gender) {
      newErrors.gender = "Select gender";
    }

    if (!data.country) {
      newErrors.country = "Select country";
    }

    if (!data.terms) {
      newErrors.terms = "Accept terms & conditions";
    }

    if (!data.dob) {
      newErrors.dob = "Select date of birth";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      alert("Registration Successful!");
      console.log(data);
    }
  };

  return (
    <div style={{ maxWidth: "500px" }}>
      <h2>Registration Form</h2>

      {/* Name */}
      <div>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={data.name}
          onChange={handleChange}
        />
        <span style={{ color: "red" }}> {errors.name}</span>
      </div>

      {/* Email */}
      <div>
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={data.email}
          onChange={handleChange}
        />
        <span style={{ color: "red" }}> {errors.email}</span>
      </div>

      {/* Password */}
      <div>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={data.password}
          onChange={handleChange}
        />
        <span style={{ color: "red" }}> {errors.password}</span>
      </div>

      {/* Confirm Password */}
      <div>
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={data.confirmPassword}
          onChange={handleChange}
        />
        <span style={{ color: "red" }}> {errors.confirmPassword}</span>
      </div>

      {/* Gender */}
      <div>
        Gender:
        <label>
          <input
            type="radio"
            name="gender"
            value="Male"
            onChange={handleChange}
          /> Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="Female"
            onChange={handleChange}
          /> Female
        </label>
        <span style={{ color: "red" }}> {errors.gender}</span>
      </div>

      {/* Country */}
      <div>
        <select name="country" value={data.country} onChange={handleChange}>
          <option value="">Select Country</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
        </select>
        <span style={{ color: "red" }}> {errors.country}</span>
      </div>

      {/* Terms */}
      <div>
        <label>
          <input
            type="checkbox"
            name="terms"
            checked={data.terms}
            onChange={handleChange}
          />
          Accept Terms & Conditions
        </label>
        <span style={{ color: "red" }}> {errors.terms}</span>
      </div>

      {/* Color Picker */}
      <div>
        Favorite Color:
        <input
          type="color"
          name="color"
          value={data.color}
          onChange={handleChange}
        />
      </div>

      {/* DOB */}
      <div>
        <input
          type="date"
          name="dob"
          value={data.dob}
          onChange={handleChange}
        />
        <span style={{ color: "red" }}> {errors.dob}</span>
      </div>

      {/* Submit */}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default RegistrationForm;
