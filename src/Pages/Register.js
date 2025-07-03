import React from 'react';

const Register = () => {
  return (
    <div className="center-content">
      <h2>Register</h2>
      <form>
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" className="form-control" placeholder="Enter full name" required />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" className="form-control" placeholder="Enter email" required />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" placeholder="Enter password" required />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Register</button>
      </form>
    </div>
  );
};

export default Register;
