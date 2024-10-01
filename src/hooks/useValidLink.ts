import { useCallback, useEffect, useState } from "react";
import { getCurrentTab } from "../utils/tabs";

export const useValidLink = (url: string) => {
  const [isValid, setIsValid] = useState(false);

  const getTab = useCallback(async () => {
    const [tab] = await getCurrentTab();
    if (tab.url && tab.url.includes(`://${url}`)) {
      setIsValid(true);
    }
  }, [url]);

  useEffect(() => {
    getTab();
  }, [getTab]);

  return { isValid };
};
