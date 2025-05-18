
// CreateBlog.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../utils/api';

const CreateBlog = () => {
  const [blog, setBlog] = useState({ title: '', category: '', content: '', image: '' });
  const navigate = useNavigate();

  const handleChange = (e) => setBlog({ ...blog, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post('/blogs', blog);
    navigate('/');
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <h3 className="text-center mb-4">Create Blog</h3>
          <form onSubmit={handleSubmit}>
            <input name="title" placeholder="Title" className="form-control mb-3" onChange={handleChange} required />
            <input name="category" placeholder="Category" className="form-control mb-3" onChange={handleChange} required />
            <input name="image" placeholder="Image URL" className="form-control mb-3" onChange={handleChange} />
            <textarea name="content" placeholder="Content" className="form-control mb-3" rows="5" onChange={handleChange} required />
            <button className="btn btn-success w-100">Create</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;