interface WaveDividerProps {
  fillColor?: string;
  className?: string;
  flipY?: boolean;
}

export default function WaveDivider({
  fillColor = "#EEE8DA",
  className = "",
  flipY = false,
}: WaveDividerProps) {
  return (
    <div
      className={`w-full overflow-hidden leading-none select-none pointer-events-none ${className} ${
        flipY ? "transform rotate-180" : ""
      }`}
    >
      <svg
        className="relative block w-full h-[32px] sm:h-[48px] md:h-[64px]"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,50 L1200,120 L0,120 Z"
          fill={fillColor}
        ></path>
      </svg>
    </div>
  );
}
