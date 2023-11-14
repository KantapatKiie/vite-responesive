import { memo, SVGProps } from 'react';

const Path45Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 107 125' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 124.117L106.346 0.917969' stroke='#936EEA' strokeWidth={3} />
  </svg>
);

const Memo = memo(Path45Icon);
export { Memo as Path45Icon };
