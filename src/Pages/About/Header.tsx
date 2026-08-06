import { NavLink, Link } from "react-router";
import Medibridge from "../../assets/Logo.svg";

const Header = () => {
  const isLoggedIn = false;

  return (
    <header className="w-full flex justify-center pt-6">
      <nav className="bg-white rounded-full shadow-sm px-8 py-4 w-[90%] max-w-7xl flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={Medibridge} alt="MediBridge" className="cursor-pointer" />
        </Link>

        <ul className="hidden md:flex items-center gap-10 text-sm">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `transition-all hover:font-semibold ${
                  isActive ? "text-[#2E665B] font-bold" : "text-gray-600"
                }`
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/departmentPage"
              className={({ isActive }) =>
                `transition-all hover:font-semibold ${
                  isActive ? "text-[#2E665B] font-bold" : "text-gray-600"
                }`
              }
            >
              Departments
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/aiSupportPage1"
              className={({ isActive }) =>
                `transition-all hover:font-semibold ${
                  isActive ? "text-[#2E665B] font-bold" : "text-gray-600"
                }`
              }
            >
              AI Support
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/aboutUs"
              className={({ isActive }) =>
                `transition-all hover:font-semibold ${
                  isActive ? "text-[#2E665B] font-bold" : "text-gray-600"
                }`
              }
            >
              About Us
            </NavLink>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          {!isLoggedIn ? (
            <>
              <Link to="/login" className="font-medium px-2 py-1">
                Login
              </Link>

              <Link
                to="/activateaccount"
                className="bg-[#2E665B] text-white px-5 py-3 rounded-xl"
              >
                Activate Account
              </Link>
            </>
          ) : (
            <Link
              to="/dashboard"
              className="bg-[#2E665B] text-white px-5 py-3 rounded-xl"
            >
              Dashboard
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
