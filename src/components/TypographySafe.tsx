"use client";

import {
  Typography as MTTypography,
} from "@material-tailwind/react";
import type { ReactNode } from "react";

interface TypographySafeProps {
  as?: any;
  className?: string;
  color?: any;
  children: ReactNode;
}

export function TypographySafe({
  as = "p",
  className,
  color,
  children,
}: TypographySafeProps) {
  return (
    <MTTypography {...({} as any)} as={as} color={color} className={className}>
      {children}
    </MTTypography>
  );
}
