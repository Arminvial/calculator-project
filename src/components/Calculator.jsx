"use client";

import { useDispatch, useSelector } from "react-redux";
import { append, clear, calculate } from "@/redux/store";

const Calculator = () => {
  const dispatch = useDispatch();
  const { expression, result } = useSelector((state) => state.calculator);

  const buttons = ["7", "8", "9", "+", "4", "5", "6", "-", "1", "2", "3", "*", "0", ".", "=", "/"];

  return (
    <div className="flex flex-col items-center p-5 bg-amber-200 min-h-screen">
      <div className="bg-white p-4 rounded-lg shadow-md w-80">
        <div className="text-right mb-2 text-lg font-mono">{expression}</div>
        <div className="text-right mb-4 text-2xl font-bold">{result}</div>
        <div className="grid grid-cols-4 gap-2">
          {buttons.map((btn) => (
            <button
              key={btn}
              className="p-3 bg-gray-300 rounded-lg hover:bg-gray-400 transition"
              onClick={() => (btn === "=" ? dispatch(calculate()) : dispatch(append(btn)))}
            >
              {btn}
            </button>
          ))}
          <button
            className="col-span-4 p-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            onClick={() => dispatch(clear())}
          >
            C
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
