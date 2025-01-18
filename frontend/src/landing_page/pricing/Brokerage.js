import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 text-center border-top">
        <div className="col-lg-8 col-sm-12 p-4 ">
          <h3 className="fs-5">
            <a href="" style={{ textDecoration: "none" }}>
              Brokerage Calculator
            </a>
          </h3>
          <ul style={{ textAlign: "left", lineHeight: "2.5", fontSize: "14px" }}
            className="text-muted">
            <li>
              Call & Trade and RMS auto-squareoff:Additional charges of ₹50 +
              GST per order.
            </li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>
              Physical copies of contract notes, if required, shall be charged
              ₹20 per contract note. Courier charges apply.
            </li>
            <li>
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for
              equity (whichever is lower).
            </li>
            <li>
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li>
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </li>
          </ul>
        </div>
        <div className="col-lg-4 col-sm-12 p-4">
          <h3 className="fs-5">
            <a href="" style={{ textDecoration: "none" }}>
              List of charges
            </a>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
