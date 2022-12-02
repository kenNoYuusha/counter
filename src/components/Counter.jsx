const Counter = ({ children }) => {
  return (
    <h2>
      Releases{" "}
      <span
        className={`${children < 80 ? "text-red-500" : "text-emerald-500"}
                   font-bold`}
      >
        {children}%
      </span>
    </h2>
  );
};
export { Counter };
