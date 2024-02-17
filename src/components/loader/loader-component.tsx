"use client";
import React from "react";
import styles from "./loader.module.css";


export interface LoaderProps {
  children?: React.ReactNode;
}

const Loader = ({ children = "Loading" }: LoaderProps) => {
  return (
  <div className={styles.loaderwrapper}>
    <div className={styles.loader}>
      {children}
    </div>
  </div>
  );
};

export default Loader;