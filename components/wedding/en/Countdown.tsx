// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

'use client';

import React, { useEffect, useState } from 'react';

import { useWeddingStore } from '@/providers/wedding-store-provider';

interface CountdownProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function Countdown({ ..._props }: CountdownProps) {
  const { date } = useWeddingStore((state) => state);
  const [currentDate, setCurrentDate] = useState(new Date());

  const targetDate = new Date(date);
  const diff = targetDate.getTime() - currentDate.getTime();

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="flex items-center justify-center w-full">
      <div className="mx-auto">
        {diff <= 0 && (
          <div className="w-full mb-8">
            <p className="my-4">Thank you for attending our wedding!</p>
          </div>
        )}
        {diff > 0 && (
          <>
            <div className="grid grid-flow-col gap-4 text-center auto-cols-max justify-center">
              <div className="flex flex-col">
                <span className="text-xxxs uppercase">days</span>
                <span className="countdown font-noto-serif text-2xl place-self-center">
                  <span style={{ '--value': days }}></span>
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-xxxs uppercase">hours</span>
                <span className="countdown font-noto-serif text-2xl place-self-center">
                  <span style={{ '--value': hours }}></span>
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-xxxs uppercase">min</span>
                <span className="countdown font-noto-serif text-2xl place-self-center">
                  <span style={{ '--value': minutes }} />
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-xxxs uppercase">sec</span>
                <span className="countdown font-noto-serif text-2xl place-self-center">
                  <span style={{ '--value': seconds }} />
                </span>
              </div>
            </div>
            <div className="w-full mb-8">
              <p className="my-4">
                Our wedding is in <span className="text-red-300">{days}</span>{' '}
                days
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
