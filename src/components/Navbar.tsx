import React from "react"
import { Button } from "./ui/button"

function Navbar() {
  return (
    <nav className="bg-black h-[10%]  text-white p-[2px] rounded-full w-[75%] mx-auto mt-2 shadow-md transition-all duration-300 hover:scale-[1.01]">
      <div className="bg-black  rounded-full flex items-center justify-between px-2">
        <div className="text-xl font-semibold text-white-800 tracking-tight select-none">
          SQ<span className="text-zinc-600">Task</span>
        </div>

        <div>
          <Button className="rounded-full px-8 py-5 text-sm font-medium bg-gradient-to-r from-white to-zinc-100 text-black hover:opacity-90 transition">
            Login
          </Button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
