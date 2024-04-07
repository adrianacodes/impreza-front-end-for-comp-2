import Header from "../components/Header";


const ShopPage = () => {
  return (
    <>
    <Header />
    
    <div className="bg-white">
      <div className="container mx-auto px-4 py-8 sm:px-6 sm:py-6 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Choose your Items here:
        </h2>

        <div
          className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4"
        >
          <div className="group relative">
            <div
              className="aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-md"
            >
              <img
                src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                alt="Front of men's Basic Tee in black."
                className="object-cover object-center"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-900">
                  <a href="#" className="hover:text-gray-900">Basic Tee</a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">Black</p>
              </div>
              <p className="text-sm font-medium text-gray-900">$35</p>
            </div>
          </div>
          {/* <!-- new --> */}
          <div className="group relative">
            <div
              className="aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-md"
            >
              <img
                src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                alt="Front of men's Basic Tee in black."
                className="object-cover object-center"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-900">
                  <a href="#" className="hover:text-gray-900">Basic Tee</a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">Black</p>
              </div>
              <p className="text-sm font-medium text-gray-900">$35</p>
            </div>
          </div>
          {/* <!-- new --> */}
          <div className="group relative">
            <div
              className="aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-md"
            >
              <img
                src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                alt="Front of men's Basic Tee in black."
                className="object-cover object-center"
              />
            </div>
            {/* <!-- new --> */}
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-900">
                  <a href="#" className="hover:text-gray-900">Basic Tee</a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">Black</p>
              </div>
              <p className="text-sm font-medium text-gray-900">$35</p>
            </div>
          </div>
          {/* <!-- //new// --> */}
          <div className="group relative">
            <div
              className="aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-md"
            >
              <img
                src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                alt="Front of men's Basic Tee in black."
                className="object-cover object-center"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-900">
                  <a href="#" className="hover:text-gray-900">Basic Tee</a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">Black</p>
              </div>
              <p className="text-sm font-medium text-gray-900">$35</p>
            </div>
          </div>
           
          
         
          {/* <!-- More products... --> */}
          </div>
        </div>
      </div>
    
    </>
  )
}

export default ShopPage;



