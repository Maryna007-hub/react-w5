import React from "react";
import axios from "axios";
import { Blocks } from  'react-loader-spinner';

 export default function Weather(props) {
    function handleResponse(response) {
        alert(`Today is in ${response.data.name} ${response.data.main.temp} C`);
       }
        let apiKey = "df04a6426eb8c9305ebb65c9deb52f35";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=metric&appid=${apiKey}`;
       axios.get(apiUrl).then(handleResponse);
    return (
<Blocks
  visible={true}
  height="80"
  width="80"
  ariaLabel="blocks-loading"
  wrapperStyle={{}}
  wrapperClass="blocks-wrapper"
/>
    )
 }