import React, { useContext, useEffect, useState } from "react";
import CurrentWeather from "../context/CurrentWeather";
import { useFetchHourlyForecast } from "../apiHooks/useFetchHourlyForecast";



function HourlyForcast() {
  // const [hourly, setHourly] = useState([]);

  const { locationKey, isMetric } = useContext(CurrentWeather);

  const { hourly, isLoading, isSuccess } = useFetchHourlyForecast({
    locationKey,
    isMetric,
  });

  // console.log("time");
  console.log("hourlydata", hourly);
  // console.log("isLoading ", isLoading);
  // console.log("isSuccess ", isSuccess);

  const time = (date) => {
    let hr = new Date(date).getHours();
    // console.log("hr", hr);
    let min = new Date(date).getMinutes();
    // console.log("min", min);
    return [hr, min];
  };

  return (
    <>
      <div className="flex justify-center xl:w-full xl:mb-3 xl:mt-5 xl:translate-y-[1.5rem]">
        <div className="w-11/12 text-gray-400 bg-gray-800 rounded-lg flex flex-nowrap text-center overflow-x-auto py-2">
          {hourly.map((each) => (
            <div key={each.EpochDateTime} className="shrink-0 grow">
              <p className="font-bold text-sm">
                {time(each.DateTime)[0]}:{time(each.DateTime)[1]}
              </p>
              <img
                className="mx-auto"
                src={`/weather-icon/${each.WeatherIcon}.png`}
                alt=""
              />
              <p className="font-bold text-lg">{each.Temperature.Value}&deg;</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default HourlyForcast;
