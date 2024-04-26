import React from 'react';

import { Metadata } from 'next';

import Aos from '@/components/Aos';
import Intro from '@/components/wedding/en/Intro';
import Calender from '@/components/wedding/en/Calender';
import Footer from '@/components/Footer';
import Gallery from '@/components/wedding/en/Gallery';
import Quote from '@/components/wedding/en/Quote';
import AfterParty from '@/components/wedding/en/AfterParty';
import LineDivider from '@/components/wedding/LineDivider';
import FlowerDivider from '@/components/wedding/FlowerDivider';

export const metadata: Metadata = {
  title: 'Wedding of John & Jane',
  description: 'We are getting married!',
};

export default function App() {
  return (
    <div className="container max-w-mcard bg-base-100">
      <div className="max-w-full min-h-screen mx-auto">
        <Intro />
        <LineDivider />
        <Quote />
        <FlowerDivider />
        <Calender />
        <FlowerDivider />
        <Gallery />
        <FlowerDivider />
        <AfterParty />
        <FlowerDivider />
      </div>
      <Aos className="max-w-full mt-16">
        <Footer />
      </Aos>
    </div>
  );
}
