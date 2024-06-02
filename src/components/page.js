import React, { useState } from 'react';
import { createBrowserHistory } from 'history'; 
import user_icon from '../user.png';
import './page.css';

const Page = () => {
    const [submitted, setSubmitted] = useState(false);
    const history = createBrowserHistory();
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      setSubmitted(true);
  
      history.push("/confirmation");
    };

  return (
    <div className="cover">
      <div className="title-box">
        <div className="title">DERMA CLINIC</div>
      </div>
      <div className="profile-box">
        <div className="img-box">
          <img src={user_icon} alt="user icon" />
        </div>
        <div className="details">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Enter your name" />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" />
            </div>
            <div className="form-group">
              <label htmlFor="gender">Gender</label>
              <select id="gender" name="gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" />
            </div>
            <div className="form-group">
              <label htmlFor="age">Age</label>
              <input type="number" id="age" name="age" placeholder="Enter your age" />
            </div>
            <button className="submit-button" type="submit">
              <p>Submit</p>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Page;

