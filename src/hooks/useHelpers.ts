import { useState } from "react";

export const useHelpers = () => {
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string | undefined>(undefined);

  return {
    loading, setLoading, open, setOpen, selected, setSelected
  }
}