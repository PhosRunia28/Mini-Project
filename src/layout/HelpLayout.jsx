import { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
export default function HelpLayout() {
  const [user, setUser] = useState("mario");
  const navigate = useNavigate();
  if (!user) {
    navigate("/", { replace: true });
  }
  return (
    <div className="flex w-full flex-col gap-9">
      HelpLayout
      <Link to="contact" className="max-w-fit border border-black px-4 py-2">
        Contact
      </Link>
      <button
        type="button"
        className="max-w-fit border border-black px-4 py-2"
        onClick={() => setUser(null)}
      >
        Logout
      </button>
      <Outlet />
    </div>
  );
}
