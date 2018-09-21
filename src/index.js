import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Links from "./components/Links";
import videos from "./components/videos";
import App from './App.jsx'
import './index.css'

class Index extends React.Component {
     render() {
       return(
         <BrowserRouter>
           <div>

                <Links />

                <Switch>
                    <Route exact path ="/" components={App}/>
                    <Route path="/videos" component = {videos}/>
                 </Switch>
           </div>
         </BrowserRouter>
       )
     }

}

ReactDOM.render(<App />, document.getElementById('root'))
