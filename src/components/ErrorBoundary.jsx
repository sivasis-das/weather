import React, { useState, useEffect } from "react";

const ErrorFallback = () => {
  return (
    <div className="text-white text-3xl text-center pt-10">
      Something went wrong!!!
      <p>or check your location permission</p>
    </div>
  );
};

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const handleError = () => {
      setHasError(true);
    };

    // Attach error handler
    window.addEventListener("error", handleError);

    // Clean up the error handler
    return () => {
      window.removeEventListener("error", handleError);
    };
  }, []);

  if (hasError) {
    console.log("errorMessage", errorMessage);
    return <ErrorFallback />;
  }

  return children;
};

export default ErrorBoundary;
