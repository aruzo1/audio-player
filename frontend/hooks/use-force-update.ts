import { useReducer } from "react";

function useForceUpdate() {
  const [, forceUpdate] = useReducer((x) => x + 1, []);

  return forceUpdate;
}

export default useForceUpdate;
