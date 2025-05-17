import { useState } from "react";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const buttonHover = {
  scale: 1.02,
  transition: { type: "spring", stiffness: 300 },
};

const buttonTap = {
  scale: 0.98,
};

const Home = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [facebookLoading, setFacebookLoading] = useState(false);
   const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      //console.log({ email, password, rememberMe });
      setIsLoading(false);
      navigate('/welcomepage')

    }, 1500);
  };

  const handleGoogleLogin = () => {
    setGoogleLoading(true);
    setTimeout(() => {
      //console.log("Google login attempt");
      setGoogleLoading(false);
    }, 1500);
  };

  const handleFacebookLogin = () => {
    setFacebookLoading(true);
    setTimeout(() => {
      //console.log("Facebook login attempt");
      setFacebookLoading(false);
    }, 1500);
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="min-h-screen  from-blue-50 to-gray-100 flex items-center justify-center p-4"
    >
      <motion.div
        variants={containerVariants}
        className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden"
      >
        <motion.div variants={itemVariants} className="bg-orange-400 py-6 px-8">
          <motion.h1
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            className="text-3xl font-bold text-white text-center"
          >
            BYTO
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-indigo-100 text-center mt-2"
          >
            Sign In
          </motion.p>
        </motion.div>

        <div className="px-8 py-8">
          <motion.h2
            variants={itemVariants}
            className="text-xl font-semibold text-gray-800 text-center mb-6"
          >
            Welcome back! Please sign in to continue.
          </motion.h2>

          <motion.div variants={itemVariants}>
            <motion.button
              onClick={handleGoogleLogin}
              disabled={googleLoading}
              whileHover={!googleLoading ? buttonHover : {}}
              whileTap={!googleLoading ? buttonTap : {}}
              className={`w-full flex items-center justify-center gap-3 bg-white border border-gray-300 rounded-lg py-3 px-4 text-gray-700 font-medium hover:bg-gray-50 transition-colors shadow-sm ${
                googleLoading ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {googleLoading ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                  className="h-5 w-5 text-gray-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                </motion.div>
              ) : (
                <>
                  <FaGoogle className="text-red-500" />
                  <span>Sign in with Google</span>
                </>
              )}
            </motion.button>
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.button
              onClick={handleFacebookLogin}
              disabled={facebookLoading}
              whileHover={!facebookLoading ? buttonHover : {}}
              whileTap={!facebookLoading ? buttonTap : {}}
              className={`w-full mt-4 flex items-center justify-center gap-3 bg-white border border-gray-300 rounded-lg py-3 px-4 text-gray-700 font-medium hover:bg-gray-50 transition-colors shadow-sm ${
                facebookLoading ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {facebookLoading ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                  className="h-5 w-5 text-gray-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                </motion.div>
              ) : (
                <>
                  <FaFacebook className="text-blue-600" />
                  <span>Sign in with Facebook</span>
                </>
              )}
            </motion.button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-center my-6"
          >
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-gray-500 text-sm">
              or use your account
            </span>
            <div className="flex-grow border-t border-gray-300"></div>
          </motion.div>

          <motion.form
            variants={containerVariants}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <motion.div variants={itemVariants}>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email or Phone
              </label>
              <motion.input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-400 focus:border-orange-400  outline-none transition-all"
                placeholder="Enter your email or phone"
                required
                disabled={isLoading}
                whileFocus={{ scale: 1.01 }}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="flex justify-between items-center mb-1">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <Link
                  to="/forget-password"
                  className="text-sm text-orange-500 hover:text-orange-400 text"
                >
                  Forgot your password?
                </Link>
              </div>
              <motion.input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition-all"
                placeholder="Enter your password"
                required
                disabled={isLoading}
                whileFocus={{ scale: 1.01 }}
              />
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center">
              <motion.input
                type="checkbox"
                id="remember"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                disabled={isLoading}
                whileTap={buttonTap}
              />
              <label
                htmlFor="remember"
                className="ml-2 block text-sm text-gray-700"
              >
                Remember me
              </label>
            </motion.div>

            <motion.div variants={itemVariants}>
              <motion.button
                type="submit"
                disabled={isLoading}
                whileHover={!isLoading ? buttonHover : {}}
                whileTap={!isLoading ? buttonTap : {}}
                className={`w-full bg-orange-500 text-white py-3 px-4 rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 shadow-md ${
                  isLoading ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isLoading ? (
                  <motion.span
                    className="flex items-center justify-center"
                    animate={{ opacity: [0.8, 1, 0.8] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Signing in...
                  </motion.span>
                ) : (
                  "SIGN IN"
                )}
              </motion.button>
            </motion.div>
          </motion.form>

          <motion.div
            variants={itemVariants}
            className="mt-6 text-center text-sm text-gray-600"
          >
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="font-medium text-orange-400 hover:text-orange-300 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Sign Up
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
