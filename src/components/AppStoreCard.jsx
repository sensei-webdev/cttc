import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AppStoreCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const appData = {
    title: "Fantasy Adventure RPG",
    developer: "Epic Games Studio",
    rating: 4.8,
    reviews: "12.4K",
    age: "12+",
    category: "Adventure",
    price: "Free",
    inAppPurchases: true,
    description:
      "Embark on an epic journey through mystical lands. Battle fierce creatures, solve ancient puzzles, and uncover hidden treasures in this immersive RPG experience.",
    features: [
      "Stunning 3D graphics",
      "Multiplayer battles",
      "Regular content updates",
      "Cloud save support",
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1633450797384-9242a83a7597?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHViZ3xlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
      "https://images.unsplash.com/photo-1633450797384-9242a83a7597?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHViZ3xlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
      "https://images.unsplash.com/photo-1633450797384-9242a83a7597?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHViZ3xlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
    ],
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-linear-to-br from-purple-400 via-pink-500 to-red-500">
      {/* Compact Card */}
      <motion.div
        layoutId="app-card"
        className="w-full max-w-sm overflow-hidden bg-white shadow-2xl cursor-pointer rounded-3xl"
        onClick={() => setIsExpanded(true)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="p-6">
          <div className="flex items-start space-x-4">
            <motion.div
              layoutId="app-icon"
              className="flex items-center justify-center w-20 h-20 shadow-lg bg-linear-to-br from-blue-500 to-purple-600 rounded-2xl"
            >
              <span className="text-lg font-bold text-white">RPG</span>
            </motion.div>

            <div className="flex-1">
              <motion.h3
                layoutId="app-title"
                className="mb-1 text-xl font-bold text-gray-900"
              >
                {appData.title}
              </motion.h3>
              <motion.p
                layoutId="app-developer"
                className="mb-2 text-sm text-gray-600"
              >
                {appData.developer}
              </motion.p>

              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(appData.rating)
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {appData.rating}
                  </span>
                </div>
                <span className="text-sm text-gray-500">{appData.age}</span>
                <span className="text-sm font-semibold text-green-600">
                  {appData.price}
                </span>
              </div>
            </div>
          </div>

          <motion.div
            layoutId="app-category"
            className="flex flex-wrap gap-2 mt-4"
          >
            <span className="px-3 py-1 text-sm text-gray-700 bg-gray-100 rounded-full">
              {appData.category}
            </span>
            {appData.inAppPurchases && (
              <span className="px-3 py-1 text-sm text-gray-700 bg-gray-100 rounded-full">
                In-App Purchases
              </span>
            )}
          </motion.div>
        </div>
      </motion.div>

      {/* Expanded Card Overlay */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
            onClick={() => setIsExpanded(false)}
          >
            <motion.div
              layoutId="app-card"
              className="bg-white rounded-3xl shadow-2xl overflow-hidden w-full max-w-2xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-start space-x-4">
                  <motion.div
                    layoutId="app-icon"
                    className="flex items-center justify-center w-20 h-20 shadow-lg shrink-0 bg-linear-to-br from-blue-500 to-purple-600 rounded-2xl"
                  >
                    <span className="text-lg font-bold text-white">RPG</span>
                  </motion.div>

                  <div className="flex-1">
                    <motion.h3
                      layoutId="app-title"
                      className="mb-1 text-2xl font-bold text-gray-900"
                    >
                      {appData.title}
                    </motion.h3>
                    <motion.p
                      layoutId="app-developer"
                      className="mb-3 text-base text-gray-600"
                    >
                      {appData.developer}
                    </motion.p>

                    <div className="flex items-center mb-3 space-x-6">
                      <div className="flex items-center space-x-1">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-5 h-5 ${
                                i < Math.floor(appData.rating)
                                  ? "text-yellow-400"
                                  : "text-gray-300"
                              }`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-base text-gray-600">
                          {appData.rating} • {appData.reviews} Ratings
                        </span>
                      </div>
                      <span className="text-base text-gray-500">
                        {appData.age}
                      </span>
                    </div>

                    <div className="flex items-center space-x-4">
                      <button className="px-8 py-3 font-semibold text-white transition-colors bg-blue-500 rounded-full hover:bg-blue-600">
                        Get
                      </button>
                      <span className="text-lg font-semibold text-green-600">
                        {appData.price}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Screenshots */}
              <div className="p-6 border-b border-gray-200">
                <h4 className="mb-4 text-lg font-semibold">Screenshots</h4>
                <div className="flex pb-4 space-x-4 overflow-x-auto">
                  {appData.screenshots.map((screenshot, index) => (
                    <motion.img
                      key={index}
                      src={screenshot}
                      alt={`Screenshot ${index + 1}`}
                      className="w-48 shadow-md shrink-0 h-96 rounded-xl"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    />
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className="p-6 border-b border-gray-200">
                <h4 className="mb-3 text-lg font-semibold">Description</h4>
                <p className="leading-relaxed text-gray-700">
                  {appData.description}
                </p>
              </div>

              {/* Features */}
              <div className="p-6 border-b border-gray-200">
                <h4 className="mb-3 text-lg font-semibold">Features</h4>
                <ul className="grid grid-cols-2 gap-2">
                  {appData.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center space-x-2 text-gray-700"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <svg
                        className="w-4 h-4 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Categories */}
              <div className="p-6">
                <motion.div
                  layoutId="app-category"
                  className="flex flex-wrap gap-2"
                >
                  <span className="px-4 py-2 text-base text-gray-700 bg-gray-100 rounded-full">
                    {appData.category}
                  </span>
                  {appData.inAppPurchases && (
                    <span className="px-4 py-2 text-base text-gray-700 bg-gray-100 rounded-full">
                      In-App Purchases
                    </span>
                  )}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AppStoreCard;
