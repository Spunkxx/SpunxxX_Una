import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // ayaw pag switch kay di na mo gana sa react 17
import Register from './components/Auths/Register';
import Login from './components/Auths/Login';
import UserProfile from './components/Pages/UserProfile';
import Home from './components/Pages/Home';


function App() {
  return (
    <Router>
      <Routes>
  
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<UserProfile />} />
        
      </Routes>
    </Router>
  );
}

export default App;
