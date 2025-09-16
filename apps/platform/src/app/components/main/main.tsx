import { E_RIKSHA_IMAGES } from './homepage.data';
import { ImageCarousel } from '@bamur/core';

/* eslint-disable-next-line */
export interface MainProps {}

export function Main(props: MainProps) {
  return (
    <div className="p-8 bg-gray-100 text-black">
      <h1 className="text-4xl font-bold mb-4">Welcome to Bamur Industries</h1>
      <p className="text-lg mb-8">
        We are Bamur Industries, a leading manufacturer of electric vehicles.
        Our mission is to provide sustainable and affordable transportation
        solutions that not only meet the needs of our customers but also
        contribute positively to the world we live in. Our commitment to the
        environment goes beyond just our products. We strive to reduce our
        carbon footprint and contribute to a cleaner environment by focusing on
        energy-efficient manufacturing processes. We believe in the power of
        electric energy as a means to combat climate change. By transitioning to
        electric vehicles, we can significantly reduce carbon emissions and make
        a positive impact on the environment. At Bamur Industries, we also
        understand the importance of creating job opportunities. We are proud to
        support our local community by providing jobs and contributing to the
        economic growth. Join us in our journey towards a more sustainable and
        environmentally-friendly future.
      </p>

      <h2 className="text-3xl font-bold mb-4">Our Products</h2>
      <section className="lg:flex mb-8">
        <div className="lg:w-1/2 pr-4">
          <h3 className="text-2xl font-bold mb-2">E-Riksha</h3>
          <p className="text-lg mb-4">
            Our E-Rikshas are designed for comfort and efficiency, providing a
            green alternative for urban transportation. Equipped with advanced
            electric motors and high-capacity batteries, they offer a smooth and
            quiet ride, making your commute more enjoyable.
          </p>
          <p className="text-lg mb-4">
            These E-Rikshas are not only eco-friendly but also cost-effective.
            The running cost is significantly lower compared to traditional
            rickshaws, making it an economical choice for daily commuting.
          </p>
          <p className="text-lg mb-4">
            We have also prioritized safety in our design. With robust
            construction, efficient braking system, and bright LED lights for
            visibility, we ensure a safe ride for both the driver and
            passengers.
          </p>
          <p className="text-lg mb-4">
            Join us in our mission to transform urban transportation and make it
            more sustainable with E-Riksha.
          </p>
          <p className="text-lg mb-4">
            We believe in the power of innovation and are constantly working to
            improve our E-Rikshas. Our goal is to provide the best possible
            service to our customers while contributing to a cleaner and
            healthier environment.
          </p>
          <p className="text-lg">
            Thank you for choosing E-Riksha. Together, we can make a difference.
          </p>
        </div>
        <div className="lg:w-1/2 sm:w-full">
          <ImageCarousel images={E_RIKSHA_IMAGES} autoPlay infiniteLoop />
        </div>
      </section>
    </div>
  );
}

export default Main;
