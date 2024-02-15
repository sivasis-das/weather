import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import CurrentWeatherProvider from "./context/CurrentWeatherProvider.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary>
      <CurrentWeatherProvider>  
        <App />
      </CurrentWeatherProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
