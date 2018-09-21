import React from 'react';

const Form = props =>(

          <center><form onSubmit= {props.getWeather}>
            <input className= "form" type="text" name="city" placeholder="state"/>

            <input className="form" type="text" name="country" placeholder="country" />

            <button className="btn">Check Weather</button>
        </form></center>

    );

export default Form;
