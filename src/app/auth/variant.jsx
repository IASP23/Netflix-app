"use client";

import { useCallback } from "react";
import { useState } from "react";
export function Variant() {
  const [variant, setVariant] = useState(false);

  const toggle = () => {
    setVariant(!variant);
  };

  console.log(variant);
  return (
    <span
      onClick={toggle}
      className="text-white ml-3 hover:underline cursor-pointer">
      {!variant ? "Login " : "Register"}
    </span>
  );
}
