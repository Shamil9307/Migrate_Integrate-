import React from 'react';

export default function Footer(): JSX.Element {
  return (
    <footer className="new_footer_area bg_color" id="footer">
      <div className="new_footer_top">
        <div className="footer_bg">
          <div className="footer_bg_three"></div>
          <div className="footer_bg_moto"></div>
          <div className="footer_bg_one"></div>
          <div className="footer_bg_two"></div>
        </div>
      </div>
      <div className="footer_bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-sm-7">
              <p className="mb-0 f_400">© Migrate&Integrate 2023 All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
