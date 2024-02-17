import { useEffect, useState } from "react";
import useFetch from "./useFetch";

import { hourlydata } from "../data/hourlydata";

export const useFetchHourlyForecast = ({ locationKey, isMetric }) => {
  const [hourly, setHourly] = useState([]);

  const { data, isLoading, isSuccess } = useFetch(
    `http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${locationKey}?apikey=${
      import.meta.env.VITE_API_KEY
    }&metric=${isMetric}`,
    `${locationKey} hourly ${isMetric}`,
    false, // true means fetching mock data
    hourlydata, // mock data to be returned from the api
    isMetric,
    locationKey
  );

  useEffect(() => {
    // console.log("jimy");
    // console.log("loading is :", isLoading);
    // console.log("isSuccess is :",isSuccess);
    // console.log("data out is", data);
    if (!isLoading && data) {
      // console.log("data is : ", data);
      setHourly(data);
    }
  }, [data, isSuccess, isLoading]);
  // setHourly(data);
  return {
    hourly,
    isLoading,
    isSuccess,
  };
};
