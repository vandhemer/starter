import { useRef, useEffect, useState, ReactNode } from "react";
import { createPortal } from "react-dom";

type ClientOnlyPortalProps = {
  children: ReactNode;
  selector: string;
};

export default function ClientOnlyPortal({ children, selector }: ClientOnlyPortalProps) {
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector(selector);
    setMounted(true);
  }, [selector]);

  return mounted && ref.current ? createPortal(children, ref.current) : null;
}