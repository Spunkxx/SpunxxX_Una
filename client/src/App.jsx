import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // ayaw pag switch kay di na mo gana sa react 17
// import Register from './components/Auths/Register';
import Login from './components/Auths/Login';
import UserProfile from './components/Pages/UserProfile';
import Navbar from './components/Pages/Navbar';
import Offers from './components/Pages/SectionPages/Offers';
import Signup from './components/Auths/Signup';
// import Home from './components/Pages/Home';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <Router>
      <div className="bg-white dark:bg-gray-900">
      <Toaster position='top-center'/>
      <Routes>
  
        <Route path="/" element={<Navbar />} />
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/signup" element={<Signup/>}/>
        {/* <Route path="/register" element={<Register />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/profile" element={<UserProfile />} />
 
      </Routes>

      </div>
    </Router>
  );
}

export default App;
