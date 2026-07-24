"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { Button } from "./Button";

export function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-10 h-10 rounded-md bg-surface border border-border" />;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <Button
      variant="ghost"
      size="icon"
      className="relative overflow-hidden w-10 h-10 border border-border bg-surface hover:bg-surface-hover text-foreground"
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle Theme"
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        <motion.div
          initial={false}
          animate={{
            y: currentTheme === "dark" ? 0 : -30,
            opacity: currentTheme === "dark" ? 1 : 0,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Moon className="w-4 h-4" />
        </motion.div>
        
        <motion.div
          initial={false}
          animate={{
            y: currentTheme === "light" ? 0 : 30,
            opacity: currentTheme === "light" ? 1 : 0,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Sun className="w-4 h-4" />
        </motion.div>
      </div>
    </Button>
  );
}
