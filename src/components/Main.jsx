import { useState } from "react";
import { BsSun, BsMoonStars } from "react-icons/bs";
const Main = ({ children }) => {
  const [dark, setDark] = useState(true);
  return (
    <div className={`block ${dark && "dark"}`}>
      <main
        className=" relative w-full h-screen grid place-items-center 
                  text-zinc-800 font-Kalam bg-zinc-100
                  dark:bg-zinc-800 dark:text-zinc-100"
      >
        <button
          className="absolute right-4 top-4 p-3 text-lg rounded-full shadow-lg shadow-zinc-300
                   dark:shadow-zinc-700"
          onClick={() => setDark(!dark)}
        >
          {dark ? <BsMoonStars /> : <BsSun />}
        </button>
        {children}
      </main>
    </div>
  );
};
export { Main };
