import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Search from "../components/Search.jsx";
import Title from "../components/Title.jsx";
import ListOfMovies from "../utils/ListOfMovies.jsx";
import Footer from "../components/Footer.jsx";

const Movies = ({ genre }) => {
  return (
    <body className="flex flex-col min-h-screen">
      <header>
        <Navbar />
      </header>
      <main className="mx-auto max-w-xl mt-7 flex-grow flex-shrink">
        <Title />
        <Search />
        <ListOfMovies genre={genre} />
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </body>
  );
};

export default Movies;
