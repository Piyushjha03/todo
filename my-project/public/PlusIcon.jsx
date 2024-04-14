const PlusIcon = (props) => {
  return (
    <svg
      className={`${props.className}`}
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.4">
        <path
          d="M5 9L5 1"
          // stroke="#1C1D22"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M9 5L1 5"
          // stroke="#1C1D22"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
};

export default PlusIcon;
