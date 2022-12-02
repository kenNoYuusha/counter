const Confirm = ({ children }) => {
  return (
    <>
      <p>Are you Sure?</p>
      <div className="flex flex-row gap-6">{children}</div>
    </>
  );
};
export { Confirm };
