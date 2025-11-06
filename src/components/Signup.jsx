import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="flex items-center justify-center my-40 md:my-56 min-h-fit">
      <div className="p-8 space-y-6 text-center shadow-lg rounded-2xl">
        <h1 className="text-3xl font-semibold text-white">
          Sign-in required
        </h1>
        <p className="text-gray-300">Sign-in to access resources like <br /> PDFs, e-books, Video Lectures, Notes, etc.</p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            to="https://accounts.imabubakar.xyz/sign-up"
            className="px-6 py-3 font-medium text-black transition-transform duration-200 transform bg-white rounded-xl hover:scale-105 active:scale-95"
          >
            Sign Up
          </Link>
          <Link
            to="https://accounts.imabubakar.xyz/sign-in"
            className="px-6 py-3 font-medium text-white transition-transform duration-200 transform border border-white rounded-xl hover:scale-105 active:scale-95"
          >
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
