import Header from "../components/Header";
import { Carousel } from "react-bootstrap";
import "../App.css";
import Footer from "../components/Footer"; // Ensure the path is correct based on your project structure


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
      <div className="mx-5 ">
        <div className="flex justify-between w-full gap-6 mb-14">
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
      <div className="bg-[#F4F5F6] my-[20px] py-[40px]" >
        <div className="container flex justify-between pr-28 pl-28 ">
          <div className="text-center transition-transform duration-300 hover-zoom hover:shadow-blue">
            <div className="icon-container">
              <img
                src="./images/homepage/icons/icon-cotton.png"
                alt="Cotton"
                className="w-12 h-12 mx-auto mb-2"
              />
              <p className="text-xs icon-text">Cotton</p>
            </div>
          </div>
          <div className="text-center transition-transform duration-300 hover-zoom hover:shadow-blue">
            <div className="icon-container">
              <img
                src="./images/homepage/icons/icon-wool.png"
                alt="Wool"
                className="w-12 h-12 mx-auto mb-2"
              />
              <p className="text-xs icon-text">Wool</p>
            </div>
          </div>
          <div className="text-center transition-transform duration-300 hover-zoom hover:shadow-blue">
            <div className="icon-container">
              <img
                src="./images/homepage/icons/icon-water.png"
                alt="Hyperalergenic"
                className="w-12 h-12 mx-auto mb-2"
              />
              <p className="text-xs icon-text">Hyperalergenic</p>
            </div>
          </div>
          <div className="text-center transition-transform duration-300 hover-zoom hover:shadow-blue">
            <div className="icon-container">
              <img
                src="./images/homepage/icons/icon-fabric.png"
                alt="Wear resistant"
                className="w-12 h-12 mx-auto mb-2"
              />
              <p className="text-xs icon-text">Wear resistant</p>
            </div>
          </div>
          <div className="text-center transition-transform duration-300 hover-zoom hover:shadow-blue">
            <div className="icon-container">
              <img
                src="./images/homepage/icons/icon-recycling.png"
                alt="Recycled"
                className="w-12 h-12 mx-auto mb-2"
              />
              <p className="text-xs icon-text">Recycled</p>
            </div>
          </div>
        </div>
      </div>

      {/* examples */}
      <div className="bg-white">
        <div className="ml-14 mr-14 flex flex-wrap items-start">
          {/* First Image */}
          <div className="w-full lg:w-1/2 pr-4 mb-3 mt-6">
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
            <div className="card text-bg border-none">
              <div className="card-body">
                <p className="text-blue-500 text-xs mb-3 font-bold">
                  SPECIAL OFFER
                </p>
                <h5 className="card-title text-black text-2xl mb-2 font-bold">
                  Wool Duvet
                </h5>
                <p className="text-gray-500 mb-3 max-w-xl">
                  This is a warm and durable duvet crafted from
                  Ukrainian-sourced wool. It's tailored by our experts with the
                  best fabrics and strongest threads for long-lasting comfort.
                </p>
                <p className="text-black text-sm mb-3 font-bold">
                  from 3000 HRN
                </p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  BUY NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* second offer */}

      <div className="bg-white">
        <div className="ml-14 mr-14 flex flex-wrap items-start">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 mb-3 mt-4">
            <div className="card text-bg border-none">
              <div className="card-body">
                <p className="text-blue-500 text-xs mb-3 font-bold">
                  SPECIAL OFFER
                </p>
                <h5 className="card-title text-black text-2xl mb-2 font-bold">
                  Wool Pillow
                </h5>
                <p className="text-gray-500 mb-3 max-w-xl">
                  This is a soft and luxurious pillow filled with pure white
                  wool. It's designed to provide exceptional comfort and support
                  for a good night's sleep even in coldest weather.
                </p>
                <p className="text-black text-sm mb-3 font-bold">
                  from 2000 HRN
                </p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  BUY NOW
                </button>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="w-full lg:w-1/2 pr-4 mb-3 mt-6">
            <div className="card text-bg mb-3">
              <img
                className="card-img-top"
                src="images/Pillow wool white.png"
                alt="White wool Pillow"
              />
            </div>
          </div>
        </div>
      </div>

      {/* offer 3 */}

      <div className="bg-white">
        <div className="ml-14 mr-14 flex flex-wrap items-start">
          {/* First Image */}
          <div className="w-full lg:w-1/2 pr-4 mb-3 mt-6">
            <div className="card text-bg mb-3">
              <img
                className="card-img-top"
                src="images/sheets white 1.png"
                alt="Cotton Sheets"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 mb-3 mt-4">
            <div className="card text-bg border-none">
              <div className="card-body">
                <p className="text-blue-500 text-xs mb-3 font-bold">
                  SPECIAL OFFER
                </p>
                <h5 className="card-title text-black text-2xl mb-2 font-bold">
                  Cotton Sheets
                </h5>
                <p className="text-gray-500 mb-3 max-w-xl">
                  This is a luxurious set of cotton sheets crafted from the
                  finest Egyptian cotton. Experience unmatched softness and
                  comfort with our premium bedding.
                </p>
                <p className="text-black text-sm mb-3 font-bold">
                  from 2500 HRN
                </p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  BUY NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* offer 4 */}

      <div className="bg-white">
        <div className="ml-14 mr-14 flex flex-wrap items-start">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 mb-3 mt-4">
            <div className="card text-bg border-none">
              <div className="card-body">
                <p className="text-blue-500 text-xs mb-3 font-bold">
                  SPECIAL OFFER
                </p>
                <h5 className="card-title text-black text-2xl mb-2 font-bold">
                  Mattress
                </h5>
                <p className="text-gray-500 mb-3 max-w-xl">
                  This is a high-quality mattress designed to provide optimal
                  support and comfort for a restful night's sleep. Crafted with
                  premium materials and expert craftsmanship, our mattresses are
                  built to last.
                </p>
                <p className="text-black text-sm mb-3 font-bold">
                  from 4000 HRN
                </p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  BUY NOW
                </button>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 mb-3 mt-4">
            <div className="card text-bg border-none">
              <img
                className="card-img-top"
                src="images/futon with green backgroun.png"
                alt="Mattress"
              />
            </div>
          </div>
        </div>
      </div>

      {/* <!--footer--> */}
      <footer className="container-fluid">
        <div className="container p-4">
          <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a> |
          {/* <!-- Social media icons here --> */}
          <a> Icons</a> by{" "}
          <a target="_blank" href="https://icons8.com">
            Icons8
          </a>
          <Footer></Footer>
        </div>
      </footer>

    </>
  );
};

export default homePage;
