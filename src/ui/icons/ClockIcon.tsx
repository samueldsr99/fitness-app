import { ComponentProps } from "react";

export const ClockIcon = (props: ComponentProps<"svg">) => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="6.99992" cy="8.16667" r="4.66667" stroke="currentColor" strokeWidth="0.875" />
    <path d="M5.25 1.75H8.75" stroke="currentColor" strokeWidth="0.875" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M7 5.25V8.14555C7 8.15919 7.00478 8.17241 7.01352 8.18289L8.45833 9.91667"
      stroke="currentColor"
      strokeWidth="0.875"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
