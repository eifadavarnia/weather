import React, {Component} from "react";
import {Route, Routes} from "react-router-dom";
import Weather from "./Weather";

export default class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <Routes>
                        <Route index element={<div className="App"><Weather city="lisbon"/></div>}/>
                        <Route path="/paris" element={<div className="App"><Weather city="Paris"/></div>}/>
                        <Route path="/sydney" element={<Weather city="Sydney"/>}/>
                        <Route path="/san-francisco" element={<Weather city="San Francisco"/>}/>
                    </Routes>
                </div>
            </div>
        );
    }
}
