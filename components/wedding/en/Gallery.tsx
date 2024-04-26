'use client';

import React from 'react';

import Aos from '@/components/Aos';
import { useWeddingStore } from '@/providers/wedding-store-provider';

export default function Gallery() {
  const weddingGallery = useWeddingStore((state) => state.gallery);

  return (
    <div className="my-8 font-noto-serif">
      <Aos data-aos="fade" data-aos-duration="2000">
        <div className="carousel">
          {weddingGallery.map((image) => (
            <div className="carousel-item w-full" key={image.id}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
      </Aos>
    </div>
  );
}
