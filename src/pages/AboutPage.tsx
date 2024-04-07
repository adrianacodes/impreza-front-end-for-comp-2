// import React from "react";
import Header from "../components/Header";

const AboutPage = () => {
  return (
    <>
      <Header />

      <div className="container">
        <div className="col-md-3 text-end">
          <a href="/html/contact.html">
            <button type="button" className="btn btn-outline-primary me-2">
              contact us
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
