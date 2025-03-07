import React from "react";
import { MdDashboard } from "react-icons/md";
import "./account.css";
import Footer from "../../components/footer/Fotter";

const Account = () => {
  return (
    <div>
      <div className="profile">
        <h2>My Profile</h2>
        <div className="profile-info">
          <p>
            <strong>Name - Sandeep Pati</strong>
          </p>
          <p>
            <strong>Email - SandeepPati69@gmail.com</strong>
          </p>
          <button className="common-btn">
            Dashboard
            <MdDashboard />
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Account;
