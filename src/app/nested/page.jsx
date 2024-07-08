"use client";
import { useState } from "react";

const TabPage = () => {
  const [isActive, setIsActive] = useState(true);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-1/3 h-[40vh] flex flex-col border-2 border-gray-300 rounded-lg">
        <div className="p-2 bg-gray-600/15 flex gap-3">
          <button
            onClick={() => setIsActive(true)}
            className={`${isActive && "bg-gray-700/45 "} px-4 rounded-lg py-1`}
          >
            link-1
          </button>
          <button
            onClick={() => setIsActive(false)}
            className={`${!isActive && "bg-gray-700/45 "} px-4 rounded-lg py-1`}
          >
            link-2
          </button>
        </div>
        <section className="flex-1 items-center flex justify-center">
          {isActive ? (
            <div>Content for Link-1</div>
          ) : (
            <div>Content for Link-2</div>
          )}
        </section>
      </div>
    </div>
  );
};


export default TabPage;
