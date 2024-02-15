import React, { useContext, useEffect, useState } from "react";
import CurrentWeather from "../context/CurrentWeather";
import { useFetchDailyForecast } from "../apiHooks/useFetchDailyForecast";

function DailyForcast() {
  const { locationKey, isMetric } = useContext(CurrentWeather);

  const { daily, isLoading, isSuccess } = useFetchDailyForecast({
    locationKey,
    isMetric,
  });

  // console.log("time");
  console.log("dailydata", daily);
  // console.log("isLoading ", isLoading);
  // console.log("isSuccess ", isSuccess);

  const day = (date) => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let weekDays = days[new Date(date).getDay()].slice(0, 3);

    const day = new Date(date).getDate();

    const month = new Date(date).getMonth() + 1;

    return [day, month, weekDays];
  };

  return daily.length !== 0 ? (
    <>
      <div className="flex  justify-center mt-3  xl:w-full ">
        <div className="w-11/12 xl:w-full text-gray-400 bg-gray-800 rounded-lg xl:p-4 text-xl xl:flex xl:flex-col xl:gap-10 ">
          {daily.DailyForecasts.map((daily) => (
            <div
              key={daily.EpochDate}
              className="font-bold flex justify-around xl:space-x-5 "
            >
              <p className="pt-3 min-w-max">
                {day(daily.Date)[0]}/{day(daily.Date)[1]} {day(daily.Date)[2]}
              </p>
              <img
                className="pt-3"
                src={`/weather-icon/${daily.Day.Icon}.png`}
                alt=""
              />
              <p className="pt-3 min-w-max">
                {daily.Temperature.Maximum.Value}&deg;
                <span className="text-gray-600">/</span>{" "}
                {daily.Temperature.Minimum.Value}&deg;
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  ) : (
    <></>
  );
}

export default DailyForcast;
