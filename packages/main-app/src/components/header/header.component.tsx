"use client";

import { ReactElement } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import clsx from "clsx";

import styles from "./header.module.css";

interface NavItem {
  id: number;
  href: string;
  content: string;
}

const navItems: NavItem[] = [
  { id: 1, href: "/", content: "خانه" },
  { id: 2, href: "/search", content: "جستجو" },
];

export default function HeaderComponent(): ReactElement {
  const pathname = usePathname();
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                href={item.href}
                className={clsx(pathname === item.href && styles.active)}
              >
                {item.content}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <button className={styles.cta}>ورود | ثبت‌نام</button>
    </header>
  );
}
