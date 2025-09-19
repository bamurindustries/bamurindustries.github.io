import { Card, ImageCarousel } from '@bamur/core';

import { PRODUCTS_CONFIG } from './homepage.data';
import { motion } from 'framer-motion';

const home_images = [
  '/assets/e-riksha-2.jpg',
  '/assets/e-riksha-5.jpg',
  '/assets/e-riksha-10.jpg',
  '/assets/e-riksha-11.jpg',
].map((src) => ({
  url: src,
  alt: 'Carousel Image',
}));
/* eslint-disable-next-line */
export interface MainProps {}

export function Main(props: MainProps) {
  return (
    <>
      <section className="w-full h-[80vh] overflow-hidden">
        <div className="flex flex-col h-full items-center md:flex-row">
          <motion.div
            className="md:w-[55%] h-full"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <ImageCarousel
              images={home_images as any}
              showArrows={false}
              showThumbs={false}
              autoPlay
              infiniteLoop
            />
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="h-full md:w-[45%]"
          >
            <div className="h-full landing-right inset-0 flex flex-col justify-center items-center text-white text-center px-4">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                BAMUR INDUSTRIES
              </h1>
              <p className="max-w-2xl text-lg md:text-xl mb-6 sub-text">
                Leading Manufacturer of High-Quality, Eco-Friendly E-Rickshaws
              </p>
              <p className="max-w-2xl text-lg md:text-xl mb-6 text-white font-bold">
                बामुर ई-रिक्शा चलाईये भरपूर कमाईये
              </p>
              <a
                href="#models"
                className=" explore hover:text-white rounded-2xl px-6 py-3 text-lg font-semibold"
              >
                Explore
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="py-6 overflow-hidden" id="models">
        {PRODUCTS_CONFIG.map((product, index) => (
          <div
            key={index}
            className={`flex gap-4 mb-16 flex-col md:flex-row ${
              index % 2 === 1 ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Image Carousel */}
            <motion.div
              className="md:w-1/2"
              initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <ImageCarousel
                images={product.images}
                showArrows={false}
                showThumbs={false}
                autoPlay
                infiniteLoop
              />
            </motion.div>
            {/*  */}

            {/* Details */}
            <motion.div
              initial={{ x: index % 2 === 0 ? 50 : -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="sub-heading-text px-6 mb-6">{product.name}</h2>
              <Card>
                <ul className="space-y-3 text-lg">
                  {product.specs.map((spec, i) => (
                    <li key={i}>
                      <strong>{spec.key}:</strong> {spec.value}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          </div>
        ))}
      </section>
      {/* About Section */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">About Bamur</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Bamur Industries is committed to revolutionizing urban mobility by
            designing durable, affordable, and eco-friendly E-Rickshaws. With
            advanced technology and robust engineering, our vehicles ensure
            sustainability and unmatched performance.
          </p>
        </div>
      </section>
      <section className="py-16 px-6 md:px-20" id="products">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Eco-Friendly',
                desc: 'Battery-operated rickshaws with zero emissions for a greener future.',
              },
              {
                title: 'Durable Design',
                desc: 'Strong chassis, reliable motors, and high load capacity.',
              },
              {
                title: 'Customer Support',
                desc: 'Dedicated after-sales service and warranty on batteries & chargers.',
              },
            ].map((item, i) => (
              <Card key={i} className="text-center">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className=" top-radius py-16 px-6 md:px-20 bg-green-600 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Become Our Dealer</h2>
          <p className="mb-6 text-lg">
            Join hands with Bamur Industries to bring sustainable transport to
            your city.
          </p>
          <div className="flex flex-col gap-4 md:flex-row justify-center">
            <a
              href="tel:+919044991559"
              className="bg-white text-green-700 font-semibold rounded-2xl px-6 py-3 text-lg hover:bg-gray-100"
            >
              Contact Us
            </a>

            <a
              href="assets/Bamur_Catalog.pdf"
              className="bg-white text-green-700 font-semibold rounded-2xl px-6 py-3 text-lg hover:bg-gray-100"
            >
              Our Product E-Book
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Main;
