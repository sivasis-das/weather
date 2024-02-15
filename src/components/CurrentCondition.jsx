import React, { useContext, useEffect, useState } from "react";
import BlockConditions from "./BlockConditions";
import CurrentWeather from "../context/CurrentWeather";

import { useFetchCurrentForecast } from "../apiHooks/useFetchCurrentForecast";

function CurrentCondition({ options }) {
  const { locationKey, isMetric, cityName } = useContext(CurrentWeather);

  // current condition is fetched here ---------------------------------

  const { current, isLoading, isSuccess } = useFetchCurrentForecast({
    locationKey,
    isMetric,
  });

  console.log("currentdata", current);
  // console.log("isLoading ", isLoading);
  // console.log("isSuccess ", isSuccess);

  return current.length !== 0 ? (
    <>
      <div className="flex justify-center my-5 xl:w-full">
        <div className="w-11/12 text-gray-400">
          <div className="flex justify-between">
            <h1 className="font-bold text-2xl pt-2">{cityName}</h1>
          </div>
          <div>
            <div className="mt-5">
              <p className="text-8xl text-center relative">
                {isMetric
                  ? current?.[0].Temperature.Metric.Value
                  : current?.[0].Temperature.Imperial.Value}
                &deg;
                <span className="text-3xl">
                  {isMetric
                    ? current?.[0].Temperature.Metric.Unit
                    : current?.[0].Temperature.Imperial.Unit}
                </span>
              </p>
              <div className="flex justify-center mt-3">
                <img
                  className=" self-center "
                  src={`/weather-icon/${current?.[0].WeatherIcon}.png`}
                  alt=""
                />
                <p className="pt-2 font-bold">{current?.[0].WeatherText}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BlockConditions
        options={options}
        currentData={current}
        isMetric={isMetric}
      />
    </>
  ) : (
    <></>
  );
}

export default CurrentCondition;
