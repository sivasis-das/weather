import { useEffect, useState } from "react";
import CurrentWeather from "./CurrentWeather";
import { API_KEY } from "../WeatherService/weatherService";

const CurrentWeatherProvider = ({ children }) => {
  const [current, setCurrent] = useState();
  const [geoLocation, setGeoLocation] = useState({});
  const [locationKey, setLocationKey] = useState("");
  
  const [isMetric, setIsMetric] = useState(true);
  const [cityName, setCityName] = useState("");
  const [error, setError] = useState(false);

  // console.log("second");
  // getting the geo cordinates of the client------------------------
  useEffect(() => {
    if (navigator.geolocation) {
      console.log("i'm getting the geo location");
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      alert("your browser doesnt allow location");
    }

    function success(position) {
      setError((error) => !error);
      // console.log("got the geo location");
      let lat = position.coords.latitude;
      let long = position.coords.longitude;
      // console.log(lat);
      // console.log(long);
      setGeoLocation({ lat, long });
    }

    function error() {
      setError((error) => !error);
      throw new Error("please allow browser to fetch ur location");
      
    }
  }, []);

  // finding the location key---------------------
  useEffect(() => {
    if (Object.keys(geoLocation).length !== 0) {
      // console.log("i'm in fetching location key");
      async function fetchData() {
        try {
          // console.log("api1", API_KEY);
          // console.log(geoLocation);
          // console.log(geoLocation.lat);
          const response = await fetch(
            `http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${API_KEY}&q=${geoLocation.lat},${geoLocation.long}&toplevel=true`
          );
          const data = await response.json();
          setCityName(data["EnglishName"])
          // console.log(API_KEY);
          console.log("location key is in context ", locationKey.length);
          setLocationKey(data["Key"]);
        } catch (error) {
          console.error(error.message);
        }
      }
      fetchData();
    }
  }, [geoLocation]);

  return (
    <CurrentWeather.Provider
      value={{
        error,
        current,
        geoLocation,
        setGeoLocation,
        locationKey,
        setLocationKey,
        isMetric,
        setIsMetric,
        cityName,
        setCityName,
        
      }}
    >
      {children}
    </CurrentWeather.Provider>
  );
};

export default CurrentWeatherProvider;
