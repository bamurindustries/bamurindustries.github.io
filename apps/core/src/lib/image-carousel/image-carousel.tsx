import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { Carousel, CarouselProps } from 'react-responsive-carousel';

import React from 'react';

export interface Image {
  url: string;
  alt: string;
  legend: string;
}

interface ImageCarouselProps extends Partial<CarouselProps> {
  images: Image[];
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, className, ...props }) => {
  return (
    <Carousel  {...props} className={className ?? undefined} >
      {images.map((image) => (
        <div key={image.url}>
          <img src={image.url} alt={image.alt} loading="lazy"  />
          <p className="legend">{image.legend}</p>
        </div>
      ))}
    </Carousel>
  );
};
