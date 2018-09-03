import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { translate } from "react-i18next";
import PropTypes from 'prop-types';

import './footer.css';

class footer extends Component {
  render() {
    const { t } = this.props;
    return (
      <footer className="footer">
        <div className='row footer-section'>
          <div className='col-6 footer-content'>
            <div className='footer-title'>
              <span>NEXON</span>
            </div>
            <div className="footer-list">
              <div className="footer-list-link">
                <NavLink exact activeClassName="active" to='/' >
                  {t("Home")}
                </NavLink>
              </div>
              <div className="footer-list-link">
                <NavLink exact activeClassName="active" to='/about' >
                  {t("About")}
                </NavLink>
              </div>
            </div>
          </div>
          <div className='col-6 footer-content'>
            <div className='footer-title'>
              <span>{t("FOLLOWUS")}</span>
            </div>
            <div>
              <a href="https://www.facebook.com/nexonamerica/" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook social" aria-hidden="true"></i> </a>
              <a href="https://www.instagram.com/nexonmobile/?hl=en" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram social" aria-hidden="true"></i> </a>
              <a href="https://twitter.com/nexon_america?lang=en" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter social" aria-hidden="true"></i> </a>
              <a href="https://www.youtube.com/user/Nexon" target="_blank" rel="noopener noreferrer"><i className="fa fa-youtube social" aria-hidden="true"></i> </a>
            </div>
          </div>
        </div>
        <hr className="col-12 line-break"></hr>
        <div className='col-12 footer-rights'>
          <span>©2018 NEXON Korea Corporation and NEXON America Inc. All Rights Reserved.</span>
        </div>
      </footer>
    );
  }
}

footer.propTypes = {
  t: PropTypes.func.isRequired
};

export default translate("translations")(footer);