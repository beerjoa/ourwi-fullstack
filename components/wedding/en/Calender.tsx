'use client';

import React, { useState } from 'react';
import {
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  getDay,
  isSameMonth,
  isSameDay,
  parse,
  startOfDay,
  startOfWeek,
} from 'date-fns';

import Aos from '@/components/Aos';
import Countdown from '@/components/wedding/en/Countdown';
import LineDivider from '@/components/wedding/LineDivider';
import { capitalizeFirstLetter } from '@/utils/functions';
import { useWeddingStore } from '@/providers/wedding-store-provider';

interface CalendarProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function Calendar({ ...props }: CalendarProps) {
  const weddingDate = useWeddingStore((state) => state.date);
  const targetDate = new Date(weddingDate);
  const targetDay = startOfDay(targetDate);

  const formattedDate = format(targetDate, 'yyyy.MM.dd');
  const formattedDaytime = format(targetDate, 'EEEE, h:mm a');

  const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
  const colStartClasses = [
    '',
    'col-start-2',
    'col-start-3',
    'col-start-4',
    'col-start-5',
    'col-start-6',
    'col-start-7',
  ];

  const [currMonth, setCurrMonth] = useState(() =>
    format(targetDate, 'MMM-yyyy')
  );
  const firstDayOfMonth = parse(currMonth, 'MMM-yyyy', new Date());

  const daysInMonth = eachDayOfInterval({
    start: startOfWeek(firstDayOfMonth),
    end: endOfWeek(endOfMonth(firstDayOfMonth)),
  });

  return (
    <div className="bg-secondary/10 outline outline-secondary/50 font-noto-serif">
      <Aos className="max-w-full p-2" data-aos="fade" data-aos-duration="2000">
        <div className="text-2xl text-center [line-height:3rem] mt-8">
          <p>{formattedDate}</p>
          <p>{formattedDaytime}</p>
        </div>
      </Aos>
      <LineDivider />
      <Aos className="max-w-full p-2" data-aos="fade" data-aos-duration="2000">
        <div
          id="calender-data"
          className="flex items-center justify-center w-full"
        >
          <div className="mx-12 font-noto-serif">
            <div className="grid grid-cols-7 gap-2 place-items-center">
              {days.map((day, idx) => {
                return (
                  <div key={idx} className="font-semibold">
                    {capitalizeFirstLetter(day)}
                  </div>
                );
              })}
            </div>
            <div className="grid grid-cols-7 gap-2 mt-4 place-items-center">
              {daysInMonth.map((day, idx) => {
                return (
                  <div
                    key={idx}
                    className={`${colStartClasses[getDay(day)]} w-full px-1 aspect-auto`}
                  >
                    <div
                      className={`cursor-pointer flex items-center justify-center font-semibold rounded-full hover:text-white ${
                        isSameMonth(day, targetDate)
                          ? 'text-gray-900'
                          : 'text-gray-400'
                      } ${!isSameDay(targetDay, day) && 'hover:bg-secondary'} ${
                        isSameDay(targetDay, day) &&
                        'bg-primary text-primary-content'
                      }`}
                    >
                      <p>{format(day, 'd')}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Aos>
      <LineDivider />
      <Aos className="max-w-full p-2" data-aos="fade" data-aos-duration="2000">
        <Countdown />
      </Aos>
    </div>
  );
}
