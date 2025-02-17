import React from "react";
import { atom, useAtom } from "jotai";
import Layout from "../Layout/Layout";

// Create your atoms and derivatives
const textAtom = atom("hello ");
const uppercaseAtom = atom((get) => get(textAtom).toUpperCase());
const textLengthAtom = atom((get) => get(textAtom).length);
const paintingAtom = atom((get) => get(textAtom).toLowerCase().includes("red"));

// Use them anywhere in your app
const Input = () => {
  const [text, setText] = useAtom(textAtom);
  return (
    <div class="flex justify-center">
      <input
        className="w-1/2 border-2 rounded-lg py-2 px-3 text-blue-500 bg-gray-300 focus:text-green-800"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};

const Uppercase = () => {
  const [uppercase] = useAtom(uppercaseAtom);
  return (
    <div className="border rounded-md p-4 bg-blue-800 text-green-100">
      Uppercase: {uppercase}
    </div>
  );
};

const TextLength = () => {
  const [textLength] = useAtom(textLengthAtom);
  return (
    <div className="border rounded-md p-4 bg-blue-800 text-green-100">
      Length: {textLength}
    </div>
  );
};

const Painting = () => {
  const [painting] = useAtom(paintingAtom);
  const classes = painting
    ? "border rounded-md p-4 bg-red-600 text-green-100"
    : "border rounded-md p-4 bg-blue-800 text-green-100";
  console.log(painting);
  return (
    <div className={classes}>
      type <b>red</b> on textfield
    </div>
  );
};

// Wrap your components in the Jotai provider
export default function InputField() {
  return (
    <Layout>
      <Input />
      <div className="flex justify-center items-center">
        <div class="w-1/2 grid grid-cols-1 gap-4 p-4">
          <Uppercase />
          <TextLength />
          <Painting />
        </div>
      </div>
    </Layout>
  );
}
