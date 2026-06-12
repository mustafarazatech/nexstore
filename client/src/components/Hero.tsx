import { FiArrowRight, FiStar } from "react-icons/fi";

const Hero = () => {
  return (
    <section className="bg-cream min-h-screen flex items-center">
      <div className="mx-auto max-w-7xl px-6 py-20 grid gap-12 lg:grid-cols-2 items-center">
        {/* Left Content */}
        <div>
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/60 px-4 py-2">
            <FiStar className="text-pink" />
            <span className="text-sm text-gray-700">Trusted by customers</span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-black leading-tight text-pink text-white">
            Shop The
            <span className="block text-teal">Future Today</span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            Discover premium fashion, electronics, and lifestyle essentials
            designed for modern living.
          </p>

          {/* Buttons */}
          <div className="mt-5 flex flex-wrap gap-2">
            <button className="flex items-center gap-2 rounded bg-pink px-7 py-3.5  font-semibold text-white">
              Shop Now
              <FiArrowRight />
            </button>

            <button className="rounded border border-gray-200 px-7 py-3 font-semibold bg-teal hover:text-white hover:bg-black transition">
              Explore Deals
            </button>
          </div>

          {/* Stats */}
          {/* <div className="mt-14 flex gap-10">
            <div>
              <h3 className="text-3xl font-bold text-gray-900">50K+</h3>
              <p className="text-gray-600">Customers</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-gray-900">10K+</h3>
              <p className="text-gray-600">Products</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-gray-900">99%</h3>
              <p className="text-gray-600">Satisfaction</p>
            </div>
          </div> */}
        </div>

        {/* Right Content */}
        <div className="flex justify-center">
          <div className="w-full max-w-md rounded-3xl bg-teal p-6 text-white">
            <img
              src="/hero.png"
              className="w-full h-[350px] object-cover rounded-2xl"
            />

            <div className="mt-6">
              <h3 className="text-2xl font-bold">Premium Collection</h3>
              <p className="mt-2">New arrivals crafted for trendsetters.</p>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-3xl font-bold">$199</span>

                <button className=" text-black rounded bg-cream px-4 py-2 font-semibold hover:opacity-90">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
