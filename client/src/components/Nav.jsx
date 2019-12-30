import React from 'react';
import './Css/Nav.css';
import { withRouter, Link } from 'react-router-dom';
import logo from '../Assets/logo.png';


class Nav extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div className='header'>
        <div id='header-logo'>
          <Link to='/'>
            <img src={logo} alt='Second Atlantic Terminal Logo'></img>
          </Link>
        </div>
        <div id='header-nav'>
          <ul>
            <li><Link to='/'>home</Link></li>
            <li><Link to='/resident'>residences</Link></li>
            <li><Link to='/amenities'>amenities</Link></li>
            {/* <li><Link to="/neighborhood">neighborhood</Link></li> */}
            <li><Link to='/contact'>contact</Link></li>
            <li><Link to='/users'>resident login</Link></li>

            {/* <li><Link onClick={this.logOut}>Log Out</Link></li> */}
          </ul>
        </div>
      </div>
    )
  }
}

export default withRouter(Nav);