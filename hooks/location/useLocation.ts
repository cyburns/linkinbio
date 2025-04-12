"use client";

import { usePathname, useSearchParams } from "next/navigation";

export function useLocation() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const href = `${pathname}${
    searchParams.toString() ? `?${searchParams}` : ""
  }`;

  return href;
}
