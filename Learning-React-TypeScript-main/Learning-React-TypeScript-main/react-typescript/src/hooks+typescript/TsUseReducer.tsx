import { createContext, useReducer } from "react";

export const CounterContext = createContext<CounterContextType | undefined>(
  undefined
);

type CounterState = {
  count: number;
};
type CounterAction = {
  type: "increment" | "decrement" | "reset";
  payload?: number;
};
type CounterContextProviderProps = {
  children: React.ReactNode;
};
type CounterContextType = {
  state: CounterState;
  dispatch: React.Dispatch<CounterAction>;
};
const InitialValue = {
  count: 1,
};
const reducer = (state: CounterState, action: CounterAction) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };

    case "decrement":
      return { ...state, count: state.count - 1 };
    case "reset":
      return InitialValue;
    default:
      return state;
  }
};
export default function CounterProvider({
  children,
}: CounterContextProviderProps) {
  const [state, dispatch] = useReducer(reducer, InitialValue);

  return (
    <div>
      <CounterContext.Provider value={{ state, dispatch }}>
        {children}
      </CounterContext.Provider>
    </div>
  );
}
