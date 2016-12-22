import React, { Component } from 'react';
import './Weather.css';
import RainCloud from '../img/weather/RainCloud';
import Sun from '../img/weather/Sun';
import SunCloud from '../img/weather/SunCloud';
import Cloud from '../img/weather/Cloud';
import SnowCloud from '../img/weather/SnowCloud';

class Weather extends Component {
	componentDidMount() {
		var paths = document.getElementById('weather-main').getElementsByTagName('path');
		for (let i = 0; i < paths.length; i++) {
			paths[i].style = "filter:url(#dropshadow)";
		}
	}
	render() {
		return (
			<div>
				<div id="weather-main">
					<div id="weather-icon">
						<SnowCloud/>
					</div>
					<div id="weather-temp">
						29&deg;
					</div>
					<div id="weather-location">
						Minneapolis, MN
					</div>
					<hr />
					<div id="weather-time">
						5:44 PM
					</div>
					<div id="weather-date">
						December 21<sup>st</sup>, 2016
					</div>
					<svg>
						<filter id="dropshadow" height="130%">
							<feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
							<feOffset dx="2" dy="2" result="offsetblur"/>
							<feMerge>
								<feMergeNode/>
								<feMergeNode in="SourceGraphic"/>
							</feMerge>
						</filter>
					</svg>
					<div className="paper-texture"></div>
				</div>
				<div id="weather-forecast">
					<div id="day-1" className="forecast-day">
						<span className="forecast-day-dotw">Thursday</span>
						<span className="forecast-day-weather">40&deg;</span>&nbsp;
						<span className="forecast-icon"><RainCloud/></span>
					</div>
					<div id="day-2" className="forecast-day">
						<span className="forecast-day-dotw">Friday</span>
						<span className="forecast-day-weather">32&deg;</span>&nbsp;
						<span className="forecast-icon"><Sun/></span>
					</div>
					<div id="day-3" className="forecast-day">
						<span className="forecast-day-dotw">Saturday</span>
						<span className="forecast-day-weather">23&deg;</span>&nbsp;
						<span className="forecast-icon"><Cloud/></span>
					</div>
					<div id="day-4" className="forecast-day">
						<span className="forecast-day-dotw">Sunday</span>
						<span className="forecast-day-weather">52&deg;</span>&nbsp;
						<span className="forecast-icon"><SunCloud/></span>
					</div>
					<div id="day-5" className="forecast-day">
						<span className="forecast-day-dotw">Monday</span>
						<span className="forecast-day-weather">13&deg;</span>&nbsp;
						<span className="forecast-icon"><SnowCloud/></span>
					</div>
					<div className="paper-texture"></div>
				</div>
			</div>
		);
	}
}

export default Weather;