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
<p className="text-lg mb-4">
  Our E-Rikshas are designed for comfort and efficiency, providing a
  green alternative for urban transportation. Equipped with advanced electric motors and high-capacity batteries, they offer a smooth and quiet ride, making your commute more enjoyable.
</p>
<p className="text-lg mb-4">
  These E-Rikshas are not only eco-friendly but also cost-effective. The running cost is significantly lower compared to traditional rickshaws, making it an economical choice for daily commuting.
</p>
<p className="text-lg mb-4">
  We have also prioritized safety in our design. With robust construction, efficient braking system, and bright LED lights for visibility, we ensure a safe ride for both the driver and passengers.
</p>
<p className="text-lg mb-4">
  Join us in our mission to transform urban transportation and make it more sustainable with E-Riksha.
</p>
<p className="text-lg mb-4">
  We believe in the power of innovation and are constantly working to improve our E-Rikshas. Our goal is to provide the best possible service to our customers while contributing to a cleaner and healthier environment.
</p>
<p className="text-lg">
  Thank you for choosing E-Riksha. Together, we can make a difference.
</p>

        </div>
        <div className="lg:w-1/2 sm:w-full">
          <ImageCarousel
            images={E_RIKSHA_IMAGES}
            autoPlay
            infiniteLoop
          />
        </div>
      </section>

      <section className="lg:flex mb-8">
        <div className="lg:w-1/2 sm:w-full">
          <ImageCarousel
            images={E_BIKE_IMAGES}
            autoPlay
            infiniteLoop
          />
        </div>
        <div className="lg:w-1/2 pl-4 order-last lg:order-none">
        <h3 className="text-2xl font-bold mb-2">E-Bike</h3>
<p className="text-lg mb-4">
  Experience the joy of cycling without the effort with our E-Bikes.
  They're perfect for commuting, leisure rides, or any journey you
  want to make. Our E-Bikes are equipped with powerful electric motors that make cycling effortless, even on hilly terrains.
</p>
<p className="text-lg mb-4">
  With adjustable speed settings, you can choose how much assistance you need. Whether you're looking for a leisurely ride or a speedy commute, our E-Bikes have got you covered.
</p>
<p className="text-lg mb-4">
  Our E-Bikes are also designed with a focus on comfort and safety. With ergonomic seats, responsive brakes, and bright LED lights, we ensure a safe and comfortable ride.
</p>
<p className="text-lg mb-4">
  Not only are our E-Bikes fun and easy to ride, but they're also eco-friendly. By choosing to ride an E-Bike, you're reducing your carbon footprint and contributing to a greener planet.
</p>
<p className="text-lg mb-4">
  We're committed to providing high-quality, innovative E-Bikes that enhance your cycling experience. Join us in revolutionizing urban transportation and promoting a healthier, more sustainable lifestyle.
</p>
<p className="text-lg">
  Thank you for choosing our E-Bikes. Together, we can make a difference.
</p>

        </div>
      </section>

      <section className="lg:flex mb-8">
        <div className="lg:w-1/2 pr-4">
        <h3 className="text-2xl font-bold mb-2">E-Cycle</h3>
<p className="text-lg mb-4">
  Our E-Cycles combine the benefits of traditional cycling with the
  convenience of an electric motor. Get where you're going faster and
  with less effort. With adjustable speed settings, you can choose the level of assistance you need.
</p>
<p className="text-lg mb-4">
  Perfect for both city commuting and off-road adventures, our E-Cycles are designed to handle any terrain. The durable construction and high-quality components ensure a smooth and reliable ride.
</p>
<p className="text-lg mb-4">
  Safety is our top priority. Our E-Cycles are equipped with efficient brakes, bright LED lights, and reflective decals to enhance visibility. We ensure a safe ride, whether you're cycling during the day or at night.
</p>
<p className="text-lg mb-4">
  By choosing our E-Cycles, you're not only getting a great cycling experience but also contributing to a greener planet. Our E-Cycles are eco-friendly, reducing carbon emissions and promoting sustainable transportation.
</p>
<p className="text-lg mb-4">
  We're dedicated to providing innovative, high-quality E-Cycles that enhance your cycling experience. Contact us today to learn more about our products and how we can help you transition to electric transportation.
</p>
<p className="text-lg">
  Thank you for choosing our E-Cycles. Together, we can make a difference.
</p>

        </div>
        <div className="lg:w-1/2 sm:w-full">
          <ImageCarousel
            images={E_CYCLE_IMAGES}
            autoPlay
            infiniteLoop
          />
        </div>
      </section>
    </div>
  );
}

export default Main;
