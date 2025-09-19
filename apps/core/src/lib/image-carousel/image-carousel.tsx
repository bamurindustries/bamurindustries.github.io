import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

import { Carousel, CarouselProps } from 'react-responsive-carousel';
import React, { SyntheticEvent } from 'react';

export interface Image {
  url: string;
  alt: string;
  legend?: string;
}

interface ImageCarouselProps extends Partial<CarouselProps> {
  images: Image[];
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  className,
  ...props
}) => {
  function removeLoadingClass(
    evt: SyntheticEvent<HTMLImageElement, Event>
  ): void {
    const img = evt.target as HTMLImageElement;
    if (img) {
      img.parentElement?.classList.remove('loader');
    }
  }
  return (
    <Carousel {...props} className={className ?? undefined}>
      {images.map((image) => (
        <div key={image.url} className="loader h-full">
          <img
            src={image.url}
            alt={image.alt}
            className="rounded w-full h-full object-cover flex-shrink-0"
            loading="lazy"
            onLoad={removeLoadingClass}
            onError={removeLoadingClass}
          />
          {image.legend && <p className="legend">{image.legend}</p>}
        </div>
      ))}
    </Carousel>
  );
};
