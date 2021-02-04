import { atom } from "jotai";
import { isSSR } from "./is-ssr";

export const atomWithPersistence = (key, defaultValue) => {
  const getInitialValue = (fallbackValue) => {
    try {
      const storedValue = window.localStorage.getItem(key);
      return storedValue !== null ? JSON.parse(storedValue) : fallbackValue;
    } catch (error) {
      console.error(error);
      return fallbackValue;
    }
  };

  const initialValue = !isSSR ? getInitialValue(defaultValue) : defaultValue;
  const persistentAtom = atom(initialValue);

  return [key, persistentAtom];
};
