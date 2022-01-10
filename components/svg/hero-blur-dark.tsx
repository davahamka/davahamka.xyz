import { SVGProps } from 'react';

const HeroBlurDark = ({
  width = '472',
  height = '419',
  ...restProps
}: SVGProps<SVGAElement>) => {
  return (
    <svg
      width='100%'
      height='100%'
      viewBox='0 0 472 419'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g filter='url(#filter0_f_7_17)'>
        <rect
          x='127'
          y='127'
          width='217.462'
          height='121.579'
          fill='url(#paint0_linear_7_17)'
        />
      </g>
      <g filter='url(#filter1_f_7_17)'>
        <ellipse
          cx='236.634'
          cy='239.895'
          rx='73.4912'
          ry='52.1053'
          fill='url(#paint1_linear_7_17)'
        />
      </g>
      <defs>
        <filter
          id='filter0_f_7_17'
          x='0'
          y='0'
          width='471.462'
          height='375.579'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='BackgroundImageFix'
            result='shape'
          />
          <feGaussianBlur
            stdDeviation='63.5'
            result='effect1_foregroundBlur_7_17'
          />
        </filter>
        <filter
          id='filter1_f_7_17'
          x='36.1432'
          y='60.7895'
          width='400.982'
          height='358.211'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='BackgroundImageFix'
            result='shape'
          />
          <feGaussianBlur
            stdDeviation='63.5'
            result='effect1_foregroundBlur_7_17'
          />
        </filter>
        <linearGradient
          id='paint0_linear_7_17'
          x1='155.782'
          y1='127'
          x2='219.194'
          y2='285.48'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#E5014C' />
          <stop offset='1' stopColor='white' stopOpacity='0' />
        </linearGradient>
        <linearGradient
          id='paint1_linear_7_17'
          x1='182.597'
          y1='187.789'
          x2='246.187'
          y2='313.11'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#36059D' />
          <stop offset='1' stopColor='white' stopOpacity='0' />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default HeroBlurDark;
