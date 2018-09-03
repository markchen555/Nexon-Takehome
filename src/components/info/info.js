import React, { Component } from 'react';
import { translate } from "react-i18next";
import PropTypes from 'prop-types';

import './info.css';

class info extends Component {
  render() {
    const { t } = this.props;
    return (
      <section className="info-container">
        <div className="col-6 info-section">
          <img src={t("MapleStory-Img")} className="info-logo" alt="logo" />
          <p className="info-intro">{t("MapleStoryM1")}</p>
          <p className="info-intro">{t("MapleStoryM2")}</p>
          <p className="info-intro">{t("MapleStoryM3")}</p>
        </div>
      </section>
    );
  }
}

info.propTypes = {
  t: PropTypes.func.isRequired
};

export default translate("translations")(info);