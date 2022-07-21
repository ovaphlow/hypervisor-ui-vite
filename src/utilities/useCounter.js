import { useReducer } from "react";
import { RootContext } from "./context";

export const useCounter = () => {
    const [context, dispatch] = useReducer(RootContext);

    if (context.counter <= 0) {
        dispatch({ type: "set", key: "counter", value: 1 });
    }

    return [context, dispatch];
};
