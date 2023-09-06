
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <Navbar/>
      {/* Content */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-4xl font-semibold mb-4">Welcome to My Website</h1>
        <p className="text-gray-700 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, ipsum a hendrerit fringilla, justo odio auctor turpis, vel sodales velit odio eu nisl. Curabitur laoreet vel metus in vehicula.
        </p>
        
        <p className="mt-4 text-gray-700 text-lg">
          More content goes here...
        </p>

        {/* Add more content here */}
      </div>

      {/* Explore More Link */}
      <div className="mt-6 text-center">
        <Link to="/login" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full inline-block transition duration-300">
          Explore More
        </Link>
      </div>
    </div>
  );
};

export default Home;
