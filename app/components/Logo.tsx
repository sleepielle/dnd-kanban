import React from "react";
import { FaProjectDiagram } from "react-icons/fa";

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="bg-primary size-10 text-lg text-white rounded-xl flex justify-center items-center">
        <FaProjectDiagram />
      </div>

      <div className="flex gap-1 items-center text-xl">
        <span className="text-xl font-bold">Pro</span>
        <span className="text-xl">Kanban</span>
      </div>
    </div>
  );
}

export default Logo;
