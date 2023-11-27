import { Outlet } from "react-router-dom";
import Navbar from "../components/ui/Navbar";
export default function Project() {
  return (
    <div className="flex gap-4">
      <Navbar />
      <Outlet />
    </div>
  );
}
