// App.jsx (wrap in AuthProvider)
import AuthProvider from './context/AuthContext';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './components/Navbar';
import AllBlogs from './pages/AllBlogs';
import MyBlog from './pages/MyBlog';
import CreateBlog from './pages/CreateBlog';
import EditBlog from './pages/EditBlog';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<AllBlogs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/create" element={<CreateBlog />} />
          <Route path="/my-blog" element={<MyBlog />} />
          <Route path="/edit/:id" element={<EditBlog />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;