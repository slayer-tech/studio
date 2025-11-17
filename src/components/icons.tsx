import type { SVGProps } from 'react';

export const Icons = {
  logo: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M10 9.5 8 12l2 2.5" />
      <path d="M14 14.5 16 12l-2-2.5" />
      <path d="M7 20.5 4.5 19V5l2.5 1.5" />
      <path d="m17 3.5 2.5 1.5v14l-2.5-1.5" />
    </svg>
  ),
};
