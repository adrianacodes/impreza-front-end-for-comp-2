import { useState } from "react";
import Header from "../components/Header";
import backgroundImage from "/images/fluffy-clouds-sky-vertical-shot.jpg";
import { submitFormData } from "../services/contactusapi.js"; // Import the service function

const AboutPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });



  
  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [result, setResult] = useState("");

  const onSubmit = async (event: {
    preventDefault: () => void;
    currentTarget: { reset: () => void };
  }) => {
    event.preventDefault();
    setResult("Sending....");
    const success = await submitFormData(formData);
    if (success) {
      setResult("Form Submitted Successfully");
      event.currentTarget.reset(); // Reset form if submission was successful
    } else {
      setResult("An error occurred. Please try again.");
    }
    console.log(result);
  };

  return (
    <>
      <Header />
      <div
        className="bg-cover bg-bottom min-h-screen py-12"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="max-w-3xl mx-auto px-4">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
          </header>
          <section className="bg-white rounded-lg shadow-md px-8 py-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Our Company
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We are a leading Ukrainian manufacturer dedicated to crafting
              high-quality bedding products. Our raw materials are sourced
              locally in Ukraine, ensuring the finest quality and supporting our
              community. At the heart of our mission is our commitment to
              providing comfort and warmth to our clients, enhancing their sleep
              experience.
            </p>
            <p className="text-gray-600 leading-relaxed mt-2">
              In addition to our focus on quality, we are proud to support our
              community by donating to local children's shelters, ensuring that
              every purchase made with us contributes to a better future for the
              children in our community.
            </p>
          </section>
          <section className="bg-white rounded-lg shadow-md px-8 py-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Team</h2>
            <p className="text-gray-600 leading-relaxed">
              At our company, we have a dedicated team of skilled professionals
              who are passionate about creating exceptional bedding products.
              From designers to production specialists, each member of our team
              plays a vital role in ensuring the quality and success of our
              products.
            </p>
          </section>
          <section className="bg-white rounded-lg shadow-md px-8 py-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Our Values
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Quality, innovation, and community are the pillars of our company.
              We are committed to exceeding our customers' expectations with
              every product we create, ensuring that each item delivers
              unparalleled comfort and warmth. Our dedication to sourcing
              materials locally not only guarantees superior quality but also
              supports the growth and development of our community. Together, we
              strive to make a positive impact, one cozy night's sleep at a
              time.
            </p>
          </section>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
        {result === "Form Submitted Successfully" ? (
          <div className="flex flex-col items-center justify-center h-full">
            <p className="text-green-500 text-3xl">Form submitted!</p>
            <p className="text-black text-xl">We will get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={onSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-600 font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-600 font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-600 font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Submit
            </button>
          </form>
        )}
      </div>
      <div className="text-gray-300 ml-4">
        <a>Image by Freepik</a>
      </div>
    </>
  );
};

export default AboutPage;
