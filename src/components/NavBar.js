import React, { PropTypes } from 'react';
import {Link} from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
    <nav className="headerStyle">
      <ul>
      <button type="button"><Link to="/"><strong>Home</strong></Link></button>
    <button type="button"><Link to="/videos"><strong>Videos</strong></Link></button>
      </ul>

      </nav>
    </div>
  )
}
export default Navigation;
