import * as React from "react";
import axios from "axios";
import PropTypes from "prop-types";
import {useState} from "react";


function Weather(){
    const [weather, setWeather] = useState([]);
    if(!weather.length){
        axios.get("https://api.openweathermap.org/data/2.5/weather?q=Omsk,ru&APPID=30b2191ab50063229e4b291b4c5d055b").then(res => {
            console.log(weather);
            setWeather(res.data);
    });


    }
    return(
        <table>
            <thead><tr><th>Минимальная тепература</th><th>Максимальня температура</th></tr></thead>
            <tbody>
            {weather.map(temp => <tr>
                <td>{temp.temp_min}</td>
                <td>{temp.temp_max}</td>
            </tr>)}
            </tbody>
        </table>
    )
}
export default Weather;