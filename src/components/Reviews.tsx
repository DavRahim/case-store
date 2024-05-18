'use client'

import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";

type Props = {};

const PHONES = [
    '/testimonials/1.jpg',
    '/testimonials/2.jpg',
    '/testimonials/3.jpg',
    '/testimonials/4.jpg',
    '/testimonials/5.jpg',
    '/testimonials/6.jpg',
]


const Reviews = (props: Props) => {
  return (
      <MaxWidthWrapper className='relative max-w-5xl'>
          <img
              aria-hidden='true'
              src='/what-people-are-buying.png'
              className='absolute select-none hidden xl:block -left-32 top-1/3'
          />
      </MaxWidthWrapper>
  );
};

export default Reviews;
