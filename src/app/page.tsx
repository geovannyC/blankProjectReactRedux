"use client";
import React from "react";
import TestFetching from "./pages/fetching/page.js";
import TestStore from "./pages/store/page.js";
import styles from "./page.module.scss";

import "../../styles/globals.css";
export default function Home() {
  return (
    <div className={styles.container}>
      <TestFetching />
      <TestStore />
    </div>
  );
}
