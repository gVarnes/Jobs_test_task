import React from "react";
import styles from "./index.module.scss";

const JobDate = ({ createdAt }) => {
  const calcDate = () => {
    const now = new Date();
    const date = new Date(createdAt);
    const res = Math.floor((now - date) / (1000 * 60 * 60 * 24));
    return res;
  };
  return <p className={styles.time}>Posted {calcDate()} days ago</p>;
};

export default JobDate;
