import React, { PropTypes } from 'react';
import {Link} from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
    <nav className="headerStyle">
      <ul>
      <button><Link to="/">Home</Link></button>
      <button><Link to="/videos">Videos</Link></button>
      </ul>

      </nav>
    </div>
  )
}
export default Navigation;
