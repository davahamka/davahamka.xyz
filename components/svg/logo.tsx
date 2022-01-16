import { SVGProps } from 'react';

const Logo = ({}: SVGProps<SVGAElement>) => {
  return (
    <svg
      width='42'
      height='44'
      viewBox='0 0 42 44'
      fill=' none'
      className=''
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect
        x='2'
        y='2'
        width='27.6842'
        height='27.6842'
        rx='8'
        className='stroke-[#262626] dark:stroke-white'
        strokeWidth='4'
      />
      <rect
        x='12.3158'
        y='13.4211'
        width='27.6842'
        height='27.6842'
        rx='13.8421'
        className='stroke-[#262626] dark:stroke-white'
        strokeWidth='4'
      />
    </svg>
  );
};

export default Logo;
