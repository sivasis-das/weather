import { useEffect, useState } from "react";
import useFetch from "./useFetch";

import { currentData } from "../data/currentdata";

export const useFetchCurrentForecast = ({ locationKey, isMetric }) => {
  const [current, setCurrent] = useState([]);

  const { data, isLoading, isSuccess } = useFetch(
    `https://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${
      import.meta.env.VITE_API_KEY
    }&details=true`,
    `${locationKey}`,
    false, // true means fetching mock data
    currentData, // mock data to be returned from the api
    isMetric,
    locationKey
  );

  useEffect(() => {
    console.log("jimy");
    console.log("loading is :", isLoading);
    console.log("isSuccess is :", isSuccess);
    console.log("data out is", data);
    if (!isLoading && data) {
      console.log("data is : ", data);
      setCurrent(data);
    }
  }, [data, isSuccess, isLoading]);
  // setHourly(data);

  return {
    current,
    isLoading,
    isSuccess,
  };
};
