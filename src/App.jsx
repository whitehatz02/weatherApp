import React, { Component } from 'react';
import Form from "./components/form.js";
import Weather from "./components/weather.js";

class App extends React.Component {
  render() {
    return (
      <div>
      <h1>WEATHER BUG</h1>
      <p>white hatz</p>
      <Form />
      <Weather />
      </div>
    );
  }
}

export default App
