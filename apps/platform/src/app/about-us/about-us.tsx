/* eslint-disable-next-line */
export interface AboutUsProps {}

export function AboutUs(props: AboutUsProps) {
  return (
    <div className="p-4 bg-gray-100 text-black">
      <h1 className="text-4xl font-bold mb-4">About Bamur Industries & Engineering Private Limited</h1>
      <p className="text-lg mb-4">
        Bamur Industries & Engineering Private Limited (BIEPL) is an Indian Non-Government Company incorporated on 19th April, 2022. We are engaged in the Electronics Industry and are committed to providing sustainable and affordable transportation solutions.
      </p>
      <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
      <p className="text-lg mb-4">
        Our vision is to revolutionize the transportation industry by providing innovative and sustainable solutions. We aim to reduce our carbon footprint and contribute to a cleaner environment by focusing on energy-efficient manufacturing processes and products.
      </p>
      <p className="text-lg mb-4">
        We believe in the power of electric energy as a means to combat climate change. By transitioning to electric vehicles, we can significantly reduce carbon emissions and make a positive impact on the environment.
      </p>
      <h2 className="text-3xl font-bold mb-4">Our Directors</h2>
      <ul className="list-disc list-inside text-lg mb-4">
        <li>Sanjeet Singh</li>
        <li>Amrita Verma</li>
      </ul>
      <h2 className="text-3xl font-bold mb-4">Our Location</h2>
      <p className="text-lg mb-4">
        Our registered office is located at Rampur 38, Rajgarh, Uttar Pradesh 231210.
      </p>
      <a href="https://maps.app.goo.gl/bF61iaciaxrwhCCZ7" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">View on Google Maps</a>
      <p className="text-lg mt-4">
        We are proud to support our local community by providing jobs and contributing to the economic growth. Join us in our journey towards a more sustainable and environmentally-friendly future.
      </p>
    </div>
  );
}

export default AboutUs;
