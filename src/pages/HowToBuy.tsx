import React from "react";
import Header from "../components/Header";

const HowToBuy = () => {
  return (
    <>
    <Header/>
      {/* <!--how to shop--> */}
      <div className="card-group text-center">
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-4">
              <div className="card mb-3" style={{ border: "none" }}>
                <div className="card h-100" style={{ border: "none" }}>
                  <div className="card-body">
                    <img
                      src="images/find your product.png"
                      className="img-thumbnail"
                      alt="finding your product"
                    />
                    <h3>Choose Product</h3>
                    <p>Congue tincidunt shackle travel</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-3" style={{ border: "none" }}>
                <div className="card h-100" style={{ border: "none" }}>
                  <div className="card-body">
                    <img
                      src="images/how to shop- basket.png"
                      className="img-thumbnail"
                      alt="placing items in the basket"
                    />
                    <h3>Add to the basket</h3>
                    <p>Brunch sapori de detoso</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-3" style={{ border: "none" }}>
                <div className="card h-100" style={{ border: "none" }}>
                  <div className="card-body">
                    <img
                      src="images/proceed to check out.png"
                      className="img-thumbnail"
                      alt="placing basket with the items into the box for delivery"
                    />
                    <h3>Proceed to check out</h3>
                    <p>Brunch sapori de detoso</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-3" style={{ border: "none" }}>
                <div className="card h-100" style={{ border: "none" }}>
                  <div className="card-body">
                    <img
                      src="images/choose delivery.png"
                      className="img-thumbnail"
                      alt="Choose your delivery"
                    />
                    <h3>Choose the delivery location and delivey service</h3>
                    <p>Brunch sapori de detoso</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-3" style={{ border: "none" }}>
                <div className="card h-100" style={{ border: "none" }}>
                  <div className="card-body">
                    <img
                      src="images/pay online.png"
                      className="img-thumbnail"
                      alt="Pay online with your card"
                    />
                    <h3>Pay online with your card</h3>
                    <p>Brunch sapori de detoso</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-3" style={{ border: "none" }}>
                <div className="card h-100" style={{ border: "none" }}>
                  <div className="card-body">
                    <img
                      src="images/track your delivery.png"
                      className="img-thumbnail"
                      alt="Track your delivery"
                    />
                    <h3>Track your order</h3>
                    <p>Brunch sapori de detoso</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-3" style={{ border: "none" }}>
                <div className="card h-100" style={{ border: "none" }}>
                  <div className="card-body">
                    <img
                      src="images/package delivered.png"
                      className="img-thumbnail"
                      alt="package delivered"
                    />
                    <h3>Receive the product</h3>
                    <p>Brunch sapori de detoso</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowToBuy;
