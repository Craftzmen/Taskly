import React from "react";
import { Link } from "react-router-dom";

import "./output/output.css";

const App = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-b from-zinc-200 to-white p-10 md:p-16">
      <div className="flex flex-col lg:flex-row gap-5 justify-between items-center">
        <code className="text-xs px-9 py-4 rounded-lg bg-zinc-100/70">
          Get Started by editing <b>app/src/App.js</b>
        </code>
        <div className="inline-flex gap-x-3 items-center ">
          <span className="text-sm">By</span>
          <Link to="https://github.com/Craftzmen" target="_blank" className="text-xl font-semibold">Craftzmen</Link>
        </div>
      </div>
      <div className="flex flex-col gap-10 md:flex-row justify-center mt-52 max-w-3xl mx-auto">
        <Link to="https://react.dev" target="_blank">
          <div className="bg-gradient-to-b border border-b-0 border-transparent hover:border-zinc-200 from-white to-zinc-100/50 px-12 py-9 rounded-2xl hover:opacity-70">
            <h1 className="text-lg font-semibold">React &nbsp; → </h1>
            <p className="text-sm mt-3 text-zinc-400">
              Open-source JavaScript library for building user interfaces.
            </p>
          </div>
        </Link>
        <Link to="https://tailwindcss.com" target="_blank">
          <div className="bg-gradient-to-b border border-b-0 border-transparent hover:border-zinc-200 from-white to-zinc-100/50 px-12 py-9 rounded-2xl hover:opacity-70">
            <h1 className="text-lg font-semibold">Tailwind &nbsp; → </h1>
            <p className="text-sm mt-3 text-zinc-400">
              CSS framework that focuses on providing low-level utility classes.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default App;
