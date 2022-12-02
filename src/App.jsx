import { Main } from "./components/Main";
import { Container } from "./components/Container";
import { Counter } from "./components/Counter";
import { Button } from "./components/Button";
import { Confirm } from "./components/Confirm";
import { ImUndo2, ImCheckmark, ImCross } from "react-icons/im";
import { useApp } from "./js/useApp";

const App = () => {
  const {
    values: { yes, no, confirm, porcentaje },
    actions: { onYes, onNo, onConfirm, onReset, onCancel },
  } = useApp();

  return (
    <Main>
      <Container>
        <Counter>{porcentaje}</Counter>
        <Button typeButton={"success"} action={onYes}>
          {yes}
        </Button>
        <Button typeButton={"danger"} action={onNo}>
          {no}
        </Button>
        {!confirm && (
          <Button
            typeButton={"primary"}
            action={onConfirm}
            disabled={yes == 0 && no == 0}
          >
            <ImUndo2 />
            Reset
          </Button>
        )}
        {!!confirm && (
          <Confirm>
            <Button typeButton={"secondary"} action={onCancel}>
              <span className="text-sm">
                <ImCross />
              </span>
              <p>Cancel</p>
            </Button>
            <Button typeButton={"primary"} action={onReset}>
              <span className="text-sm">
                <ImCheckmark />
              </span>
              <p>OK</p>
            </Button>
          </Confirm>
        )}
      </Container>
    </Main>
  );
};

export default App;
