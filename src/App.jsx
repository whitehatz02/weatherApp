import React, { Component } from 'react'
import Form from "./components/form.js";
import Weather from "./components/weather.js";


class App extends React.Component {
  constructor(props){
    super (props);
    this.state = {
      country: undefined,
      city: undefined,
      temperature: undefined,
      humidity: undefined,
      description: undefined,
      error: undefined
    }
    this.getWeather = this.getWeather.bind(this);
  }
  async getWeather(e){
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch (`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=3fbfd8c87b4e4744d88dc15f94887a67&units=amperial`);
    const data = await  api_call.json();
    if(city && country){
      this.setState({
        country: data.sys.country,
        city: data.name,
        temperature: data.main.temp,
        humidity: data.main.humidity,
        description: data.Weather[0].description,
        error: ""

      });
    }else{
      this.setState({
        country: undefined,
        city: undefined,
        temperature: undefined,
        humidity: undefined,
        description: undefined,
        error: "PLEASE TRY AGAIN"
      });
    }
  }

  render() {
    return(  <div>
      <h1>WEATHER BUG</h1>
     <p>white hatz</p>
     <Form />
     <Weather />
    </div>
)
  }
}

export default App
