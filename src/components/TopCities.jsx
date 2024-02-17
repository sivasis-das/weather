import React, { useContext, useEffect, useState } from "react";
// import { topcities } from "../data/topcities";

import CurrentWeather from "../context/CurrentWeather";

function TopCities() {
  // use state
  const [citiesList, setCitiesList] = useState([]);

  const { setLocationKey, setCityName, isMetric } = useContext(CurrentWeather);

  useEffect(() => {
    // check if list is available----------
    if (sessionStorage.getItem("cities")) {
      // console.log("cities data not fetched :");
      let data = JSON.parse(sessionStorage.getItem("cities"));
      setCitiesList(data);
    } else {
      async function fetchTopCities() {
        // console.log("fetching the list of cities...");
        const response = await fetch(
          `http://dataservice.accuweather.com/currentconditions/v1/topcities/50?apikey=${
            import.meta.env.VITE_API_KEY
          }`
        );
        const data = await response.json();
        sessionStorage.setItem("cities", JSON.stringify(data));

        setCitiesList(data);
      }
      fetchTopCities();
    }
  }, []);

  // by clicking on the list of the top cities i have got the location key, it will be send for fetching the current data, hourly and 5 days forcaste for that particular city
  const handleClick = (e) => {
    console.log("selected city is", e.currentTarget.id);
    setLocationKey(e.currentTarget.id);
    // here i am getting the name of the city and sending to context , to be used in current condition
    console.log("selected city is", e.currentTarget.childNodes[1].textContent);
    setCityName(e.currentTarget.childNodes[1].textContent);
  };

  return citiesList.length !== 0 ? (
    <>
      <div className="hidden sm:flex justify-center xl:my-6">
        <ul className="flex xl:flex-col xl:space-x-0 xl:space-y-6 w-11/12 space-x-2 text-center">
          {citiesList.map(
            (city) =>
              (city.EnglishName === "London" ||
                city.EnglishName === "Tokyo" ||
                city.EnglishName === "New York" ||
                city.EnglishName === "Berlin") && (
                <li
                  id={city.Key}
                  key={city.Key}
                  name={city.EnglishName}
                  className="text-gray-400 bg-gray-800 rounded-lg flex-1 md:hover:bg-gray-700 xl:flex xl:justify-around xl:p-3"
                  onClick={handleClick}
                >
                  <img
                    className="hidden xl:block"
                    src={`/weather-icon/${city.WeatherIcon}.png`}
                    alt=""
                  />
                  <h1 className=" mr-2 font-bold xl:text-3xl">
                    {city.EnglishName}
                  </h1>
                  <h3 className="text-2xl">
                    {isMetric
                      ? city.Temperature.Metric.Value
                      : city.Temperature.Imperial.Value}
                    &deg;{" "}
                    {isMetric
                      ? city.Temperature.Metric.Unit
                      : city.Temperature.Imperial.Unit}
                  </h3>
                </li>
              )
          )}
        </ul>
      </div>
    </>
  ) : (
    <></>
  );
}

export default TopCities;
