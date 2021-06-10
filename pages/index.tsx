import About from "./about";
import Landing from "./landing";
import Logos from "../components/logos";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <div className="h-full overflow-hidden">
      <Navbar />
      <Logos />
      <Landing />
      <About />
    </div>


  )
}
