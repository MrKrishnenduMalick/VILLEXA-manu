"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type ThemeMode = "white-marble" | "midnight";

interface ThemeContextType {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "white-marble",
  setTheme: () => {},
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeMode>("white-marble");

  useEffect(() => {
    // Check saved preference or default to white-marble
    const saved = localStorage.getItem("globaltex-theme") as ThemeMode | null;
    if (saved === "midnight" || saved === "white-marble") {
      setTheme(saved);
    }
  }, []);

  const handleSetTheme = (newTheme: ThemeMode) => {
    setTheme(newTheme);
    localStorage.setItem("globaltex-theme", newTheme);
  };

  const toggleTheme = () => {
    const next = theme === "white-marble" ? "midnight" : "white-marble";
    handleSetTheme(next);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme: handleSetTheme, toggleTheme }}>
      <div className={`theme-${theme} transition-colors duration-500`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

