import { RefObject, useEffect, useState } from "react";

type IntersectionObserverEntry = {
  isIntersecting: boolean;
};

export default function useOnScreen(
  ref: RefObject<Element>,
  rootMargin = "0px"
): boolean {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    if (ref.current == null) return;
    const observer = new IntersectionObserver(
      ([entry]: IntersectionObserverEntry[]) =>
        setIsVisible(entry.isIntersecting),
      { rootMargin }
    );
    observer.observe(ref.current);

    return () => {
      if (ref.current == null) return;
      // eslint-disable-next-line react-hooks/exhaustive-deps
      observer.unobserve(ref.current);
    };
  }, [ref, rootMargin]);

  return isVisible;
}
