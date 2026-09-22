import { ReactNode } from "react";
import styles from "./specialties.module.css";

type Props = { value: string };

export default function Specialties({ value }: Props): ReactNode {
  const items = value
    .split(/[،_\.]/)
    .map((s) => s.trim())
    .filter(Boolean);

  return (
    <ul className={styles.list}>
      {items.map((s, index) => (
        <li key={`${s}-${index}`} className={styles.chip}>
          {s}
        </li>
      ))}
    </ul>
  );
}