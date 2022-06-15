type WeatherData = {
    forecast: string,
    temperature: number,
    name: string,
    icon: string,
    date: string
}

type AddWeather = (name: string) => void;
type WeatherArticle = (weatherData: WeatherData) => void;

export type {
    WeatherData,
    AddWeather,
    WeatherArticle
}