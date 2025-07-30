import { Badge } from "@/components/ui/badge";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaPencil } from "react-icons/fa6";

//me imagino que aqui va un type para la single task, que es lo que se le envia
//export type Task = {
//    badge,
//    title, description
//}

function SingleTask() {
  return (
    <div className="w-full h-full border p-4 rounded-2xl">
      <div className="flex justify-between items-center py-4">
        <Badge className="bg-green-300 text-green-600 font-bold">Title</Badge>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <FaPencil className="text-sm text-green-500" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Edit task</DropdownMenuItem>
              <DropdownMenuItem>
                <span className="text-red-600">Delete task</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="flex flex-col gap-3 py-4">
        <span className="text-xl font-bold">Develop Hero Section</span>
        <span>Build hero component.</span>
      </div>
    </div>
  );
}

export default SingleTask;
