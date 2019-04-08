import React, {Component} from "react";
import {connect} from 'react-redux';
import {fetchData, getWeather} from "../actions/weatherStation";
import Forecast from "./Forecast"
import Spinners from "../components/Spinners";
const mapStateToProps = state => ({...state.weatherStation});
class Weather extends Component {
    componentDidMount() {
        const detectLocation = new Promise((resolve, reject) => {
            if("geolocation" in navigator) {
                navigator.geolocation.getCurrentPosition(position => {
                    resolve(position.coords)
                }, error => {
                    reject(error)
                })
            }
        })
        const {dispatch} = this.props;
        detectLocation.then(location => {
            if(process.env.REACT_APP_ENV !== "production") {
                dispatch(getWeather(location))
            } else {
                dispatch(fetchData(location))
            }
        })
        .catch(() => {
            dispatch(fetchData("London"))
        })
    }
    render() {
        const {data, status} = this.props
        return (
            data ? <Forecast data={data} fetchData={fetchData} /> : <Spinners status={status} />
        )
    }
}
export default connect(mapStateToProps)(Weather)