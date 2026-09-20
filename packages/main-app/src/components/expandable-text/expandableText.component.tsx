"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

import styles from "./expandableText.module.css";

type Props = {
  children: ReactNode;
  maxHeight?: number;
};

export default function ExpandableText({
  children,
  maxHeight = 200,
}: Props): ReactNode {
  const [expanded, setExpanded] = useState(false);
  const [fullHeight, setFullHeight] = useState(maxHeight);
  const [needsToggle, setNeedsToggle] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    const height = el.scrollHeight;
    setFullHeight(height);
    setNeedsToggle(height > maxHeight);
  }, [maxHeight, children]);

  return (
    <div className={styles.wrapper}>
      <div
        ref={contentRef}
        className={styles.content}
        style={{ maxHeight: expanded ? fullHeight : maxHeight }}
      >
        {children}
      </div>

      {needsToggle && (
        <button
          type="button"
          className={styles.toggle}
          onClick={() => setExpanded((prev) => !prev)}
        >
          {expanded ? "نمایش کمتر" : "نمایش بیشتر"}
        </button>
      )}
    </div>
  );
}