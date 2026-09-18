import { PropsWithChildren, ReactNode } from "react";

import styles from "./card.module.css";

type Props = PropsWithChildren;

export default function CardComponent({ children }: Props): ReactNode {
  return <div className={styles.card}>{children}</div>;
}
