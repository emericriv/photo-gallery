import { Link, useLocation, useNavigate } from "react-router";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (section: string) => {
    if (location.pathname !== "/") {
      // Rediriger vers la page principale et ajouter un léger délai pour assurer le scroll
      navigate("/");
      setTimeout(() => {
        document
          .getElementById(section)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-dark fixed w-full top-0 left-0 text-blue-gray px-40 py-6 flex items-center justify-between z-10">
      <Link to={"/"} className="text-2xl font-bold text-gold">
        Ma Galerie
      </Link>
      <div className="hidden md:flex items-center justify-center space-x-6 text-sm">
        <div className="flex space-x-6">
          <button
            onClick={() => handleNavigation("hero")}
            className="hover:text-gold cursor-pointer"
          >
            Accueil
          </button>
          <button
            onClick={() => handleNavigation("gallery")}
            className="hover:text-gold cursor-pointer"
          >
            Galerie
          </button>
          <button
            onClick={() => handleNavigation("about")}
            className="hover:text-gold cursor-pointer"
          >
            À propos
          </button>
          <button
            onClick={() => handleNavigation("contact")}
            className="hover:text-gold cursor-pointer"
          >
            Contact
          </button>
        </div>
        <Link
          to={"/login"}
          className="bg-gold/80 text-dark hover:bg-gold cursor-pointer px-4 py-1 rounded-full text-sm text-center font-semibold transition duration-300"
        >
          Se connecter
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
