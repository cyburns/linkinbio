"use client";

import React from "react";
import { CommandMenu } from "@/components/command/command-menu";

interface CommandContextType {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CommandContext = React.createContext<CommandContextType | null>(null);

interface Props {
  children: React.ReactNode;
}

export function CommandProvider({ children }: Props) {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <CommandContext.Provider value={{ open, setOpen }}>
      {children}
      <CommandMenu />
    </CommandContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useCommand = () => {
  const searchContext = React.useContext(CommandContext);

  if (!searchContext) {
    throw new Error(
      "useCommand has to be used within <SearchContext.Provider>"
    );
  }

  return searchContext;
};
