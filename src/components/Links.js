import React from "react"
import { Link } from "react-router-dom"

const Links = () => (
 <div className="links">
 <ul>
       <li>
         <Link to="/weather">weather</Link>
       </li>
       <li>
         <Link to="/videos">videos</Link>
       </li>
     </ul>
 </div>
);
export default Links;
