"use client";

import { useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { User } from "@supabase/auth-js";

export function useUser() {
  const [user, setUser] = useState<User | null>(null);
  const supabase = createClientComponentClient();

  useEffect(() => {
    supabase.auth.getUser().then(({ data, error }) => {
      console.log("User:", data.user);
      console.log("Error:", error);
      setUser(data.user);
    });
  }, []);

  return user;
}
