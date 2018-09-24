import React, { PropTypes } from 'react';
import {Link} from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
    <nav className="headerStyle">

    <Link className="home" to="/"><strong>Home</strong></Link>
    <Link className="video"to="/videos"><strong>Videos</strong></Link>


      </nav>
    </div>
  )
}
export default Navigation;
