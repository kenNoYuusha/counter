const Container = ({ children }) => {
  return (
    <div
      className="w-full h-[80%] flex flex-col items-center justify-start gap-10 text-3xl 
               bg-zinc-800"
    >
      {children}
    </div>
  );
};
export { Container };
