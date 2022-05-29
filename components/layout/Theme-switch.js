import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { RiMoonClearFill, RiSunFill } from "react-icons/ri";
import { useTheme } from "next-themes";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };
  if (!mounted) {
    return null;
  }

  return (
    <div
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className={`flex-start flex h-[50px] w-[100px] rounded-[50px] bg-zinc-100 p-[5px] shadow-inner hover:cursor-pointer dark:bg-zinc-700 ${
        theme === "light" && "place-content-end"
      }`}
    >
      <motion.div
        className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-black/90"
        layout
        transition={spring}
      >
        <motion.div whileTap={{ rotate: 360 }}>
          {theme === "light" ? (
            <RiSunFill className="w-6 h-6 text-yellow-300" />
          ) : (
            <RiMoonClearFill className="w-6 h-6 text-slate-200" />
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ThemeSwitch;