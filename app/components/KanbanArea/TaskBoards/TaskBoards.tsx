import React from "react";
import SingleBoard, { Board } from "./SingleBoard";

function TaskBoards() {
  const boards: Board[] = [
    { name: "Yet To Start", createdAt: new Date(), tasks: [] },
    { name: "In Progress", createdAt: new Date(), tasks: [] },
    { name: "Completed", createdAt: new Date(), tasks: [] },
  ];

  return (
    <div className="h-full rounded-2xl flex items-center mt-4 gap-3">
      {boards.map((board, index) => (
        <SingleBoard key={index} board={board} />
      ))}
    </div>
  );
}

export default TaskBoards;
