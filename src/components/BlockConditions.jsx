import React from 'react'
import { IoMdSunny } from "react-icons/io";
import { PiThermometerHotBold } from "react-icons/pi";
import { LuDroplets } from "react-icons/lu";
import { FaWind } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { MdRemoveRedEye } from "react-icons/md";

function BlockConditions({options, currentData, isMetric}) {
  // console.log("i am options inside block "+ options);

  const {UVIndex, UVIndexText, RealFeelTemperature : {Metric : Celsius, Imperial : Farenheit}, RelativeHumidity, Wind : { Direction : { Localized }, Speed : { Metric : speedMetric, Imperial : speedImperial}}, Pressure : {Metric: pressureMetric , Imperial: pressureImperial}, Visibility: {Metric:visibilityMetric, Imperial: visibilityImperial}} = currentData[0]
  // console.log("Celsius ", Celsius);
  return (
    <>
        <div className={`${options === "cities" && "hidden"} flex justify-center my-3 xl:w-full xl:translate-y-4`}>
        <div className='w-11/12 text-gray-400 flex gap-2 flex-wrap'>
          <div className='bg-gray-800  rounded-lg flex-1 min-w-[120px] min-h-[120px] '>
            <IoMdSunny size={30} className='mt-4 ml-5' />
            <p className='text-s mt-2 ml-5 text-gray-600 font-bold w-fit'>UV</p>
            <p className='text-xl font-bold w-fit ml-5'>{UVIndex} <span className='text-xs'>{UVIndexText}</span></p>
          </div>
          <div className='bg-gray-800  rounded-lg flex-1 min-w-[120px] min-h-[120px]'>
            <PiThermometerHotBold size={30} className='mt-4 ml-5' />
            <p className='text-s mt-2 ml-5 text-gray-600 font-bold w-fit'>Feels Like</p>
            <p className='text-xl font-bold w-fit ml-5'>{isMetric ? Celsius.Value : Farenheit.Value} &deg;</p>
          </div>
          <div className='bg-gray-800  rounded-lg flex-1 min-w-[120px] min-h-[120px]'>
            <LuDroplets size={30} className='mt-4 ml-5' />
            <p className='text-s mt-2 ml-5 text-gray-600 font-bold w-fit'>Humidity</p>
            <p className='text-xl font-bold w-fit ml-5'>{RelativeHumidity}<span className='text-xs'> %</span></p>
          </div>
          <div className='bg-gray-800  rounded-lg flex-1 min-w-[120px] min-h-[120px]'>
            <FaWind size={30} className='mt-4 ml-5' />
            <p className='text-s mt-2 ml-5 text-gray-600 font-bold w-fit'>{Localized} wind</p>
            <p className='text-xl font-bold w-fit ml-5'>{isMetric ? speedMetric.Value : speedImperial.Value} <span className='text-xs'>{isMetric ? speedMetric.Unit : speedImperial.Unit}</span></p>
          </div>
          <div className='bg-gray-800  rounded-lg flex-1 min-w-[120px] min-h-[120px]'>
            <FaArrowDown size={30} className='mt-4 ml-5' />
            <p className='text-s mt-2 ml-5 text-gray-600 font-bold w-fit'>Air pressure</p>
            <p className='text-xl font-bold w-fit ml-5'>{isMetric ? pressureMetric.Value : pressureImperial.Value} <span className='text-xs'>{isMetric ? pressureMetric.Unit : pressureImperial.Unit}</span></p>
          </div>
          <div className='bg-gray-800  rounded-lg flex-1 min-w-[120px] min-h-[120px]'>
            <MdRemoveRedEye size={30} className='mt-4 ml-5' />
            <p className='text-s mt-2 ml-5 text-gray-600 font-bold w-fit'>Visibility</p>
            <p className='text-xl font-bold w-fit ml-5'>{isMetric ? visibilityMetric.Value : visibilityImperial.Value} <span className='text-xs'>{isMetric ? visibilityMetric.Unit : visibilityImperial.Unit}</span></p>
          </div>
          
          
        </div>
      </div>
    </>
  )
}

export default BlockConditions