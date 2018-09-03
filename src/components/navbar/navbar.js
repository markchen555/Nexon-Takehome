import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { translate } from "react-i18next";
import PropTypes from 'prop-types';

import DropdownWeb from '../../commons/dropdown-web/dropdown-web';
import DropdownMobile from '../../commons/dropdown-mobile/dropdown-mobile';

import logo from '../../assets/logo.png'
import './navbar.css';

class navbar extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      width: 0, 
      height: 0 
    };
  }
  
  componentDidMount = () => {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  componentWillUnmount = () => {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    const { t } = this.props;

    return (
      <nav className="navbar">
        <ul>
          <li>
            <img src={logo} className="logo" alt="Logo"/>
          </li>
          <li><NavLink to='/' className="navbar-link">{t("Home")}</NavLink></li>
          <li><NavLink to='/about' className="navbar-link">{t("About")}</NavLink></li>
          <li className="right">
          {this.state.width > 450 ? (<DropdownWeb />) : (<DropdownMobile />)}
          </li>
        </ul>
      </nav>
    );
  }
}

navbar.propTypes = {
  t: PropTypes.func.isRequired
};

export default translate("translations")(navbar);