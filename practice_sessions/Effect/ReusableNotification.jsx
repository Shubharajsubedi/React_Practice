import { useState, useCallback, useEffect } from "react";

export function useNotification(duration = 3000) {
  const [notification, setNotification] = useState(null);
  

  const notify = useCallback((message, type = "success") => {
    setNotification({ message, type });
  }, []);

  const clear = useCallback(() => setNotification(null), []);

  useEffect(() => {
    if (!notification) return;
    const timer = setTimeout(() => setNotification(null), duration);
    return () => clearTimeout(timer);
  }, [notification, duration]);

  return { notification, notify, clear };
}
