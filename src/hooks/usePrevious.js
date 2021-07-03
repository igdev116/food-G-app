import { useEffect, useRef } from "react";

export const usePrevious = (value) => {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  });

  console.log("HOOKS:", ref.current);
  return ref.current;
};
