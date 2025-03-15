import React from "react";
import "./paymentsuccess.css";
import { Link, useParams } from "react-router-dom";

const PaymentSuccess = ({ user }) => {
  const params = useParams();

  return (
    <>
      <div className="payment-success-page">
        {user ? (
          <div className="success-message">
            <h2>🎉 Payment Successful!</h2>
            <p>Your course subscription has been activated ✅</p>
            <p>
              Reference No: <strong>{params.id}</strong>
            </p>
            <Link to={`/${user._id}/dashboard`} className="btn">
              🚀 Go to Dashboard
            </Link>
          </div>
        ) : (
          <p className="error-message">Error: User data not found.</p>
        )}
      </div>
    </>
  );
};

export default PaymentSuccess;
