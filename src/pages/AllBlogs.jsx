// AllBlogs.jsx
import { useState, useEffect } from 'react';
import API from '../utils/api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [filters, setFilters] = useState({ category: '', author: '' });

  useEffect(() => {
    fetchBlogs();
  }, [filters]);

  const fetchBlogs = async () => {
    try {
      const res = await API.get('/blogs', { params: filters });
      setBlogs(res.data);
    } catch (error) {
      toast.error('Failed to fetch blogs');
    }
  };

  return (
    <div className="container-fluid px-3 px-sm-4 px-md-5">
      <h2 className="my-4 text-center">All Blogs</h2>
      <div className="row mb-4">
        <div className="col-12 col-md-6 mb-3 mb-md-0">
          <input
            className="form-control"
            placeholder="Filter by category"
            onChange={(e) => setFilters({ ...filters, category: e.target.value })}
          />
        </div>
        <div className="col-12 col-md-6">
          <input
            className="form-control"
            placeholder="Filter by author"
            onChange={(e) => setFilters({ ...filters, author: e.target.value })}
          />
        </div>
      </div>
      <div className="row">
        {blogs.map((blog) => (
          <div key={blog._id} className="col-12 col-sm-6 col-lg-4 mb-4 d-flex">
            <div className="card w-100 h-100 shadow-sm">
              {blog.image && (
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="card-img-top"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
              )}
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{blog.title}</h5>
                <p className="card-text text-truncate">{blog.content}</p>
                <div className="mt-auto">
                  <span className="badge bg-primary me-2">{blog.category}</span>
                  <small className="text-muted">by {blog.author}</small>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBlogs;
