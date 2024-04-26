import React from 'react';
import Image from 'next/image';

import Aos from '@/components/Aos';
import LineDivider from '@/components/wedding/LineDivider';
import bodyImg from '@/public/wedding/body.png';

interface QuoteProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function Quote({ ..._props }: QuoteProps) {
  return (
    <div className="w-full">
      <div className="my-16 mx-auto px-4 font-parisienne">
        <div className="text-2xl text-center text-base-content">
          <Aos
            className="max-w-full p-2"
            data-aos="fade"
            data-aos-duration="2000"
          >
            <p>
              "He felt now that he was not simply close to her, but that he did
              not know where he ended and she began".
            </p>
          </Aos>
          <Aos
            className="max-w-full p-2"
            data-aos="fade"
            data-aos-duration="3000"
          >
            <p className="text-2xl text-center text-base-content/60">
              - Leo Tolstoy, Anna Karenina
            </p>
          </Aos>
        </div>
      </div>
      <LineDivider />
      <div className="my-16 text-center mx-auto px-4 font-parisienne">
        <div className="text-2xl text-center text-base-content">
          <Aos
            className="max-w-full p-2"
            data-aos="fade"
            data-aos-duration="2000"
          >
            <p>
              "We're making the commitment, and we want our friends to join us
              at the wedding reception to celebrate."
            </p>
          </Aos>
        </div>
      </div>
      <Aos className="max-w-full my-6" data-aos="fade" data-aos-duration="2000">
        <Image src={bodyImg} className="w-screen" alt="body-image" />
      </Aos>
    </div>
  );
}
