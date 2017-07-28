import axios from 'axios';

const API_KEY='7a9794cbb426f7c606905782dcf82df0';
const rootURL = `http://api.openweathermap.org/data/2.5/forecast?appid${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';


export function fetchWeather() {

	const url =`${ROOT_URL}&a=${city},us`
	const request = axios.get(url);
	console.log('request', request);
	return {
		type: FETCH_WEATHER,
		payload: request
	};
}