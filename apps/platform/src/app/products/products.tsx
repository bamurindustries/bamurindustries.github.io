import {
  E_BIKE_IMAGES,
  E_CYCLE_IMAGES,
  E_RIKSHA_IMAGES,
} from '../components/main/homepage.data';

import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'E-Riksha',
    description:
      'Our E-Rikshas are designed for comfort and efficiency, providing a green alternative for urban transportation.',
    image: E_RIKSHA_IMAGES[0],
  },
  {
    id: 2,
    name: 'E-Bike',
    description:
      "Experience the joy of cycling without the effort with our E-Bikes. They're perfect for commuting, leisure rides, or any journey you want to make.",
    image: E_BIKE_IMAGES[0],
  },
  {
    id: 3,
    name: 'E-Cycle',
    description:
      "Our E-Cycles combine the benefits of traditional cycling with the convenience of an electric motor. Get where you're going faster and with less effort.",
    image: E_CYCLE_IMAGES[0],
  },
];
/* eslint-disable-next-line */
export interface ProductsProps {}

export function Products(props: ProductsProps) {
  return (
    <div className="p-4 bg-gray-100 text-black">
      <h2 className="text-3xl font-bold mb-4">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 bg-white">
            <img
              src={product.image.url}
              alt={product.name}
              className="w-full h-64 object-cover mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
            <p className="text-lg mb-4">{product.description}</p>
            {/* <Link to={`/product/${product.id}`} className="text-blue-500 hover:underline">Learn more</Link> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
