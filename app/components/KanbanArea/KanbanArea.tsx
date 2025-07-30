import React from "react";
import { useTheme } from "next-themes";
import { Card } from "@/components/ui/card";
import KanbanAreaHeader from "./KanbanAreaHeader";
import KanbanAreaBoards from "./KanbanAreaBoards";

function KanbanArea() {
  const { theme } = useTheme();
  const cardColor = theme === "dark" ? "bg-white" : "bg-white";
  return (
    <Card
      className={`${cardColor}  shadow-none p-7 rounded-3xl px-7  flex flex-col gap-8 mb-8`}
    >
      <KanbanAreaHeader />
      <KanbanAreaBoards />
    </Card>
  );
}

export default KanbanArea;
