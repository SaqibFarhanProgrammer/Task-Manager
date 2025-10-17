import Navbar from "@/components/Navbar"
import { Button } from "@/components/ui/button"

function Home() {
  return (
    <div className="h-[75vh] via-zinc-400 w-full pt-1 flex justify-between items-center flex-col -white">  
    <Navbar />
    <div className="hero w-full mt-10 flex gap-6 flex-col justify-center items-center h-[90%]  ">
      <h1 className="hero text-7xl text-center">
        Manage Your Growth Here! With Minimalliusium
      </h1>
      <p className="hero-para text-2xl px-90 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, illum explicabo! Consequuntur, provident sequi?</p>
       <div className="CYA">
        <Button>Login </Button>
        <Button> Register</Button>
       </div>
    </div>
  
        
    </div>
  ) 
}   

export default Home