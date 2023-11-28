"use client"

import React from 'react';

interface Paragraph {
  header: string;
  desc: string;
}

type CardData = {
  text: Paragraph[];
  img?: string;
  bgColor?: string;
  category: string;
  isDarkMode?: boolean;
  isSecondaryColor?: boolean;
};

const OverviewCard = ({
  img,
  text,
  category,
  bgColor = "bg-gray-900",
  isDarkMode = false,
  isSecondaryColor = false,
}: CardData) => {
  const darkModeHeading = `mt-2 text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl`;
  const darkModeText = `text-gray-400`;

  const lightModeHeading = `mt-2 text-3xl font-bold tracking-tight text-red-500 sm:text-4xl`;
  const secondaryBackgroundStyles = `bg-green-800 rounded-3xl h-screen mx-auto grid grid-cols-1 items-center`;
  const defaultBackgroundStyles = `bg-gray-800 rounded-3xl h-screen mx-auto grid grid-cols-1 items-center`;

  return (
    <div
      className={`w-[90vw] h-screen mx-auto mt-[4rem] lg:my-3 lg:mt-0`}
    >
      <div className={isSecondaryColor ? `${secondaryBackgroundStyles}` : `${defaultBackgroundStyles}` }>
        {/* the following div is used as a buffer for slider */}
        <div className="relative rounded-3xl overflow-hidden pb-9 sm:px-12 lg:pb-8 xl:px-10 xl:pb-10">
        </div>
        <div className={`py-32 px-12`}>
          <p className="text-base font-medium leading-7 text-primary-100">
            {category}
          </p>
          {text.map((t) => (
            <div className="lg:max-w-lg" key={t.header}>
              <h1
                className={
                  isDarkMode ? `${darkModeHeading}` : `${lightModeHeading}`
                }
              >
                {t.header}
              </h1>
              <div className="my-4 max-w-xl">
                <p className={isDarkMode ? `${darkModeText}` : `text-gray-700`}>
                  {t.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OverviewCard;
