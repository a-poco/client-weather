import React, { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import { AddWeather } from '../types';
import '../App.css';

interface AddWeatherProps {
    addWeather: AddWeather;
}
const AddWeatherForm: React.FC<AddWeatherProps> = ({ addWeather }) => {
    const [cityName, setCityName] = useState("");


    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === "cityName") {
            setCityName(e.target.value)
        }
    };

    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        addWeather(cityName);
        setCityName("");
    }
    
    return (
        <form className="form">
            <label>Find a City</label>
            <div className="form__form">
                <input type="text" className="form__name" placeholder="" name="cityName" value={cityName} onChange={handleChange} autoFocus></input>
                <button type="submit" className="form__btn" onClick={handleSubmit}>Search</button>
            </div>
        </form>
    );
};

export default AddWeatherForm;