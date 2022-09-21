import { ComponentProps } from "react";

function VolumeMuteIcon(props: ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="3.07 5.45 39.13 39.1"
      width="24"
      height="24"
      fill="currentColor"
      {...props}
    >
      <path d="m39.55 44.1-5.5-5.5q-1 .7-2.075 1.275-1.075.575-2.225.975-.8.25-1.45-.25-.65-.5-.65-1.35 0-.4.225-.725.225-.325.625-.425.9-.3 1.775-.7.875-.4 1.625-.95l-8.25-8.3v8.25q0 1-.925 1.375T21.1 37.45L13.65 30h-6.5q-.65 0-1.075-.425-.425-.425-.425-1.075v-9q0-.65.425-1.075Q6.5 18 7.15 18h6.3L3.5 8.05q-.45-.45-.425-1.075Q3.1 6.35 3.55 5.9 4 5.45 4.6 5.45q.6 0 1.05.45l36.1 36.05q.45.45.45 1.075t-.45 1.075q-.45.45-1.1.45-.65 0-1.1-.45Zm-9.8-37.05q5.35 1.9 8.625 6.525Q41.65 18.2 41.65 23.95q0 2.55-.7 5t-2.1 4.65l-2.15-2.15q1-1.7 1.475-3.6.475-1.9.475-3.9 0-4.95-2.775-8.9T28.5 9.75q-.4-.1-.625-.425Q27.65 9 27.65 8.6q0-.85.675-1.325t1.425-.225ZM18.6 23.15Zm13.55 3.75-4.5-4.5v-6.5Q30 17 31.325 19.2q1.325 2.2 1.325 4.8 0 .75-.125 1.475-.125.725-.375 1.425Zm-8.5-8.5-5.2-5.2 2.65-2.65q.7-.7 1.625-.325.925.375.925 1.375Zm-3 14.3v-7.5l-4.2-4.2h-7.8v6h6.3Z"></path>
    </svg>
  );
}

export default VolumeMuteIcon;
