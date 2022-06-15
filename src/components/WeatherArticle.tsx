import React from "react";
import { WeatherData } from "../types";

interface WeatherArticleProps {
    weatherData: WeatherData;
}
const WeatherArticle: React.FC<WeatherArticleProps> = ({ weatherData }) => {
    return (
        <article className="weather-article">
            <div className="weatherIcon">
                <img src={`http://openweathermap.org/img/wn/${weatherData.icon}@4x.png`} className="weather-article__icon" alt="" />
            </div>
            <div className="weatherInfo">
                <h1 className='temperature'>{weatherData.temperature.toFixed()}°C</h1>
                <div className="description">
                    <h2 className='weatherCondition'>{weatherData.forecast}</h2>
                    <h1 className='place'>{weatherData.name}</h1>
                </div>
            </div>
            <div className="date">{weatherData.date}</div>
        </article>
    );
};

export default WeatherArticle;