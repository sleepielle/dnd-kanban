import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { IoMdArrowDown } from "react-icons/io";
import { IoMdArrowUp } from "react-icons/io";
import { Button } from "@/components/ui/button";
import { DropdownMenuCheckboxItem } from "@radix-ui/react-dropdown-menu";

const options = ["A-Z", "Z-A"];

function Sorting() {
  const [selectedOption, setSelectedOption] = React.useState("A-Z");
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost">
            <span>{selectedOption}</span>
            {selectedOption === "A-Z" ? (
              <IoMdArrowDown className="text-sm" />
            ) : (
              <IoMdArrowUp className="text-sm" />
            )}
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-20">
          {options.map((option, index) => (
            <DropdownMenuCheckboxItem
              key={index}
              className="h-9"
              checked={selectedOption === option}
              onCheckedChange={() => setSelectedOption(option)}
            >
              {option}
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default Sorting;
