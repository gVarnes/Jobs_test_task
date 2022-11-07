import React, { useEffect } from "react";
import styles from "./index.module.scss";
import { useNavigate } from "react-router-dom";

import { FaRegBookmark, FaMapMarkerAlt } from "react-icons/fa";
import JobDate from "../JobDate/component";

const JobItem = ({ id, title, name, pictures, address, createdAt }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.item}>
        <div className={styles.content}>
          <div className={styles.image}>
            <img src={pictures[0]} alt="" />
          </div>
          <div className={styles.body}>
            <h2
              className={styles.title}
              onClick={() => {
                navigate(`job/${id}`);
              }}
            >
              {title}
            </h2>
            <div className={styles.info}>{name}</div>
            <div className={styles.address}>
              <FaMapMarkerAlt />
              {address}
            </div>
          </div>
        </div>
        <div className={styles.controls}>
          <div className={styles.save}>
            <FaRegBookmark className={styles.icon} />
            {/* <p className={styles.time}>Posted {calcDate()} days ago</p> */}
            <JobDate createdAt={createdAt}></JobDate>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobItem;
