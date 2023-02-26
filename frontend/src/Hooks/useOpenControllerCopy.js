import { useCallback, useState } from "react";

export default function useOpenControllerCopy(initialState) {
  const [isOpenn, setOpenState] = useState(initialState);

  const togglee = useCallback(() => {
    setOpenState((state) => !state);
  }, [setOpenState]);

  return { isOpenn, togglee };
}