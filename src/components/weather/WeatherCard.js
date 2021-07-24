/*
 * File: WeatherCard.js
 * Created: Friday, 23rd July 2021 4:46:29 pm
 * Author: Aquib Mujtaba (aquib.pust13@gmail.com)
 * -----
 * Last Modified: Saturday, 24th July 2021 5:41:34 pm
 * Modified By: Aquib Mujtaba (aquib.pust13@gmail.com)
 * -----
 * Copyright (c) 2021 @quib_self
 */

import React from 'react';


import 'weather-icons/css/weather-icons.css';

function convertTemperature(temp) {
    return temp = Math.floor(temp - 273.15);
}


function maxMinTemp(min, max) {
    if (min && max) {
        return (
            <h2>
                <span className="px-5">{min}&deg;</span>
                <span className="px-5">{max}&deg;</span>
            </h2>
        )
    } else
        return (
            null
        )
}

const WeatherCard = (props) => {

    console.log(props);

    return (
        <div className="container" style={{ marginBottom: '100px' }}>
            <form>
                <div className="row  " style={{
                    color: 'white',
                    margin: 'auto',
                    background_color: 'transparent',
                }}>
                    <div className="col-md-8 offset-md-2">
                        <h1 style={{
                            fontSize: '35px',
                            paddingBottom: '25px',
                        }}>{props.city} {props.country}</h1>
                        <h4>
                            <i className={`wi ${props.icon} display-1`}></i>
                        </h4>
                        {props.temp ? (
                            <h1 className="py-2">{convertTemperature(props.temp)}&deg;</h1>) : null}
                        {maxMinTemp(convertTemperature(props.temp_min), convertTemperature(props.temp_max))}
                        <h3 className="py-2" style={{
                            fontSize: "25px",
                            textTransform: "Capitalize",
                        }}>{props.status}</h3>
                    </div>
                </div>
            </form>
        </div >
    )
}

export default WeatherCard;