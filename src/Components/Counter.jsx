import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../features/counter/counterSlice";
import { toggleTheme } from "../features/theme/themeSlice";

function Counter() {
  const selectCounter = useSelector((state) => state.counter.value);
  const selectTheme = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();

  const isDark = selectTheme === "dark";

  return (
    <>
      <div
        className={`'m-0 flex flex-col justify-center items-center h-screen w-screen' ${
          isDark ? "bg-black" : "bg-white"
        } `}
      >
        <div className="w-sm flex justify-center items-center flex-col bg-gray-800 rounded-2xl p-4 m-4 text-white">
          <h1 className="text-3xl">Counter : {selectCounter}</h1>

          <button
            className="bg-blue-500 hover:bg-blue-700 text-white rounded-xl p-2 m-2 px-6 font-bold"
            onClick={() => {
              dispatch(increment());
            }}
          >
            Inc
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white rounded-xl p-2 m-2 px-6 font-bold"
            onClick={() => {
              dispatch(decrement());
            }}
          >
            Dec
          </button>
        </div>
        <div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white rounded-xl p-2 m-2 px-6 font-bold"
            onClick={() => {
              dispatch(toggleTheme());
            }}
          >
            Theme : {selectTheme}
          </button>
        </div>
      </div>
    </>
  );
}

export default Counter;
