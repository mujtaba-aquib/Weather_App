/*
 * File: mainComponents.js
 * Created: Tuesday, 1st June 2021 9:00:24 pm
 * Author: Aquib Mujtaba (aquib.pust13@gmail.com)
 * -----
 * Last Modified: Saturday, 24th July 2021 5:59:36 pm
 * Modified By: Aquib Mujtaba (aquib.pust13@gmail.com)
 * -----
 * Copyright (c) 2021 @quib_self
 */


import React from "react";
import { Component } from "react";
import WeatherForm from './weather/weather.js';
import WeatherCard from './weather/WeatherCard.js'

// import { Dimmer, Loader } from 'semantic-ui-react';

import 'bootstrap/dist/css/bootstrap.min.css';


const API_KEY = 'c0b99b9637cf090921df0ee5c70ce292';

class MainComponent extends Component {

    constructor() {
        super();
        this.state = {
            city: undefined,
            country: undefined,
            temp: undefined,
            icon: undefined,
            macx_temp: undefined,
            min_temp: undefined,
            description: '',
            error: false,
        };
        //this.getWeatherData();

        this.weathericon = {
            Thunderstorm: 'wi-thunderstorm',
            Drizzle: 'wi-sleet',
            Snow: 'wi-snow',
            Rain: 'wi-storm-showers',
            Atmospheere: 'wi-fog',
            Clear: 'wi-day-sunny',
            Clouds: 'wi-day-fog'
        };
    }

    get_weather_icon(icons, rangeId) {
        switch (true) {
            case rangeId >= 200 && rangeId <= 232:
                this.setState({ icon: this.weathericon.Thunderstorm })
                break;

            case rangeId >= 300 && rangeId <= 321:
                this.setState({ icon: this.weathericon.Drizzle })
                break;

            case rangeId >= 500 && rangeId <= 531:
                this.setState({ icon: this.weathericon.Rain })
                break;

            case rangeId >= 600 && rangeId <= 622:
                this.setState({ icon: this.weathericon.Snow })
                break;

            case rangeId >= 701 && rangeId <= 781:
                this.setState({ icon: this.weathericon.Atmospheere })
                break;

            case rangeId === 800:
                this.setState({ icon: this.weathericon.Clear })
                break;

            case rangeId >= 801 && rangeId <= 804:
                this.setState({ icon: this.weathericon.Clouds })
                break;
            default:
                this.setState({ icon: this.weathericon.Clouds })
        }
    }

    getWeatherData = async (e) => {

        e.preventDefault();

        let city = e.target.elements.city.value;
        let country = e.target.elements.country.value;

        if (city && country) {
            const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
            const response = await api_call.json();
            // console.log(response);
            this.setState({
                city: `${response.name},`,
                country: response.sys.country,
                temp: response.main.temp,
                max_temp: response.main.temp_max,
                min_temp: response.main.temp_min,
                description: response.weather[0].description,
                error: false,
            });
            this.get_weather_icon(this.weathericon, response.weather[0].id);
        } else {
            this.setState({
                error: true,
            })
        }
    }

    render() {
        return (
            <div className="main">
                <div className="row">
                    <div className="col-md-12">
                        <WeatherForm
                            loadweather={this.getWeatherData}
                            error={this.state.error}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <WeatherCard
                            city={this.state.city}
                            country={this.state.country}
                            temp={this.state.temp}
                            temp_min={this.state.min_temp}
                            temp_max={this.state.max_temp}
                            status={this.state.description}
                            icon={this.state.icon}
                        />
                    </div>
                </div>

            </div>
        );
    }
}

export default MainComponent;