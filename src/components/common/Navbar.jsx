import React, { useEffect, useState, useCallback } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import { BsChevronUp } from "react-icons/bs";
import logo from "../../assets/Logo/Logo-Full-Light.png";
import { NavbarLinks } from "../../data/navbar-links";
import { apiConnector } from "../../services/apiconnector";
import { categories } from "../../services/apis";
import { ACCOUNT_TYPE } from "../../utils/constants";
import ProfileDropdown from "../core/Auth/ProfileDropDown";
import { login } from "../../services/operations/authAPI";
import ProgressBar from "./progressbar";

function Navbar() {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const { totalItems } = useSelector((state) => state.cart);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [subLinks, setSubLinks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpenCatalog, setDropdownOpenCatalog] = useState(false);
  const [dropdownOpenLogin, setDropdownOpenLogin] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      try {
        const res = await apiConnector("GET", categories.CATEGORIES_API);
        setSubLinks(res?.data?.data || []);
      } catch (error) {
        console.error("Could not fetch Categories.", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  const loginHandle = (role) => {
    const credentials = {
      student: { email: "studentdemo1729@gmail.com", password: "Student@1729" },
      instructor: { email: "instructordemo1729@gmail.com", password: "Instructor@1729" },
    };
    const { email, password } = credentials[role];
    dispatch(login(email, password, navigate));
  };

  const matchRoute = (route) => location.pathname === route;

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setMobileMenuOpen(false);
  const toggleCatalogDropdown = useCallback(() => setDropdownOpenCatalog((prev) => !prev), []);
  const toggleLoginDropdown = useCallback(() => setDropdownOpenLogin((prev) => !prev), []);

  return (
    <>
      <div className="navbarContainer sticky top-0 left-0 z-[1000]">
        <div className="flex items-center justify-center border-richblack-800">
          <div className="flex flex-col md:flex-row w-full max-w-maxContent items-center justify-between px-4 py-1">

            {/* Logo and Mobile Toggle */}
            <div className="flex items-center justify-between w-full md:w-auto">
              <Link to="/" onClick={closeMobileMenu}>
                <img src={logo} alt="Logo" width={170} height={32} loading="lazy" />
              </Link>
              <button className="md:hidden text-2xl text-richblack-25" onClick={toggleMobileMenu}>
                {mobileMenuOpen ? "✖" : <AiOutlineMenu />}
              </button>
            </div>

            {/* Navigation Links */}
            <nav className={`${mobileMenuOpen ? "block" : "hidden"} md:block mt-4 md:mt-0`}>
              <ul className="flex flex-col md:flex-row items-center gap-y-4 md:gap-y-0 md:gap-x-14">
                {NavbarLinks.map(({ title, path }, index) => (
                  <li key={index} className="relative group">
                    
{title === "Catalog" ? (
  <div
    className="relative group"
    
  >
    <div
      className={`flex items-center gap-1 cursor-pointer ${
        matchRoute("/catalog/:catalogName") ? "text-blue-100" : "text-richblack-25"
      } hover:text-blue-200`}
      onClick={toggleCatalogDropdown}
    >
      <p>{title}</p>
      {dropdownOpenCatalog ? <BsChevronUp /> : <BsChevronDown />}

    </div>

    {dropdownOpenCatalog && (
      <div className="absolute top-full left-1/2 z-50 w-56 -translate-x-1/2 mt-2 rounded-lg bg-richblack-5 text-richblack-900 p-4 shadow-lg">
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : subLinks?.length ? (
          subLinks
            .filter((subLink) => subLink?.courses?.length > 0)
            .map((subLink, i) => (
              <Link
                key={i}
                to={`/catalog/${subLink.name.split(" ").join("-").toLowerCase()}`}
                className="block px-4 py-2 rounded hover:bg-richblack-500"
                onClick={closeMobileMenu}
              >
                {subLink.name}
              </Link>
            ))
        ) : (
          <p className="text-center">No Courses Found</p>
        )}
      </div>
    )}
  </div>


                    ) : (
                      <Link to={path} onClick={closeMobileMenu}>
                        <p className={`${matchRoute(path) ? "text-blue-25" : "text-richblack-25"} hover:text-blue-25`}>
                          {title}
                        </p>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Cart & Login/Profile */}
            <div className={`${mobileMenuOpen ? "block" : "hidden"} md:block mt-4 md:mt-0`}>
              <div className="flex flex-col md:flex-row items-center gap-y-4 md:gap-y-0 gap-x-8">
                {/* Cart */}
                {user && user.accountType !== ACCOUNT_TYPE.INSTRUCTOR && (
                  <Link to="/dashboard/cart" className="relative" onClick={closeMobileMenu}>
                    <AiOutlineShoppingCart className="text-2xl text-richblack-100" />
                    {totalItems > 0 && (
                      <span className="absolute -bottom-2 -right-2 h-5 w-5 flex items-center justify-center rounded-full bg-richblack-600 text-xs font-bold text-blue-500">
                        {totalItems}
                      </span>
                    )}
                  </Link>
                )}

                {/* Auth */}
                {!token ? (
                  <div className="relative">
                    <button className="text-white flex items-center gap-2" onClick={toggleLoginDropdown}>
                      {selectedRole ? `Login as ${selectedRole}` : "Login As"}
                      {dropdownOpenLogin ? <BsChevronUp /> : <BsChevronDown />}
                    </button>
                    {dropdownOpenLogin && (
                      <div className="absolute top-12 left-0 bg-white border rounded-md shadow-lg w-32 z-[999]">
                        <button
                          className="block w-full px-4 py-2 text-left hover:bg-gray-200"
                          onClick={() => {
                            loginHandle("student");
                            setSelectedRole("Student");
                            setDropdownOpenLogin(false);
                          }}
                        >
                          Student
                        </button>
                        <button
                          className="block w-full px-4 py-2 text-left hover:bg-gray-200"
                          onClick={() => {
                            loginHandle("instructor");
                            setSelectedRole("Instructor");
                            setDropdownOpenLogin(false);
                          }}
                        >
                          Instructor
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <ProfileDropdown />
                )}
              </div>
            </div>
          </div>
        </div>
        <ProgressBar />
      </div>
    </>
  );
}

export default Navbar;
