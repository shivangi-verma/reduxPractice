import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../features/counter/counterSlice";
import { toggleTheme } from "../features/theme/themeSlice";
import { fetchJoke } from "../features/joke/jokeSlice";

function Counter() {
  const selectCounter = useSelector((state) => state.counter.value);
  const selectTheme = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();

  const isDark = selectTheme === "dark";

  const { data, loading, error } = useSelector((state) => state.joke);

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
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white rounded-xl p-2 m-2 px-6 font-bold"
            onClick={() => dispatch(fetchJoke())}
          >
            Get Joke
          </button>
          <div className="bg-gray-800 m-2 text-white rounded-2xl p-6">
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {data && (
              <div>
                <p>{data.setup}</p>
                <p>{data.punchline}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Counter;
