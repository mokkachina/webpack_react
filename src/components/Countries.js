import React from "react";
import axios from "axios";

function Countries(){
    axios.get("https://restcountries.eu/rest/v2/all").then(res => {
        console.log(res);
    })
    return(
        <h1>Hello</h1>
    )
}
export default Countries;