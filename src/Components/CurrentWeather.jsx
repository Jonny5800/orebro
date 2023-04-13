// Works but This is not being used

import React, { useState, useEffect } from 'react'
import Axios from "axios"


const CurrentWeather = () => {
    const API_Key = "3857155a831a5b4da099e4540bf8282c"
    const API_URL = "http://api.weatherstack.com/current"
    const[locationQuery, setLocationQuery]=useState("Orebro Sweden")
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        Axios.get(API_URL, {
            params: {
                access_key: API_Key,
                query: locationQuery // Replace with the desired location
            }
        })
        .then(response => {
            setWeatherData(response.data);
        })
        .catch(error => {
            console.error(error)
        })
    }, []);

    console.log('weatherData:', weatherData);

    return (
    <div>
      <div>CurrentWeather</div>
      {weatherData ? (
        <div>
          <div>
            Temperature: {weatherData.current.temperature} &#8457;
          </div>
          <div>Humidity: {weatherData.current.humidity}%</div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default CurrentWeather














































//***************************************** */


// import React from 'react'
// import Axios from "axios"

// const CurrentWeather = () => {

//     const axios = require("axios")
//     const API_Key = "3857155a831a5b4da099e4540bf8282c"
//     const API_URL = "http://api.weatherstack.com/current"

//     axios.get(API_URL, {
//         params: {
//           access_key: API_Key,
//           query: 'New York' // Replace with the desired location
//         }
//       })
//     .then(response => {
//         console.log(response.data)
//     })
//     .catch(error => {
//         console.error(error)
//     })


//     // const getWeather=()=>{
//     //     Axios.get("http://api.weatherstack.com/current?").then((response)=>{
//     //         console.log(response)
//     //     })
//     // }
//   return (
//     <div>
//         <div>CurrentWeather</div>
//         {/* <button onClick={getWeather}>Get Weather</button> */}
//     </div>
    
//   )
// }

// export default CurrentWeather