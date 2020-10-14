import React from "react";
import styled from "styled-components";
import "./UpperHeader.css";

const EmailUpper = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  color: #000;
  display: inline-block;
  padding: 14px 10px 14px 2px;
`;

const PhoneUpper = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  color: #000;
  display: inline-block;
  padding: 14px 10px 14px 2px;
`;

function UpperHeader() {
  return (
    <>
      <div className="upper-header">
        <div className="upper-header-inner-box">
          <EmailUpper>
            <img
              className="email-icon"
              src="https://saibabatravels.com/wp-content/themes/saibaba/images/black-mail-icon.svg"
              alt="email"
            />
            info@saibabatravels.com
          </EmailUpper>
          <PhoneUpper>
            <img
              className="email-icon"
              src="https://saibabatravels.com/wp-content/themes/saibaba/images/call-icon.svg"
              alt="email"
            />
            Call Us: +91 98231 67777
          </PhoneUpper>
        </div>
      </div>
    </>
  );
}

export default UpperHeader;
