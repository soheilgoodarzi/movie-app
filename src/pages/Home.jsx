import Hero from "../components/modules/Hero"; // مسیر را بر اساس ساختار پروژه خودتان تنظیم کنید
import MovieList from "../components/movie/MovieList";

const Home = () => {
  return (
    <div className="w-full">
      <Hero />
      <div className="w-full max-w-screen-4xl bg-slate-900 mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-4 text-green-500">Popular Movies</h2>
        <MovieList />
      </div>
    </div>
  )
}

export default Home;