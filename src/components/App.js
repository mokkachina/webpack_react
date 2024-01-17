import React, {Component, Fragment} from "react";

import "../components/Weather";
import "../styles/App.css";
import "../styles/Header.css";
import "../styles/Main.css";
import Header from "./Header";
import Main from "./Main";
import Weather from "./Weather";

function App() {
        const buttonName = "Some button updated 2";
        return (
            <Fragment>
                <Header buttonName = {buttonName}/>
                <Main/>

            </Fragment>
        );

}

export default App;
