import React from 'react'

function Options({label, unit1, unit2}) {
  return (
    <>

        <p className='mb-1'>{label}</p>
        <div className='bg-gray-900 flex justify-between text-center p-1 rounded-lg'>
            
            <input
            className={`hidden peer/${unit1}`}
            value={unit1}
            type="radio"
            name={label} 
            id={unit1}
            defaultChecked />
            <label htmlFor={unit1}
            className={`peer-checked/${unit1}:bg-gray-400 peer-checked/${unit1}:text-gray-900 flex-1 rounded-lg`}>{unit1}</label>
    
            <input
            className={`hidden peer/${unit2}`}
            value={unit2}
            type="radio"
            name={label} 
            id={unit2} />
            <label htmlFor={unit2}
            className={`peer-checked/${unit2}:bg-gray-400 peer-checked/${unit2}:text-gray-900  flex-1 rounded-lg`}>{unit2}</label>
        </div>
          
    </>
  )
}

export default Options