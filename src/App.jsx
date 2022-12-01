import { useState, useEffect } from "react";
import { ImUndo2 } from 'react-icons/im'
const App = () => {
  const [state, setState] = useState({
    yes: 0,
    no: 0,
    confirm: false,
  });

  useEffect(() => {
    const counter = JSON.parse(localStorage.getItem("COUNTER"));
    if (counter) {
      setState({ ...counter, confirm: false });
    } else {
      localStorage.setItem("COUNTER", JSON.stringify({ yes: 0, no: 0 }));
      setState({ yes: 0, no: 0, confirm: false });
    }
  }, []);

  const { yes, no, confirm } = state;
  let porcentaje;
  if (yes == 0 && no > 0) {
    porcentaje = -100;
  } else if (yes == 0 && no == 0) {
    porcentaje = 0;
  } else {
    porcentaje = (100 - (no * 100) / yes).toFixed(2);
  }

  const onYes = () => {
    setState({ ...state, yes: yes + 1 });
    localStorage.setItem("COUNTER", JSON.stringify({ yes: yes + 1, no }));
  };
  const onNo = () => {
    setState({ ...state, no: no + 1 });
    localStorage.setItem("COUNTER", JSON.stringify({ yes, no: no + 1 }));
  };
  const onConfirm = () => {
    setState({ ...state, confirm: true });
  };
  const onReset = () => {
    setState({ ...state, yes: 0, no: 0, confirm: false });
    localStorage.setItem("COUNTER", JSON.stringify({ yes: 0, no: 0 }));
  };
  const onCancel = () => {
    setState({ ...state, confirm: false });
  };

  return (
    <main
      className="w-full h-screen grid place-items-center 
                     bg-zinc-800 text-zinc-100 font-Kalam"
    >
      <div className="w-full h-[80%] flex flex-col items-center justify-start gap-10 text-3xl bg-zinc-800">
        <h2>
          Releases{" "}
          <span
            className={`font-bold ${
              porcentaje < 80 ? "text-red-500" : "text-emerald-500"
            }`}
          >
            {porcentaje}%
          </span>
        </h2>
        <button
          className="w-28 h-28 grid place-items-center shadow-lg shadow-zinc-500
                         bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 border-2 border-zinc-100 rounded-full text-3xl"
          onClick={onYes}
        >
          {yes}
        </button>
        <button
          className="w-28 h-28 grid place-items-center shadow-lg shadow-zinc-500
                           bg-red-700 hover:bg-red-800 active:bg-red-900  border-2 border-zinc-100 rounded-full text-3xl"
          onClick={onNo}
        >
          {no}
        </button>

        {!confirm && (
          <button
            className="px-6 py-4 flex gap-x-2 items-center shadow-lg shadow-zinc-500
                     bg-cyan-700 hover:bg-cyan-800 active:bg-cyan-900 border-2 border-zinc-100 rounded-xl text-xl"
            onClick={onConfirm}
            disabled={(yes == 0 && no == 0) ? true : false }
          >
            <span><ImUndo2 /></span><p>Reset</p>
          </button>
        )}

        {!!confirm && (
          <>
            <p>Are you Sure?</p>
            <div className="flex flex-row gap-6">
              <button
                className="px-8 py-2 bg-zinc-700 shadow-lg shadow-zinc-500
                           hover:bg-zinc-800 active:bg-zinc-900 border-2 border-zinc-100 rounded-xl text-xl"
                onClick={onCancel}
              >
                Cancel
              </button>
              <button
                className="px-8 py-2 bg-cyan-700 shadow-lg shadow-zinc-500
                          hover:bg-cyan-800 active:bg-cyan-900  border-2 border-zinc-100 rounded-xl text-xl"
                onClick={onReset}
              >
                OK
              </button>
            </div>
          </>
        )}
      </div>
    </main>
  );
};
export default App;
