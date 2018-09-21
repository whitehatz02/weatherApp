import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch, NavLink} from "react-router-dom";

//import Links from "./components/Links";
import Videos from "./components/Videos";
import App from './App.jsx'
import './index.css'
//import weather from "./components/weather";

class Index extends React.Component {
     render() {
       return(
         <BrowserRouter>
           <div>
                <Switch>
                    <Route exact path ="/" component= {App} />
                    <Route path="/videos" component = {Videos} />
                 </Switch>
           </div>
         </BrowserRouter>
       )};
};

ReactDOM.render(<Index />, document.getElementById('root'))
