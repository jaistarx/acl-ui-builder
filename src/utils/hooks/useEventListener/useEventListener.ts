import { useEffect, useRef } from "react";

type EventCallback<T extends Event> = (event: T) => void;

export default function useEventListener<T extends Event>(
  eventType: string,
  callback: EventCallback<T>,
  element: EventTarget | null = window
) {
  const callbackRef = useRef<EventCallback<T>>(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (element == null) return;

    const handler = (e: Event) => callbackRef.current(e as T);
    element.addEventListener(eventType, handler);

    return () => element.removeEventListener(eventType, handler);
  }, [eventType, element]);
}
