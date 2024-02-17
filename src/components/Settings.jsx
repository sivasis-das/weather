import React, { useContext } from 'react'

import CurrentWeather from '../context/CurrentWeather'


function Settings() {
  const{setIsMetric, isMetric} = useContext(CurrentWeather)
  return (
    <>
        <div className=' flex xl:flex justify-center my-3 xl:full  '>
            <div className='w-11/12 xl:w-full text-gray-400 bg-gray-800 rounded-lg xl:p-4 text-xl xl:flex xl:flex-col p-3 '>
                <p className='mb-1'>Unit</p>
                <div className='bg-gray-900 flex justify-between text-center p-1 rounded-lg'>
                    
                    <input
                     className='hidden peer/imperical'
                     value="imperical"
                     type="radio"
                     name="unit" 
                     id="imperical"
                     onClick={()=>setIsMetric(false)} 
                     defaultChecked={!isMetric}/>
                    <label htmlFor="imperical"
                    className=' peer-checked/imperical:bg-gray-400 peer-checked/imperical:text-gray-900 flex-1 rounded-lg'>imperical</label>
               
                    <input
                     className='hidden peer/metric'
                     value="metric"
                     type="radio"
                     name="unit" 
                     id="metric"
                     onClick={()=>setIsMetric(true)}
                     defaultChecked={isMetric} />
                    <label htmlFor="metric"
                    className='peer-checked/metric:bg-gray-400 peer-checked/metric:text-gray-900  flex-1 rounded-lg'>metric</label>
                </div>
                {/* <Options label="Wind Speed" unit1="kmph" unit2="mph" /> */}
                
                
                
                
            </div>
        </div>
    </>
  )
}

export default Settings