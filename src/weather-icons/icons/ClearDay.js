import React from "react";

function ClearDay() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      version="1.1"
      viewBox="0 0 32 32"
    >
      <defs>
        <linearGradient
          id="b-3"
          x1="-83"
          x2="-110"
          y1="400.65"
          y2="372.65"
          gradientTransform="translate(112 -88)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#80c0e5"></stop>
          <stop offset="1" stopColor="#136dcc"></stop>
        </linearGradient>
        <linearGradient
          id="a-2"
          x1="-83"
          x2="-109"
          y1="399.65"
          y2="373.65"
          gradientTransform="translate(112 -88)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#91d7ff"></stop>
          <stop offset="1" stopColor="#1780f2"></stop>
        </linearGradient>
        <linearGradient
          id="c-74"
          x1="-96"
          x2="-96"
          y1="390.65"
          y2="380.65"
          gradientTransform="translate(112 -88)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#ffc900"></stop>
          <stop offset="1" stopColor="#ffe200"></stop>
        </linearGradient>
        <filter
          id="d-75"
          width="1.192"
          height="1.192"
          x="-0.096"
          y="-0.096"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur stdDeviation="0.56"></feGaussianBlur>
        </filter>
      </defs>
      <g transform="translate(0 -282.65)">
        <path
          fill="url(#b-3)"
          d="M3 283.65h26c1.108 0 2 .892 2 2v26c0 1.108-.892 2-2 2H3c-1.108 0-2-.892-2-2v-26c0-1.108.892-2 2-2z"
        ></path>
        <path
          fill="url(#a-2)"
          d="M3 284.65h26c.554 0 1 .446 1 1v26c0 .554-.446 1-1 1H3c-.554 0-1-.446-1-1v-26c0-.554.446-1 1-1z"
        ></path>
        <path
          fill="#ffe22b"
          d="M16 291.65c3.878 0 7 3.122 7 7s-3.122 7-7 7-7-3.122-7-7 3.122-7 7-7z"
          filter="url(#d-75)"
        ></path>
        <path
          fill="url(#c-74)"
          d="M16 291.65c3.878 0 7 3.122 7 7s-3.122 7-7 7-7-3.122-7-7 3.122-7 7-7z"
        ></path>
      </g>
    </svg>
  );
}

export default ClearDay;