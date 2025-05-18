//Signup.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../utils/api';

const Signup = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/auth/signup', form);
      navigate('/login');
    } catch (err) {
      alert(err.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <div className="col-md-6 offset-md-3">
      <h3>Sign Up</h3>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" className="form-control mb-2" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" className="form-control mb-2" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" className="form-control mb-2" onChange={handleChange} required />
        <button className="btn btn-primary w-100">Register</button>
      </form>
    </div>
  );
};

export default Signup;








