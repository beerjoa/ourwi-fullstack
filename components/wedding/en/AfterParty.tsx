'use client';

import React from 'react';
import { format } from 'date-fns';

import Aos from '@/components/Aos';
import { useWeddingStore } from '@/providers/wedding-store-provider';

interface AfterPartyProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function AfterParty({ ..._props }: AfterPartyProps) {
  const { date, location } = useWeddingStore((state) => state.afterParty);

  const _time = format(date, 'HH:mm a');
  const _location = `${location.name}, ${location.city}`;

  return (
    <div className="px-8">
      <Aos data-aos="fade" data-aos-duration="2000">
        <div className="outline outline-secondary/50 font-noto-serif rounded-lg p-4">
          <div className="max-w-full px-4 text-center">
            <div className="text-2xl my-4">
              <p>After Party</p>
            </div>
            <div className="text-lg mx-auto">
              <p>
                After the wedding ceremony, we invite you to join us at the
                after
              </p>
            </div>
            <div className="my-4">
              <p className="text-lg">
                at {_time}
                <br />
                {`${_location}`}
              </p>
            </div>
          </div>
        </div>
      </Aos>
    </div>
  );
}
