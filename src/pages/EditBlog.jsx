// EditBlog.jsx
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import API from '../utils/api';

const EditBlog = () => {
  const [blog, setBlog] = useState({ title: '', category: '', content: '', image: '' });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlog = async () => {
      const res = await API.get('/blogs');
      const found = res.data.find(b => b._id === id);
      if (found) setBlog(found);
    };
    fetchBlog();
  }, [id]);

  const handleChange = (e) => setBlog({ ...blog, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.put(`/blogs/${id}`, blog);
    navigate('/my-blogs');
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <h3 className="text-center mb-4">Edit Blog</h3>
          <form onSubmit={handleSubmit}>
            <input name="title" value={blog.title} className="form-control mb-3" onChange={handleChange} required />
            <input name="category" value={blog.category} className="form-control mb-3" onChange={handleChange} required />
            <input name="image" value={blog.image} className="form-control mb-3" onChange={handleChange} />
            <textarea name="content" value={blog.content} className="form-control mb-3" rows="5" onChange={handleChange} required />
            <button className="btn btn-primary w-100">Update</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditBlog;