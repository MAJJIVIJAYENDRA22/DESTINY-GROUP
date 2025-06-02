
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-destiny-beige/30 py-20">
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl font-serif font-medium text-destiny-gold mb-4">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-serif text-destiny-darkBrown mb-6">
          Page Not Found
        </h2>
        <p className="text-destiny-darkGray max-w-md mx-auto mb-8">
          The page you are looking for does not exist or has been moved. Please return to our homepage.
        </p>
        <Link
          to="/"
          className="btn-primary inline-flex items-center"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
