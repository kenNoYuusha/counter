import { useState, useEffect } from "react";
const App = () => {
  const [state, setState] = useState({
    yes: 0,
    no: 0,
    confirm: false,
  });

  useEffect(() => {

    const counter = JSON.parse(localStorage.getItem("COUNTER"));
    if (counter) {
      setState({...counter, confirm: false})
    } else {
      localStorage.setItem("COUNTER", JSON.stringify({ yes: 0, no: 0 }));
      setState({yes: 0, no: 0, confirm: false})
    }
  }, []);

  const { yes, no, confirm } = state;

  const onYes = () => {
    setState({ ...state, yes: yes + 1 });
    localStorage.setItem('COUNTER', JSON.stringify({yes: yes + 1, no}))
  };
  const onNo = () => {
    setState({ ...state, no: no + 1 });
    localStorage.setItem('COUNTER', JSON.stringify({yes, no: no + 1}))
  };
  const onConfirm = () => {
    setState({ ...state, confirm: true });
  };
  const onReset = () => {
    setState({ ...state, yes: 0, no: 0, confirm: false });
    localStorage.setItem('COUNTER', JSON.stringify({yes: 0, no: 0}))
  };
  const onCancel = () => {
    setState({ ...state, confirm: false });
  };

  return (
    <main
      className="w-full h-screen grid place-items-center 
                     bg-zinc-800 text-zinc-100"
    >
      <div className="w-4/5 h-4/5 flex flex-col items-center justify-evenly text-2xl">
        <h2>Releases</h2>
        <button
          className="w-32 h-32 grid place-items-center
                         bg-emerald-800 border-4 border-zinc-100 rounded-full text-3xl"
          onClick={onYes}
        >
          {yes}
        </button>
        <button
          className="w-32 h-32 grid place-items-center
                           bg-red-800 border-4 border-zinc-100 rounded-full text-3xl"
          onClick={onNo}
        >
          {no}
        </button>

        {!confirm && (
          <button
            className="px-10 py-4 bg-cyan-800 border-4 border-zinc-100 rounded-xl"
            onClick={onConfirm}
          >
            Reset
          </button>
        )}

        {!!confirm && (
          <>
            <p>Are you Sure?</p>
            <div className="flex flex-row gap-6">
              <button
                className="px-8 py-2 bg-zinc-800 border-4 border-zinc-100 rounded-xl text-xl"
                onClick={onCancel}
              >
                Cancel
              </button>
              <button
                className="px-8 py-2 bg-cyan-800 border-4 border-zinc-100 rounded-xl text-xl"
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
