import { useEffect, useState } from "react";
import useFetch from "./useFetch";

import { dailydata } from "../data/dailydata";

export const useFetchDailyForecast = ({ locationKey, isMetric }) => {
  const [daily, setDaily] = useState([]);

  const { data, isLoading, isSuccess } = useFetch(
    `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${
      import.meta.env.VITE_API_KEY
    }&metric=${isMetric}`,
    `${locationKey} daily ${isMetric}`,
    false, // true means fetching mock data
    dailydata, // mock data to be returned from the api
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
      setDaily(data);
    }
  }, [data, isSuccess, isLoading]);

  // console.log("jimmy");

  return {
    daily,
    isLoading,
    isSuccess,
  };
};
