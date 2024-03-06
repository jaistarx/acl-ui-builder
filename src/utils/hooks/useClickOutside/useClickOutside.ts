import { RefObject } from "react";
import useEventListener from "../useEventListener";

type EventCallback<T extends Event> = (event: T) => void;

export default function useClickOutside<T extends HTMLElement>(
  ref: RefObject<T>,
  callback: EventCallback<MouseEvent>
) {
  useEventListener(
    "click",
    (e) => {
      if (ref.current == null || ref.current.contains(e.target as Node)) return;
      callback(e as MouseEvent);
    },
    document
  );
}
