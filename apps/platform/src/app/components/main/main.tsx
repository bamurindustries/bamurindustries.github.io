import { E_BIKE_IMAGES, E_CYCLE_IMAGES, E_RIKSHA_IMAGES } from './homepage.data';

import { ImageCarousel } from '@bamur/core';

/* eslint-disable-next-line */
export interface MainProps {}

export function Main(props: MainProps) {
  return (
  <div>
      <h1>Welcome to Bamur Industries</h1>
      <p>We are a leading manufacturer of electric vehicles, committed to providing sustainable and affordable transportation solutions.</p>

      <h2>Our Products</h2>

      <h3>E-Riksha</h3>
      <ImageCarousel images={E_RIKSHA_IMAGES} autoPlay infiniteLoop centerMode={true} centerSlidePercentage={80} />
      <p>Our E-Rikshas are designed for comfort and efficiency, providing a green alternative for urban transportation.</p>

      <h3>E-Bike</h3>
      <ImageCarousel images={E_BIKE_IMAGES} autoPlay infiniteLoop centerMode={true} centerSlidePercentage={80} />
      <p>Experience the joy of cycling without the effort with our E-Bikes. They're perfect for commuting, leisure rides, or any journey you want to make.</p>

      <h3>E-Cycle</h3>
      <ImageCarousel images={E_CYCLE_IMAGES} autoPlay infiniteLoop centerMode={true} centerSlidePercentage={80} />
      <p>Our E-Cycles combine the benefits of traditional cycling with the convenience of an electric motor. Get where you're going faster and with less effort.</p>

      <p>Contact us today to learn more about our products and how we can help you transition to electric transportation.</p>
    </div>
  );
}

export default Main;
