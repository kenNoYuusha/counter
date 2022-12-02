const Button = ({ children, typeButton, action, disabled = false }) => {
  switch (typeButton) {
    case "success":
      return (
        <button
          className="w-28 h-28 grid place-items-center text-3xl shadow-lg shadow-zinc-500
                   bg-emerald-700 border-2 border-zinc-100 rounded-full
                   hover:bg-emerald-800 
                   active:bg-emerald-900"
          onClick={action}
          disabled={disabled}
        >
          {children}
        </button>
      );
    case "danger":
      return (
        <button
          className="w-28 h-28 grid place-items-center text-3xl shadow-lg shadow-zinc-500
                   bg-red-700 border-2 border-zinc-100 rounded-full
                   hover:bg-red-800 
                   active:bg-red-900"
          onClick={action}
          disabled={disabled}
        >
          {children}
        </button>
      );
    case "primary":
      return (
        <button
          className="flex gap-x-2 items-center px-6 py-2 text-xl shadow-lg shadow-zinc-500 
                   bg-cyan-700 border-2 border-zinc-100 rounded-xl
                   hover:bg-cyan-800 
                   active:bg-cyan-900"
          onClick={action}
          disabled={disabled}
        >
          {children}
        </button>
      );
    case "secondary":
      return (
        <button
          className="flex gap-x-2 items-center px-6 py-2 text-xl shadow-lg shadow-zinc-500
                   bg-zinc-700 border-2 border-zinc-100 rounded-xl
                   hover:bg-zinc-800 
                   active:bg-zinc-900"
          onClick={action}
          disabled={disabled}
        >
          {children}
        </button>
      );
    default:
      return (
        <button
          className="flex gap-x-2 items-center px-6 py-2 shadow-lg shadow-zinc-500 text-xl
                   bg-zinc-700 border-2 border-zinc-100 rounded-xl
                   hover:bg-zinc-800 
                   active:bg-zinc-900"
          onClick={action}
          disabled={disabled}
        >
          {children}
        </button>
      );
  }
};
export { Button };
