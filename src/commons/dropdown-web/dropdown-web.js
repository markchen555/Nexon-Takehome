import React, { Component } from "react";
import { translate } from "react-i18next";
import PropTypes from 'prop-types';

import "./dropdown-web.css";

class dropdownWeb extends Component {

  onDropdown = () => {
    let dropdown = document.getElementsByClassName('dropdown-web-content')[0];
    let tag = document.getElementsByTagName('i')[0];
    if(!dropdown.classList.contains('active')) {
      dropdown.classList.add('active');
      tag.className = "fa fa-caret-up arrow";
    } else {
      dropdown.classList.remove('active');
      tag.className = "fa fa-caret-down arrow";
    }
  }

  render() {
    const { i18n ,t } = this.props;
   
    const changeLanguage = lng => {
      i18n.changeLanguage(lng);
      this.onDropdown();
    };
    return (
      <div className="dropdown-web-container">
        <button onClick={() => this.onDropdown()} className="dropbtn">{t("Language")}
          <i className="fa fa-caret-down arrow"></i>
        </button>
        <div className="dropdown-web-content">
          <a className="dropdown-web-option" href="javascript:void(0)" onClick={() => changeLanguage("en")}><i className="fa fa-flag flag"></i>EN</a>
          <a className="dropdown-web-option" href="javascript:void(0)" onClick={() => changeLanguage("tw")}><i className="fa fa-flag flag"></i>TW</a>
          <a className="dropdown-web-option" href="javascript:void(0)" onClick={() => changeLanguage("kr")}><i className="fa fa-flag flag"></i>KR</a>
        </div>
      </div> 
    );
  }
}

dropdownWeb.propTypes = {
  t: PropTypes.func.isRequired,
  i18n: PropTypes.object.isRequired
};

export default translate("translations")(dropdownWeb);