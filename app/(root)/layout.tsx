"use client";

import React from "react";
import { DayPickerProvider } from "react-day-picker";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <DayPickerProvider initialProps={{}}>{children}</DayPickerProvider>;
};

export default layout;
