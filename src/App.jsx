import CurrentCondition from "./components/CurrentCondition";
import DailyForcast from "./components/DailyForcast";
import HourlyForcast from "./components/HourlyForcast";
import SearchCities from "./components/SearchCities";
import TopCities from "./components/TopCities";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { FaList } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import Settings from "./components/Settings";
import { useContext, useEffect, useState } from "react";

function App() {
  const [options, setOptions] = useState("weather");
  const [showSettings, setShowSettings] = useState(false);

  // const { error } = useContext(CurrentWeather);

  console.log("first");
  //  sessionStorage.clear()

  // useEffect will run to find the clients current condition and send it up to the  CurrentWeather context to be used by current condition component and the block condition.

  const showUI = (e) => {
    // console.log("optionData", e.target.id);
    setOptions(e.target.id);
  };

  const renderFooter = () => {
    return (
      <div className="text-gray-400 font-thin text-center xl:absolute xl:bottom-2 xl:right-0 xl:left-0">
        Design & Developed By <span className="font-bold"> Sivasis Das</span> @
        2023
      </div>
    );
  };

  const renderSidebar = () => {
    return (
      <div className="xl:flex xl:items-center">
        <div className="hidden xl:h-[96%] xl:w-24 xl:flex xl:flex-col xl:justify-center xl:text-center xl:rounded-lg bg-gray-800 xl:gap-5">
          <div>
            <input
              type="radio"
              name="switch"
              id="weather"
              value="value"
              className="hidden peer"
              onClick={showUI}
            />
            <label
              htmlFor="weather"
              className="peer-checked:text-gray-300 text-gray-500"
            >
              <TiWeatherPartlySunny size={30} className="mx-auto " />
              <p className="xl:mt-2">Weather</p>
            </label>
          </div>
          <div>
            <input
              type="radio"
              name="switch"
              id="cities"
              value="value"
              className="hidden peer"
              onClick={showUI}
            />
            <label
              htmlFor="cities"
              className="peer-checked:text-gray-300 text-gray-500"
            >
              <FaList size={30} className="mx-auto " />
              <p className="xl:mt-2">Cities</p>
            </label>
          </div>
          <div>
            <input
              type="radio"
              name="switch"
              id="settings"
              value="value"
              className="hidden peer"
              onClick={showUI}
            />
            <label
              htmlFor="settings"
              className="peer-checked:text-gray-300 text-gray-500"
            >
              <IoMdSettings size={30} className="mx-auto " />
              <p className="xl:mt-2">Settings</p>
            </label>
          </div>
        </div>
      </div>
    );
  };

  const renderMainContent = () => {
    switch (options) {
      case "weather":
        return renderWeather();
      case "cities":
        return renderCities();
      case "settings":
        return renderSettings();
      default:
        return <>Nothing for today</>;
    }
  };

  const renderPoweredBy = () => {
    return (
      <p className="text-gray-400 text-center font-semibold xl:translate-y-3">
        Powered by AccuWeather.
      </p>
    );
  };

  const renderWeather = () => {
    return (
      <>
        <div className="xl:w-2/3">
          <SearchCities
            showSettings={showSettings}
            setShowSettings={setShowSettings}
          />
          {showSettings && <Settings />}
          {/* i want to show cities in the sm - xl in weather option */}
          {/* <TopCities /> */}
          <CurrentCondition />
          <HourlyForcast />
        </div>
        <div className="mb-3 xl:mb-0 xl:w-fit  xl:flex-1 xl:self-center">
          <DailyForcast />
          {renderPoweredBy()}
        </div>
      </>
    );
  };

  const renderCities = () => {
    return (
      <>
        <div className="xl:w-2/3">
          <SearchCities />
          <TopCities />
        </div>
        <div className="mb-3 xl:mb-0 xl:w-fit  xl:flex-1 xl:self-center">
          <CurrentCondition options={options} />
          <HourlyForcast />
          {renderPoweredBy()}
        </div>
        ;
      </>
    );
  };

  const renderSettings = () => {
    return (
      <>
        <div className="xl:w-2/3">
          <SearchCities />
          <CurrentCondition />
          <HourlyForcast />
        </div>
        <div className="mb-3 xl:mb-0 xl:w-fit  xl:flex-1 xl:self-center">
          <Settings />
          <DailyForcast />
          {renderPoweredBy()}
        </div>
        ;
      </>
    );
  };

  // if (error) {
  //   throw new Error("Something went wrong");
  // }

  // return error ? (
  //   <>
  //     <div className="bg-gray">
  //       <h1 className="text-white text-center font-bold text-3xl">
  //         Please Allow the browser to fetch ur location
  //       </h1>
  //     </div>
  //   </>
  // ) : (
  //   <>
  //     <div className="xl:flex  xl:mx-4 lg-screen xl:h-screen xl:pb-6">
  //       {renderSidebar()}
  //       {renderMainContent()}
  //     </div>
  //     {renderFooter()}
  //   </>
  // );
  return (
    <>
      <div className="xl:flex  xl:mx-4 lg-screen xl:h-screen xl:pb-6">
        {renderSidebar()}
        {renderMainContent()}{" "}
      </div>
      {renderFooter()}{" "}
    </>
  );
}

export default App;
