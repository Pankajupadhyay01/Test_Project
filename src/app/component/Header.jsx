import { FaSearch, FaBell, FaBookmark, FaShoppingCart } from "react-icons/fa";
import { MdOutlineExpandMore } from "react-icons/md";
import { BiCompass } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import { HiMenuAlt3 } from "react-icons/hi";

const Header = () => {
    return (
        <header className="flex items-center justify-between bg-white px-4 sm:px-8 py-3 shadow-md border-b border-gray-200">
            {/* Logo Section */}
            <div className="flex items-center gap-2 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center border-2 border-purple-500 rounded-md">
                    <span className="text-purple-500 text-xl sm:text-2xl font-bold">h</span>
                </div>
                <div className="leading-tight">
                    <h1 className="text-lg sm:text-xl font-semibold text-blue-500">
                        hobby<span className="text-purple-500">cue</span>
                    </h1>
                    <p className="text-[12px] sm:text-sm text-gray-500">
                        Your Hobby, Your Community
                    </p>
                </div>
            </div>

            {/* Search Bar */}
            <div className="hidden sm:flex items-center w-1/3 border rounded-lg overflow-hidden bg-gray-50">
                <input
                    type="text"
                    placeholder="Search here..."
                    className="flex-grow px-4 py-2 text-sm text-gray-600 bg-transparent outline-none"
                />
                <button className="bg-purple-500 px-4 py-3 text-white flex items-center justify-center">
                    <FaSearch />
                </button>
            </div>

            {/* Navigation Links */}
            <nav className="hidden sm:flex items-center gap-6 text-sm font-medium text-gray-600">
                {/* Explore Dropdown */}
                <div className="flex items-center gap-1 cursor-pointer hover:text-purple-700">
                    <BiCompass className="text-purple-500 text-lg" />
                    Explore
                    <MdOutlineExpandMore className="text-gray-500" />
                </div>

                {/* Hobbies Dropdown */}
                <div className="flex items-center gap-1 cursor-pointer hover:text-purple-700">
                    <AiFillStar className="text-purple-500 text-lg" />
                    Hobbies
                    <MdOutlineExpandMore className="text-gray-500" />
                </div>

                {/* Icons Section */}
                <FaBookmark className="text-purple-500 text-lg cursor-pointer hover:text-purple-700" />
                <FaBell className="text-purple-500 text-lg cursor-pointer hover:text-purple-700" />
                <FaShoppingCart className="text-purple-500 text-lg cursor-pointer hover:text-purple-700" />

                {/* Sign In Button */}
                <button className="border border-purple-500 text-purple-500 px-4 py-2 rounded-md hover:bg-purple-50 transition duration-200">
                    Sign In
                </button>
            </nav>

            {/* Mobile Icons */}
            <div className="flex sm:hidden items-center gap-4">
                <FaSearch className="text-purple-500 text-lg cursor-pointer" />
                <FaBell className="text-purple-500 text-lg cursor-pointer" />
                <HiMenuAlt3 className="text-purple-500 text-2xl cursor-pointer" />
            </div>
        </header>
    );
};

export default Header;
