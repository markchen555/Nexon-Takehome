import React, { Component } from "react";
import { translate } from "react-i18next";
import PropTypes from 'prop-types';

import "./dropdown-mobile.css";

class dropdownMobile extends Component {

  onDropdown = () => {
    const { i18n } = this.props;
    let selectBox = document.getElementById("selectBox");
    let selectedValue = selectBox.options[selectBox.selectedIndex].value;
    i18n.changeLanguage(selectedValue);
  }
  
  render() {
    const { t } = this.props;

    return (
      <div className="dropdown-container">
        <div className="dropdown-section">
          <select id="selectBox" className="dropdown" onChange={() => this.onDropdown()}>
            <option className="dropdown-content" value="none" defaultValue >{t("Language")}</option>
            <option className="dropdown-content" value="en">English</option>
            <option className="dropdown-content" value="tw">繁體中文</option>
            <option className="dropdown-content" value="kr">한국어</option>
          </select>
        </div>
      </div>
    );
  }
}

dropdownMobile.propTypes = {
  t: PropTypes.func.isRequired,
  i18n: PropTypes.object.isRequired
};

export default translate("translations")(dropdownMobile);