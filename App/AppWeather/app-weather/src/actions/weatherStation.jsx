import axios from "axios";
import { FETCH_DATA_FULFILLED, FETCH_DATA_REJECTED } from "../constants/ActionTypes";
import {APP_ID} from "../constants/generalConstants";
import weatherOfflineData from "../api/weather";

export const fetchData = region => dispatch => {
    const {latitude, longitude} = region || {}
    const getDataByCity = `https://api.openweathermap.org/data/2.5/weather?q=${region}&units=metric&appid=${APP_ID}`;
    const getDataByCoords = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${APP_ID}`;
    const location  = typeof(region) === "object" ? getDataByCoords : getDataByCity;
    return axios.get(location)
        .then(response => {
            dispatch({type: FETCH_DATA_FULFILLED, payload: response.data})
        })
        .catch(err => {
            dispatch({type: FETCH_DATA_REJECTED, payload: err})
        })
}
export const getWeather = () => dispatch => {
    weatherOfflineData.getOfflineWeather(data => {
        dispatch({type: FETCH_DATA_FULFILLED, payload: data})
    })
}
