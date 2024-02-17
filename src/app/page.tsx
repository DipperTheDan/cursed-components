"use client";
import React from "react";
import styles from "./page.module.css";
import Loader from "@/components/loader";
import TelephoneNumber from "@/components/telephone-number";
import DatePicker from "@/components/date";
import Button from "@/components/button";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Loader />
        <TelephoneNumber label="Telephone Number" min="0" max="99999999999" />
        <DatePicker label="Choose a date" min="0" max="999999999"/>
        <Button>Click Me</Button>
      </div>
    </main>
  );
}
