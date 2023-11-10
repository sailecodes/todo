const SeeIcon = ({ fill, stroke }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={fill ? fill : "none"}
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={stroke ? stroke : "currentColor"}
      className="home--card-non-data-icon">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l6-6m0 0l6 6m-6-6v12a6 6 0 01-12 0v-3" />
    </svg>
  );
};
export default SeeIcon;
