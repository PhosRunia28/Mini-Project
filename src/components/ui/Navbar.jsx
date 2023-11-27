import { DoubleArrowRightIcon } from "@radix-ui/react-icons";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "./button";
export default function Navbar() {
  const cursorVariant = {
    open: {
      left: "100%",
    },
    close: {
      left: 0,
    },
  };
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="relative h-screen">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
            transition={{ duration: 0.5, ease: "backInOut" }}
            className="flex h-full flex-col items-center gap-6 bg-black px-4 py-6 text-white"
          >
            <NavLink to="/">
              <Button variant="secondary">Calculator</Button>
            </NavLink>
            <NavLink to="todo">
              <Button variant="secondary">To Do List</Button>
            </NavLink>
            <NavLink to="quiz">
              <Button variant="secondary">Quiz App</Button>
            </NavLink>
            <NavLink to="help">
              <Button variant="secondary">Help</Button>
            </NavLink>
            <NavLink to="careers">
              <Button variant="secondary">Careers</Button>
            </NavLink>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        variants={cursorVariant}
        initial={"open"}
        animate={isOpen ? "open" : "close"}
        transition={{ duration: 0.4, ease: "backInOut" }}
        className="absolute top-[40%] z-30 flex h-14 w-14 cursor-pointer items-center justify-center bg-red-500/20"
        onClick={() => setIsOpen(!isOpen)}
      >
        <DoubleArrowRightIcon className="h-[1.9rem] w-[1.9rem]" />
      </motion.div>
    </div>
  );
}
