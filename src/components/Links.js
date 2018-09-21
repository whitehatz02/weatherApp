import React from "react"
import { NavLink } from "react-router-dom"
import Videos from "./Videos"

const Links = () => {
  return (
<div>
 <nav className="headerStyle">
 <ul>

         <NavLink to="/">weather</NavLink>

         <NavLink to="/Videos">Videos</NavLink>
     </ul>
    </nav>
 </div>
 );
}
export default Links;
