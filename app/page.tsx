"use client";
import { useTheme } from "next-themes";
import NavBar from "../app/components/NavBar";
import KanbanArea from "./components/KanbanArea/KanbanArea";
import GraphicsArea from "./components/GraphicsArea";

export default function Home() {
  const { theme } = useTheme();

  const bgColor = theme === "dark" ? "bg-dark" : "bg-gray-100";

  return (
    <div className={`${bgColor} border min-h-screen w-full`}>
      <NavBar />
      <div className="grid grid-cols-[3fr_1fr] px-6 mt-8 gap-4">
        <div>
          <KanbanArea />
        </div>
        <div>
          <GraphicsArea></GraphicsArea>
        </div>
      </div>
    </div>
  );
}
