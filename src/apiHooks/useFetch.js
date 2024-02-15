import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = (
  url,
  sessionStorageName,
  isMock = false,
  mockDataToBeReturned,
  isMetric,
  locationKey
) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  console.log("romy");

  useEffect(() => {
    // console.log("url is:", url);
    // console.log("isMock :", isMock); //true
    // console.log("session name is ", sessionStorageName);
    const fetchFromApi = () => {
      if (isMock) {
        setIsLoading(true);
        setIsSuccess(false);
        // console.log("im in");
        setTimeout(() => {
          setIsLoading(false);
          setIsSuccess(true);
          // console.log("hourly data fetching... ", locationKey);
          // console.log("mock is set");
          // console.log("mockDataToBeReturned", mockDataToBeReturned);
          setData(mockDataToBeReturned);
        }, 1000);
        // console.log("tick tick");
      } else {
        setIsLoading(true);
        setIsSuccess(false);
        axios
          .get(url)
          .then((reponse) => {
            if (reponse) {
              setIsLoading(false);
              setIsSuccess(true);
              console.log(data);
              setData(reponse.data);
            }
          })
          .catch((error) => {
            setIsLoading(false);
            setIsSuccess(false);
            throw new Error(error);
          });
      }
    };

    if (locationKey.length !== 0) {
      if (sessionStorageName && locationKey.length!==0) {

        const dataFromSessionStorage = JSON.parse(
          sessionStorage.getItem(sessionStorageName)
        );
        if (dataFromSessionStorage) {
          // console.log("dataFromSessionStorage", dataFromSessionStorage);
          // console.log("hourly data is not fetched for : ", locationKey);
          // console.log("1datais:", data);
          setData(dataFromSessionStorage);
        } else {
          // console.log("fetching data again");
          fetchFromApi();
        }
      } else {
        // console.log("fetching data");
        fetchFromApi();
      }
    }
  }, [isMetric, locationKey]);

  useEffect(() => {
    // console.log("useEffect");
    if (sessionStorageName && !isLoading && isSuccess && data) {
      // console.log("useefff2");
      sessionStorage.setItem(sessionStorageName, JSON.stringify(data));
    }
  }, [data, isSuccess, isLoading]);

  return {
    data,
    isLoading,
    isSuccess,
  };
};

export default useFetch;
