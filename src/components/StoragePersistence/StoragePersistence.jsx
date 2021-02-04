import React from "react";
import cx from "classnames";
import Layout from "../Layout/Layout";
import "./styles.css";

import { usePersistentAtom } from "./use-persistent-atom";
import { darkModeAtom, colorAtom } from "./atoms";

function StoragePersistence() {
  const [darkMode, setDarkMode] = usePersistentAtom(...darkModeAtom);
  const [color, setColor] = usePersistentAtom(...colorAtom);

  const buttonClasses = cx(
    darkMode ? "bg-black text-white" : "bg-white text-black",
    "flex inline-flex justify-center items-center w-16 h-16 rounded-full opacity-75 text-sm transition duration-300 ease-in-out"
  );

  const codeBlockClasses = cx(
    darkMode ? "bg-black text-white" : "bg-white text-black",
    "block mt-4 p-4 rounded opacity-75 transition duration-300 ease-in-out"
  );

  return (
    <Layout>
      <div
        className={cx(
          `bg-${color}-${darkMode ? "800" : "200"}`,
          `text-gray-${darkMode ? "200" : "800"}`,
          "flex transition duration-300 ease-in-out border rounded-md m-2"
        )}
      >
        <div className="w-full m-16 text-sm">
          <div className="flex items-center space-x-4">
            <button onClick={() => setColor("gray")} className={buttonClasses}>
              gray
            </button>
            <button onClick={() => setColor("blue")} className={buttonClasses}>
              blue
            </button>
            <button
              onClick={() => setColor("purple")}
              className={buttonClasses}
            >
              purple
            </button>
            <button onClick={() => setColor("red")} className={buttonClasses}>
              red
            </button>
            <span className="flex-grow" />
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={buttonClasses}
            >
              {darkMode ? "light 🔥" : "dark 🌘"}
            </button>
          </div>
          <h1 className="mt-12 font-bold text-7xl">Jōtai</h1>
          <h2 className="flex justify-between items-center mt-2 text-xl opacity-50">
            <span>Primitive and flexible state management for React.</span>
            <span>状態</span>
          </h2>
          <p className="block mt-12 mb-1 leading-relaxed opacity-75">
            The jotai library can be extended to include persistent atoms that
            preserve state between user sessions via <code>localStorage</code>.
          </p>
          <h2 className="mt-8 text-xl opacity-50">atomWithPersistence</h2>
          <p className="block my-1 opacity-75">
            Creating a persistent atom requires a key string and default value.
          </p>
          <code className={codeBlockClasses}>
            const newAtom = atomWithPersistence(key, defaultValue)
          </code>
          <h2 className="mt-8 text-xl opacity-50">usePersistentAtom</h2>
          <p className="block my-1 opacity-75">
            Consuming a persistent atom requires spreading the returned key and
            atom.
          </p>
          <code className={codeBlockClasses}>
            const [state, setState] = usePersistentAtom(...newAtom)
          </code>
        </div>
      </div>
    </Layout>
  );
}

export default StoragePersistence;
