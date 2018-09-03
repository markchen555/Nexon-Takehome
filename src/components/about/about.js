import React, { Component } from 'react';
import { translate } from "react-i18next";
import PropTypes from 'prop-types';

import './about.css';

class about extends Component {
  render() {
    const { t } = this.props;
    return (
      <section className="about-container">
        <div className="about-section">
          <div className="about-title">
            <span>{t("AboutTitle")}</span>
          </div>
          <div className="about-content">
            <span>{t("AboutContent")}</span>
          </div>
        </div>
      </section>
    );
  }
}

about.propTypes = {
  t: PropTypes.func.isRequired
};

export default translate("translations")(about);