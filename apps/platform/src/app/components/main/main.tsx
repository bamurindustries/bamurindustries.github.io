import {
  E_BIKE_IMAGES,
  E_CYCLE_IMAGES,
  E_RIKSHA_IMAGES,
} from './homepage.data';

import { ImageCarousel } from '@bamur/core';

/* eslint-disable-next-line */
export interface MainProps {}

export function Main(props: MainProps) {
  return (
    <div className="p-8 bg-gray-100 text-black">
      <h1 className="text-4xl font-bold mb-4">Welcome to Bamur Industries</h1>
      <p className="text-lg mb-8">
  We are Bamur Industries, a leading manufacturer of electric vehicles. Our mission is to provide sustainable and affordable transportation solutions that not only meet the needs of our customers but also contribute positively to the world we live in.

  Our commitment to the environment goes beyond just our products. We strive to reduce our carbon footprint and contribute to a cleaner environment by focusing on energy-efficient manufacturing processes.

  We believe in the power of electric energy as a means to combat climate change. By transitioning to electric vehicles, we can significantly reduce carbon emissions and make a positive impact on the environment.

  At Bamur Industries, we also understand the importance of creating job opportunities. We are proud to support our local community by providing jobs and contributing to the economic growth.

  Join us in our journey towards a more sustainable and environmentally-friendly future.
</p>


      <h2 className="text-3xl font-bold mb-4">Our Products</h2>

      <section className="lg:flex mb-8">
        <div className="lg:w-1/2 pr-4">
          <h3 className="text-2xl font-bold mb-2">E-Riksha</h3>
          <p className="text-lg">
            Our E-Rikshas are designed for comfort and efficiency, providing a
            green alternative for urban transportation.
          </p>
        </div>
        <div className="lg:w-1/2 sm:w-full max-h-[80vh]">
          <ImageCarousel
            images={E_RIKSHA_IMAGES}
            autoPlay
            infiniteLoop
            centerMode={true}
            centerSlidePercentage={80}
          />
        </div>
      </section>

      <section className="lg:flex mb-8">
        <div className="lg:w-1/2 sm:w-full max-h-[80vh]">
          <ImageCarousel
            images={E_BIKE_IMAGES}
            autoPlay
            infiniteLoop
            centerMode={true}
            centerSlidePercentage={80}
          />
        </div>
        <div className="lg:w-1/2 pl-4 order-last lg:order-none">
          <h3 className="text-2xl font-bold mb-2">E-Bike</h3>
          <p className="text-lg">
            Experience the joy of cycling without the effort with our E-Bikes.
            They're perfect for commuting, leisure rides, or any journey you
            want to make.
          </p>
        </div>
      </section>

      <section className="lg:flex mb-8">
        <div className="lg:w-1/2 pr-4">
          <h3 className="text-2xl font-bold mb-2">E-Cycle</h3>
          <p className="text-lg mb-4">
            Our E-Cycles combine the benefits of traditional cycling with the
            convenience of an electric motor. Get where you're going faster and
            with less effort.
          </p>
          <p className="text-lg">
            Contact us today to learn more about our products and how we can
            help you transition to electric transportation.
          </p>
        </div>
        <div className="lg:w-1/2 sm:w-full max-h-[80vh]">
          <ImageCarousel
            images={E_CYCLE_IMAGES}
            autoPlay
            infiniteLoop
            centerMode={true}
            centerSlidePercentage={80}
          />
        </div>
      </section>
    </div>
  );
}

export default Main;
