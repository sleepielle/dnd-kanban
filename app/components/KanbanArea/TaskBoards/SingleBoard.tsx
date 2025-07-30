import React from "react";
import { useTheme } from "next-themes";
import SingleTask from "./SingleTask";
export type Board = {
  name: string;
  createdAt: Date;
  tasks: string[];
};

function SingleBoard({ board }: { board: Board }) {
  const { name: boardName, tasks } = board;
  const { theme } = useTheme();
  const numberTasks = tasks.length;

  const bgColor = theme === "dark" ? "bg-white" : "bg-white";

  return (
    <div className="w-full h-full border p-4 rounded-2xl">
      <div
        className={`flex justify-between items-center p-2 rounded-lg ${bgColor}`}
      >
        <span className="font-medium text-lg">{boardName}</span>
        <div className="size-6 rounded-full  bg-blue-200 text-blue-500 flex items-center justify-center">
          <span className=" text-blue-500 font-bold">{numberTasks}</span>
        </div>
      </div>

      {/*tasks container, individual tasks*/}
      <div className="mt-7">
        {[1, 2].map((index) => (
          <SingleTask key={index} />
        ))}
      </div>
    </div>
  );
}

export default SingleBoard;
