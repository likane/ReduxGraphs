import React, {Component} from 'react';
import ( connect ) from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

 class WeatherList extends Component {

 	renderWeather(cityData) {
 		return (
 			const name = cityData.city.name;
 			//const temps = _.map(cityData.list.map(weather => weather.main.temp),())
 			const temps = cityData.list.map(weather => weather.main.temp);
 			const pressures = cityData.list.map(weather => weather.main.pressure);
 			 			const humidities = cityData.list.map(weather => weather.main.humidity);
 			 			const {lon, lan} = cityData.city.coord;
 			 			//const lat = cityData.city.coord.lat;
 			<tr key={name}>
 				//<td>{name}</td>
 				<td>
 					<GoogleMap lon={lon} lat={lat} /></td>
 				</td>
 				<td>
 					<Chart data={temps} color="orange" units="K"/>

 				</td>
 				<td>
 					<Chart data={pressures} color="green" units="hPa"/>

 				</td>
 				<td>
 					<Chart data={humidity} color="black" units="%"/>

 				</td>
 			</tr>
 			)
 	}

	render(){
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th> City</th>
						<th> Temprature (K)</th>
						<th> Pressure (hPa) </th>
						<th> Humidity (%)</th>
					</tr>
				</thead>

				<tbody>
					{this.props.weather.map(this.renderWeather)}

				</tbody>
			</table>
			)
	}
}

function mapStateToProps({weather}) {

	//const weather = state.weather
	return { weather}; // {weather:weather}
}

export default connect (mapStateToProps)(WeatherList);