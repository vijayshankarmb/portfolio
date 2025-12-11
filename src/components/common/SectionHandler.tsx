import React from 'react';

interface SectionHeadingProps {
  subHeading: string;
  heading: string;
}

export const SectionHeadler = ({
  subHeading,
  heading,
}: SectionHeadingProps)=> {
  return (
    <div>
      <p className="text-neutral-500 text-sm">{subHeading}</p>
      <h2 className="text-2xl font-bold">{heading}</h2>
    </div>
  );
}


