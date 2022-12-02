import { useReducer, useEffect } from "react";
const useApp = () => {

  const [state, dispatch] = useReducer(reducer, initialState);
  const { yes, no, confirm } = state;

  useEffect(() => {
    localStorage.setItem("COUNTER", JSON.stringify({ yes, no }));
  }, [yes, no]);

  //ACCIONS
  const onYes = () => {
    dispatch({ type: actionTypes.yes });
  };
  const onNo = () => {
    dispatch({ type: actionTypes.no });
  };
  const onConfirm = () => {
    dispatch({ type: actionTypes.confirm });
  };
  const onReset = () => {
    dispatch({ type: actionTypes.reset });
  };
  const onCancel = () => {
    dispatch({ type: actionTypes.cancel });
  };

  //PORCENTAJE CALC
  let porcentaje;
  if (yes == 0 && no > 0) {
    porcentaje = -100;
  } else if (yes == 0 && no == 0) {
    porcentaje = 0;
  } else {
    porcentaje = (100 - (no * 100) / yes).toFixed(2);
  }

  const actions = {
    onYes,
    onNo,
    onConfirm,
    onReset,
    onCancel,
  }

  const values = {
    yes,
    no,
    confirm,
    porcentaje,
  }

  return {
    actions,
    values,
  }

};

const reducerObject = (state) => ({
  [actionTypes.yes]: {
    ...state,
    yes: state.yes + 1,
  },
  [actionTypes.no]: {
    ...state,
    no: state.no + 1,
  },
  [actionTypes.confirm]: {
    ...state,
    confirm: true,
  },
  [actionTypes.reset]: {
    ...state,
    yes: 0,
    no: 0,
    confirm: false,
  },
  [actionTypes.cancel]: {
    ...state,
    confirm: false,
  },
});

const reducer = (state, action) => {
  if (reducerObject(state)[action.type]) {
    return reducerObject(state)[action.type];
  }
  return state;
};

const initialState = {
  ...JSON.parse(localStorage.getItem("COUNTER")),
  confirm: false,
} || {
  yes: 0,
  no: 0,
  confirm: false,
};

const actionTypes = {
  yes: "YES",
  no: "NO",
  confirm: "CONFIRM",
  reset: "RESET",
  cancel: "CANCEL",
  init: "INIT",
};
export { useApp }