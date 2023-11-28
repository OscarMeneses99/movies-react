import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Search from "../components/Search.jsx";
import Title from "../components/Title.jsx";
import ListOfMovies from "../components/ListOfMovies.jsx";
import Footer from "../components/Footer.jsx";

const Home = ({ genre }) => {
  return (
    <div className="flex flex-col min-h-screen bg-[#202020]">
      <header>
        <Navbar />
      </header>
      <main className="mx-auto max-w-xl mt-7 flex-grow flex-shrink">
        <Title />
        <Search genre={genre} />
        <ListOfMovies genre={genre} />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
