
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative -mt-24 h-[75vh] md:min-h-[700px] min-h-[500px] flex items-center justify-center text-white w-full">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center -z-20"
        style={{ backgroundImage: "url('/hero-background.jpg')" }} 
      />

      <div className="absolute top-0 left-0 w-full h-full bg-slate-900/70 backdrop-blur-md -z-10" />

      <div className="mt-64 w-full max-w-screen-xl mx-auto px-4 text-center">
        <h1 className="text-2xl md:text-6xl font-bold mb-4">
          Your guide for movies & TV shows
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-gray-300">
          Find where to stream new, popular & upcoming entertainment with Sow Movies.
        </p>
        <div className="flex justify-center gap-4">
          <Link 
            to="/movies" 
            className="bg-green-500 hover:bg-green-700 text-white text-sm md:text-2xl font-bold text-nowrap py-3 px-8 rounded-full transition-colors "
          >
            Discover Movies
          </Link>
          <Link 
            to="/login" 
            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-full transition-colors"
          >
            Login / Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
