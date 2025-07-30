"use client";

import React from "react";
import { useTheme } from "next-themes";
function GraphicsArea() {
  const { theme } = useTheme();
  const cardColor = theme === "dark" ? "bg-white" : "bg-white";
  return (
    <div className={`${cardColor} rounded-3xl shadow-none p-6 max-h-[640px] `}>
      <div className="flex flex-col gap-0">
        {/*<ProjectSelectionDropdown/> <CircularProgress/>  <TaskStats/>*/}
      </div>
    </div>
  );
}

export default GraphicsArea;
