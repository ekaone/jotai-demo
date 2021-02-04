import { useEffect } from "react";
import { useAtom } from "jotai";

export const usePersistentAtom = (key, atom) => {
  const [state, setState] = useAtom(atom);

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(state));
    } catch (error) {
      console.error(error);
    }
  }, [key, state]);

  return [state, setState];
};
