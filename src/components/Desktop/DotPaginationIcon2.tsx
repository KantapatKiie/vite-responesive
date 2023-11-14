import { memo, SVGProps } from 'react';

const DotPaginationIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 54 10' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={5} cy={5} r={5} fill='#D8D8D8' />
    <circle cx={27} cy={5} r={5} fill='#5C3CAF' />
    <circle cx={49} cy={5} r={5} fill='#D8D8D8' />
  </svg>
);

const Memo = memo(DotPaginationIcon2);
export { Memo as DotPaginationIcon2 };
