import * as React from "react";
const BgSVG = (props) => (
  <svg
    id="visual"
    viewBox="0 0 900 600"
    width={900}
    height={600}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <defs>
      <filter id="blur1" x="-10%" y="-10%" width="120%" height="120%">
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur stdDeviation={161} result="effect1_foregroundBlur" />
      </filter>
    </defs>
    <rect width={900} height={600} fill="#6600FF" />
    <g filter="url(#blur1)">
      <circle cx={339} cy={597} fill="#00CC99" r={357} />
      <circle cx={17} cy={197} fill="#6600FF" r={357} />
      <circle cx={603} cy={481} fill="#00CC99" r={357} />
      <circle cx={376} cy={385} fill="#00CC99" r={357} />
      <circle cx={508} cy={191} fill="#6600FF" r={357} />
      <circle cx={822} cy={1} fill="#00CC99" r={357} />
    </g>
  </svg>
);
export default BgSVG;
