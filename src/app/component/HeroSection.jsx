import Image from "next/image";
import { FaEyeSlash } from "react-icons/fa";

const HeroSection = () => {
    return (
        <div className=" flex flex-col md:flex-row items-center justify-between bg-gray-50 px-6 py-10 md:px-20">
            {/* Left Side: Description */}
            <div className="space-y-6 text-center md:text-left w-full md:w-[55%]">
                <h1 className="text-3xl pb-5 italic md:text-5xl font-bold text-gray-800">
                    Explore your <span className="text-blue-500">hobby</span> or{" "}
                    <span className="text-purple-500">passion</span>
                </h1>
                <p className="text-gray-600 text-sm md:text-base">
                    Sign-in to interact with a community of fellow hobbyists and an
                    eco-system of experts, teachers, suppliers, classes, workshops, and
                    places to practice, participate or perform. Your hobby may be about
                    visual or performing arts, sports, games, gardening, model making,
                    cooking, indoor or outdoor activities...
                </p>
                <p className="text-gray-600 text-sm md:text-base">
                    If you are an expert or a seller, you can Add your Listing and promote
                    yourself, your students, products, services, or events. Hop on your
                    hobbyhorse and enjoy the ride.
                </p>
                <div className="hidden md:block h-[216px] w-full">
                    <Image
                        className="h-full w-full"
                        width={1000}
                        height={1000}
                        src="/Group.png"
                        alt="Hobbyist 1"
                    />
                </div>
            </div>

            {/* Right Side: Sign-In Form */}
            <div className=" mt-10 md:mt-0  md:p-8  rounded-md w-full max-w-full md:max-w-md ">
                <div className="flex md:justify-normal justify-center gap-5 font-bold text-xl pb-2 mb-4">
                    <button className="text-purple-500 font-semibold border-b-2 border-purple-500">
                        Sign In
                    </button>
                    <button className="text-gray-400">Join In</button>
                </div>
                <div className="space-y-4 flex md:flex-col flex-col-reverse">
                    {/* Social Sign-In Buttons */}
                    <button className="w-full flex items-center justify-center gap-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-100">
                        <img
                            src="https://via.placeholder.com/20"
                            alt="Google"
                            className="w-5"
                        />
                        Continue with Google
                    </button>
                    <button className="w-full flex items-center justify-center gap-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-100">
                        <img
                            src="https://via.placeholder.com/20"
                            alt="Facebook"
                            className="w-5"
                        />
                        Continue with Facebook
                    </button>

                    {/* Divider */}
                    <div className="flex items-center gap-4">
                        <span className="flex-grow border-t border-gray-300"></span>
                        <span className="text-gray-400 text-sm">Or connect with</span>
                        <span className="flex-grow border-t border-gray-300"></span>
                    </div>

                    {/* Email and Password Input */}
                    <div className="space-y-6">

                        <div className="space-y-6">
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                            />
                            <div className="relative">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                                />
                                <button className="absolute inset-y-0 right-4 flex items-center text-gray-400 hover:text-gray-600">
                                    <FaEyeSlash />
                                </button>
                            </div>
                        </div>

                        {/* Remember Me and Forgot Password */}
                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    className="form-checkbox text-purple-500 rounded"
                                />
                                Remember me
                            </label>
                            <a href="#" className="text-purple-500 hover:underline">
                                Forgot password?
                            </a>
                        </div>

                        {/* Submit Button */}
                        <button className="w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600 transition">
                            Continue
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
