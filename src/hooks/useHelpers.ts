import { useState } from "react";

export const useHelpers = () => {
  const [open, setOpen] = useState(false);
  return {
    open, setOpen
  }
}