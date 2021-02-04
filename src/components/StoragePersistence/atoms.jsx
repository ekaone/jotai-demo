import { atom } from "jotai";
import { atomWithPersistence } from "./atom-with-persistence";

// Transient global state
export const menuAtom = atom(false);

// Persistent global state
export const darkModeAtom = atomWithPersistence("darkMode", false);
export const colorAtom = atomWithPersistence("color", "gray");
