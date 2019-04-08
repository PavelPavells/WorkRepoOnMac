import React, {Component} from "react";
import {connect} from "react-redux";
import {Paragraph, Input, Form} from "../styles";
import weatherImage from "../constants/weatherImage";
import { fethcData } from '../actions/weatherStation';

let input;
class Forecast extends Component {
    getIcon = data => `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    fetchWeatherWithInput = e => {
        const {fetchData, dispatch} = this.props;
        e.preventDefault();
        dispatch(fetchData(input.value))
    }
    render() {
        const {data} = this.props
        return (
            <div id="weather" style={{backgroundImage: `url(${weatherImage[data.weather[0].icon]})`}}>
                <Paragraph>{data.name}</Paragraph>
                <img style={{ objectFit: 'cover' }} src={this.getIcon(data)} alt="icon" />
                <Paragraph>
                    {data.weather[0].main}
                </Paragraph>
                <Form className="Form" onSubmit={e => this.fetchWeatherWithInput(e)}>
                    <Input 
                        placeholder="City..."
                        type="text"
                        ref={node => {(input = node)}}
                    />
                    <button type="submit">Click</button>
                </Form>
            </div>
        )
    }
}
export default connect()(Forecast)