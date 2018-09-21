import React from 'react'
import { Route, Link } from "react-router-dom";
import Form from "./components/form.js";
import Weather from "./components/weather.js";
//import Videos from "./components/Videos.js"
//import Links from "./components/Links.js"

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
    const api_call = await fetch (`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=3fbfd8c87b4e4744d88dc15f94887a67&units=imperial`);
    const data = await  api_call.json();
    if(city && country){
      this.setState({
        country: data.sys.country,
        city: data.name,
        temperature: data.main.temp,
        humidity: data.main.humidity,
        description: data.weather[0].description,
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

      <h1 align="center">
        WEATHER BUG
      </h1>
     <p align="center">Find Out The Temperature, Weather Conditons and More....</p>
        
      <h1 className="bug rainbow">"WEATHER BUG"</h1>
     <p className="weatherinfo rainbow">Find Out The Temperature, Weather Conditons and More....</p>

     <Form getWeather = {this. getWeather}/>
     <Weather
       country= {this.state.country}
       city= {this.state.city}
       temperature={this.state.temperature}
       humidity= {this.state.humidity}
       description= {this.state.description}
       error= {this.state.error}
       />
     <div>
      <button>
        <Link to="/videos">
        weather news
        </Link>
      </button>

    </div>
  </div>
)
}
}

export default App;
