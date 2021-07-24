/*
 * File: weather.js
 * Created: Tuesday, 1st June 2021 12:01:10 am
 * Author: Aquib Mujtaba (aquib.pust13@gmail.com)
 * -----
 * Last Modified: Saturday, 24th July 2021 6:02:14 pm
 * Modified By: Aquib Mujtaba (aquib.pust13@gmail.com)
 * -----
 * Copyright (c) 2021 @quib_self
 */


import React from 'react';

import './style.css';


const WeatherForm = (props) => {

    return (
        <div className="container">
            <div>{props.error ? error() : null}</div>
            <form onSubmit={props.loadweather}>
                <div className="row">
                    <div className="col-md-3 py-2 mb-sm-3">
                        <input type="text"
                            className="form-control"
                            name="city"
                            placeholder="City"
                            autoComplete="off"
                        //value="Dhaka"
                        />
                    </div>
                    <div className="col-md-3 py-2 mb-sm-3">
                        <input type="text"
                            className="form-control"
                            name="country"
                            placeholder="Country"
                            autoComplete="off"
                        //Value='Bangladesh'
                        />
                    </div>
                    <div className="col-md-3 py-2 mt-md-0">
                        <button className="btn btn-warning form-control">Get Weather Data</button>
                    </div>
                </div>
            </form>
        </div>
    )

}
function error() {
    return (
        <div className=" alert alert-danger mx-5" role="alert">
            <p> Please Enter the City and Country fields ..!</p>
        </div>
    )
}


export default WeatherForm;