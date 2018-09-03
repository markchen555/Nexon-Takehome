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
            <option className="dropdown-content" value="en">EN</option>
            <option className="dropdown-content" value="tw">TW</option>
            <option className="dropdown-content" value="kr">KR</option>
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