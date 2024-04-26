'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface AosProps
  extends React.HTMLAttributes<HTMLDivElement>,
    AOS.AosOptions {
  children: React.ReactNode;
}
export default function Aos({ children, ...aosOptions }: AosProps) {
  useEffect(() => {
    AOS.init();
  }, []);
  return <div {...aosOptions}>{children}</div>;
}
