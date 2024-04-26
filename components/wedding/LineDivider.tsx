import React from 'react';

import Aos from '@/components/Aos';

interface LineDividerProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function LineDivider({ ...props }: LineDividerProps) {
  return (
    <Aos data-aos="fade" data-aos-duration="2000">
      <div className="divider divider-neutral/50 mx-16 my-8" />
    </Aos>
  );
}
