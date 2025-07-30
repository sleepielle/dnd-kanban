import React from "react";
import Logo from "./Logo";
import { ModeToggle } from "../mode-toggle";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

function NavBar() {
  return (
    <div className="p-6 flex justify-between items-center">
      <div className="flex items-center gap-16">
        <Logo />
      </div>

      <div className="flex items-center gap-5">
        <ModeToggle />
        <Separator orientation="vertical" className="h-5 w-[2px] bg-gray-500" />
        <Button className="rounded-xl h-10 shadow-none">Add New Project</Button>
      </div>
    </div>
  );
}

export default NavBar;
