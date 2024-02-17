import React, { useState, useContext, useEffect } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";

import CurrentWeather from "../context/CurrentWeather";

function SearchCities({ setShowSettings, showSettings }) {
  const [city, setCity] = useState("");
  const { setLocationKey, setCityName } = useContext(CurrentWeather);

  async function fetchByText(e) {
    e.preventDefault();
    console.log(e);
    if ((e.key == "Enter") | (e.type == "click")) {
      console.log("search working");
      if (city == "") {
        // console.log("city is empty");
        
        alert("please enter a city name!");
      }
      const response = await fetch(`https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${import.meta.env.VITE_API_KEY}&q=${city}&details=false`);

      const result = await response.json();
      console.log(result[0]["Key"]);
      setLocationKey(result[0]["Key"]);
      setCityName(result[0]["EnglishName"]);
    }
    setCity("")
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="flex justify-center my-3 xl:w-full">
        <div className="flex w-11/12">
          <form
            onSubmit={handleSubmit}
            className=" flex bg-gray-800 rounded-md flex-1"
          >
            <input
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="h-8 flex-1  border-none outline-none  bg-gray-800 rounded-md indent-2 text-gray-300 "
              type="text"
            />
            <button
              onClick={fetchByText}
              onKeyUp={fetchByText}
              type="submit"
              className="text-gray-600 text-xl mr-2 rounded-full hover:text-gray-400"
            >
              <IoSearchOutline />
            </button>
          </form>
          <IoMdSettings
            onClick={() => setShowSettings(!showSettings)}
            size={30}
            className="xl:hidden text-gray-500 ml-3"
          />
        </div>
      </div>
    </>
  );
}

export default SearchCities;
