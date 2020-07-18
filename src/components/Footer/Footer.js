import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <img src={require("./logo.png")} alt="logo" />
          </div>
          <div className="col-md-5 cta">
            <h2>Contact Us</h2>
            <p>FIRST AID SOLUTIONS First Aid Training, Bangkok, Thailand</p>
            <p>
              Delivering quality first aid training in Bangkok and nearby
              regions of
              <br />
              Thailand.
            </p>
            <p>Courses delivered in English and Thai.</p>
            <p>Mobile: 0802415724</p>
          </div>
          <div className="col-md-2">
            <button>Facebook</button>
            <button>Email</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
