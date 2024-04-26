import React from 'react';

import Aos from '@/components/Aos';

interface FlowerDividerProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function FlowerDivider({ ...props }: FlowerDividerProps) {
  return (
    <Aos data-aos="fade" data-aos-duration="2000">
      <p
        className="text-lg text-center my-8 text-secondary"
        style={{
          pointerEvents: 'none',
          cursor: 'pointer',
          userSelect: 'none',
        }}
      >
        ✿✿✿
      </p>
    </Aos>
  );
}
