import { useContext } from "react";
import { CounterContext } from "./TsUseReducer";
export default function Counter() {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error("Undefined");
  }
  const { state, dispatch } = context;

  return (
    <div>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}
