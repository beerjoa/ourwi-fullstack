'use client';

import React from 'react';
import Image from 'next/image';
import { format } from 'date-fns';

import homeImg from '@/public/wedding/home.png';
import { useWeddingStore } from '@/providers/wedding-store-provider';

interface IntroProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function Intro({ ...props }: IntroProps) {
  const weddingData = useWeddingStore((state) => state);
  const person1 = weddingData.person1;
  const person2 = weddingData.person2;
  const date = new Date(weddingData.date);

  const _month = format(date, 'MMMM');
  const _dayLetter = format(date, 'EEEE');
  const _dayDigit = format(date, 'dd');
  const _time = format(date, 'HH:mm a');
  const _location = `${weddingData.location.name}, ${weddingData.location.city}`;

  return (
    <div className="relative overflow-hidden font-noto-serif">
      <div className="max-w-full">
        <Image
          src={homeImg}
          width={400}
          height={565}
          className="w-screen"
          alt="home-image"
          priority
        />
      </div>
      <div className="absolute h-full w-full bg-transparent flex items-center -bottom-0 justify-center opacity-100 p-4">
        <div className="h-full w-full outline outline-1 outline-secondary"></div>
      </div>
      <div className="text-base-content/70">
        <div className="px-8 my-12 text-base-content [line-height:2rem]">
          <p className="text-4xl text-center">{`${person1.firstName}`}</p>
          <p className="text-xl text-center text-base-content/70">&</p>
          <p className="text-4xl text-center">{`${person2.firstName}`}</p>
        </div>
        <div className="flex w-full mx-auto px-8 place-items-center">
          <div className="basis-5/12 pr-2">
            <p className="text-lg text-end uppercase">{`${_dayLetter}`}</p>
          </div>
          <div className="basis-1/12 px-2">
            <p className="text-2xl text-center uppercase">・</p>
          </div>
          <div className="basis-1/12">
            <p className="text-2xl text-center uppercase">{`${_dayDigit}`}</p>
          </div>
          <div className="basis-1/12 px-2">
            <p className="text-2xl text-center uppercase">・</p>
          </div>
          <div className="basis-5/12 pl-2">
            <p className="text-lg text-start uppercase">{`${_month}`}</p>
          </div>
        </div>
        <div className="my-6">
          <p className="text-lg text-center pb-4">
            at {_time}
            <br />
            {`${_location}`}
          </p>
        </div>
      </div>
    </div>
  );
}
