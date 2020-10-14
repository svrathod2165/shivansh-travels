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

const EmailIcon = styled.img`
  padding-right: 5px;
`;

function UpperHeader() {
  return (
    <>
      <div className="upper-header">
        <div className="upper-header-inner-box">
          <EmailUpper>
            <EmailIcon>
              <img
                src="https://saibabatravels.com/wp-content/themes/saibaba/images/black-mail-icon.svg"
                alt="email"
              />
            </EmailIcon>
            info@saibabatravels.com
          </EmailUpper>
          {/* <div className="email-upper">info@saibabatravels.com</div> */}
          <div className="phone-up">Call Us: +91 98231 67777</div>
        </div>
      </div>
    </>
  );
}

export default UpperHeader;
