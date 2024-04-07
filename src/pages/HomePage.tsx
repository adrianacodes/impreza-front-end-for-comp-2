import Header from "../components/Header";
import { Carousel } from "react-bootstrap";
import "../App.css";

const homePage = () => {
  return (
    <>
      <Header />

      {/* <!-- carousel --> */}
      <div className="container-fluid text-center mb-14 px-0">
        <Carousel pause="hover" interval={3000} fade>
          <Carousel.Item>
            <img
              src="images/impreza 1.png"
              className="img-fluid"
              alt="Image 1"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="images/impreza 3.png"
              className="img-fluid"
              alt="Image 3"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="images/impreza 4.png"
              className="img-fluid"
              alt="Image 4"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="images/impreza 2.png"
              className="img-fluid"
              alt="Image 2"
            />
          </Carousel.Item>
        </Carousel>
      </div>

      {/* deals */}
      <div className="container ">
        <div className="flex justify-between w-full gap-4 mb-20">
          <div className="bg-gray-300 flex-grow w-1/3 relative hover-zoom transition duration-300 ease-in-out">
            <img
              className="w-full h-full object-cover"
              src="./images/homepage/summerSet2.png"
              alt="Summer Set, 1 hyperalergenic pillow, 1 summer hyperalergenic duvet"
            />
            <div className="absolute top-4 left-0 text-xl text-grey-800 p-2 font-black">
              {" "}
            </div>
          </div>
          <div className="bg-gray-300 flex-grow w-1/3 hover-zoom transition duration-300 ease-in-out">
            <img
              className="w-full h-full object-cover"
              src="./images/homepage/deals2.png"
              alt="Save up to 50% off"
            />
          </div>
          <div className="bg-gray-300 flex-grow w-1/3 hover-zoom transition duration-300 ease-in-out">
            <img
              className="w-full h-full object-cover"
              src="./images/homepage/bestsellers2.png"
              alt="Find our bestsellers"
            />
          </div>
        </div>
      </div>

      {/* materials */}
      <div className="container flex justify-between mb-20 pr-10 pl-10">
        <div className="text-center">
          <img
            src="./images/homepage/icons/icon-cotton.png"
            alt="Cotton"
            className="w-12 h-12 mx-auto mb-2"
          />
          <p className="text-xs">Cotton</p>
        </div>
        <div className="text-center">
          <img
            src="./images/homepage/icons/icon-wool.png"
            alt="Wool"
            className="w-12 h-12 mx-auto mb-2"
          />
          <p className="text-xs">Wool</p>
        </div>
        <div className="text-center">
          <img
            src="./images/homepage/icons/icon-water.png"
            alt="Hyperalergenic"
            className="w-12 h-12 mx-auto mb-2"
          />
          <p className="text-xs">Hyperalergenic</p>
        </div>
        <div className="text-center">
          <img
            src="./images/homepage/icons/icon-fabric.png"
            alt="Wear resistant"
            className="w-12 h-12 mx-auto mb-2"
          />
          <p className="text-xs">Wear resistant</p>
        </div>
        <div className="text-center">
          <img
            src="./images/homepage/icons/icon-recycling.png"
            alt="Recycled"
            className="w-12 h-12 mx-auto mb-2"
          />
          <p className="text-xs">Recycled</p>
        </div>
      </div>

      {/* examples */}
      <div className="bg-white">
        <div className="ml-8 flex flex-wrap items-start">
          {/* First Image */}
          <div className="w-full lg:w-1/2 pr-4 mb-3 mt-4">
            <div className="card text-bg mb-3">
              <img
                className="card-img-top"
                src="images/wool blanket white.png"
                alt="White wool Blanket"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 mb-3 mt-4">
            <div className="card text-bg ">
              <div className="card-body">
                <h5 className="card-title">Additional Information</h5>
                <p className="card-text">
                  Add your text content here. This could include additional
                  details about the products or any other information you want
                  to display.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-md" id="insides">
        {/* <!-- products --> */}
        <div className="card text-bg mb-3">
          <img
            className="card-img-top"
            src="images/wool blanket white.png"
            alt="White wool Blanket"
          />
          <div className="card-img-overlay">
            <h5 className="card-title">Blanket</h5>
            <p className="card-text">Brief description of the category.</p>
            <a href="#" className="btn btn-dark">
              Shop Now
            </a>
          </div>
        </div>
        <div className="card text-bg mb-3">
          <img
            className="card-img-top"
            src="images/Pillow wool white.png"
            alt="White wool Pillow"
          />
          <div className="card-img-overlay">
            <h5 className="card-title">Pillow</h5>
            <p className="card-text">Brief description of the category.</p>
            <a href="#" className="btn btn-dark">
              Shop Now
            </a>
          </div>
        </div>

        <div className="card text-bg mb-3">
          <img
            className="card-img-top"
            src="images/sheets white 1.png"
            alt="Sheets"
          />
          <div className="card-img-overlay">
            <h5 className="card-title">Sheets</h5>
            <p className="card-text">Brief description of the mattress.</p>
            <a href="#" className="btn btn-dark">
              Shop Now
            </a>
          </div>
        </div>
        <div className="card text-bg mb-3">
          <img
            className="card-img-top"
            src="images/futon with green backgroun.png"
            alt="Mattress"
          />
          <div className="card-img-overlay">
            <h5 className="card-title">Mattress</h5>
            <p className="card-text">Brief description of the category.</p>
            <a href="#" className="btn btn-dark">
              Shop Now
            </a>
          </div>
        </div>
      </div>

      {/* <!--footer--> */}
      <footer className="container-fluid">
        <div className="container p-4">
          <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
          {/* <!-- Social media icons here --> */}
        </div>
      </footer>
    </>
  );
};

export default homePage;
