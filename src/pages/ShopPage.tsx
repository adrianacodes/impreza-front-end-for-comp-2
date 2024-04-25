import React, { useEffect, useState } from "react";
import Header from "../components/Header";

// Define a type for the image data
type Image = {
  id: string;
  url: string;
  description: string;
};

const ShopPage: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);

  useEffect(() => {
    // Function to fetch image data
    const fetchImages = async () => {
      const imagesDirectory = "/images/store"; // Adjust the path as necessary
      const imageFiles = [
        "File 1.png",
        "File 2.png",
        "File 3.png",
        "File 4.png",
        "File 5.png",
        "File 6.png",
        "File 7.png",
        "File 8.jpeg",
        "File 9.jpeg",
        "File 10.jpeg",
        "File 11.jpeg",
        "File 12.jpeg",
        "File 13.jpeg",
        "File 14.jpeg",
        "File 15.jpeg",
        "File 16.jpeg",
        "File 17.jpeg",
        "File 18.jpeg",
        "File 19.jpeg",
        "File 20.jpeg",
        "File 21.jpeg",
        "File 22.jpeg",
        "File 23.jpeg",
        "File 24.jpeg",
        "File 25.jpeg",
        "File 26.jpeg",
        "File 27.jpeg",
        "File 28.jpeg",
        "File 29.jpeg",
        "File 30.jpeg",
      ];

      const loadedImages = imageFiles.map((filename, index) => ({
        id: `img-${index}`,
        url: `${imagesDirectory}/${filename}`,
        description: `Description for ${filename}`,
      }));

      setImages(loadedImages);
    };

    fetchImages();
  }, []);

  return (
    <>
      <Header />
      <div className="bg-white">
        <div className="container mx-auto px-4 py-8 sm:px-6 sm:py-6 lg:px-8">
          <div className="mt-6 grid grid-cols-3 gap-6">
            {images.map((image) => (
              <div
                key={image.id}
                className="group relative aspect-w-1 aspect-h-1"
              >
                <div className="bg-gray-200 overflow-hidden rounded-md">
                  <img
                    src={image.url}
                    alt={image.description}
                    className="h-64 object-cover object-center w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopPage;
