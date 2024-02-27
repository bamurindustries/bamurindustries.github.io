import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { Carousel, CarouselProps } from 'react-responsive-carousel';
import React, { SyntheticEvent } from 'react';

export interface Image {
  url: string;
  alt: string;
  legend: string;
}

interface ImageCarouselProps extends Partial<CarouselProps> {
  images: Image[];
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, className, ...props }) => {
  function removeLoadingClass(evt: SyntheticEvent<HTMLImageElement, Event>):void{
   const img = evt.target as HTMLImageElement;
   if(img){
    img.parentElement?.classList.remove('loader');
   }
  }
  return (
    <Carousel showArrows={true} showThumbs={true}  {...props} className={className ?? undefined} >
      {images.map((image) => (
        <div key={image.url} className="loader">
          <img src={image.url} alt={image.alt} className="rounded max-h-[80vh]" loading="lazy" onLoad={removeLoadingClass} onError={removeLoadingClass} />
          <p className="legend">{image.legend}</p>
        </div>
      ))}
    </Carousel>
  );
};
