/**
 * Created by anjana on 15-08-2017.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux'
import Chart from '../components/chart'
import GoogleMap from '../components/map'
class WeatherList extends  Component{
    renderWeather(cityData){
        const temp = cityData.list.map(weather => weather.main.temp)
        const pressure = cityData.list.map(weather => weather.main.pressure)
        const humidity = cityData.list.map(weather => weather.main.humidity)
        console.log(cityData.city.coord)
        return (
            <tr key={cityData.city.name}>
                <td>
                <GoogleMap lon={cityData.city.coord.lon} lat={cityData.city.coord.lat}/>
                    {cityData.city.name}
                </td>
                <td>
                    <Chart data={temp} color="blue" units="K"/>
                </td>
                <td>
                    <Chart data={pressure} color="pink" units="hPa"/>
                </td>
                <td>
                    <Chart data={humidity} color="purple" units="%"/>
                </td>
            </tr>
        );
    }
    render(){
        return (
            <table className="pure-table center">
                <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature</th>
                    <th>Pressure</th>
                    <th>Humidity</th>
                </tr>
                </thead>
                <tbody>
                {
                    this.props.weather.map(this.renderWeather)
                }
                </tbody>
            </table>
        )
    }
}

function mapStateToProps({weather}) {
    return {weather};
}

export default connect(mapStateToProps)(WeatherList);