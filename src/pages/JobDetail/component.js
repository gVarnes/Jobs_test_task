import React, { useEffect, useState, useRef } from "react";
import styles from "./index.module.scss";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import parse, { domToReact } from "html-react-parser";
import contacts from "./Contacts.png";

import cx from "classnames";

import { FaShareAlt, FaRegBookmark } from "react-icons/fa";
import Button from "../../components/Button/component";
import JobDate from "../../components/JobDate/component";

const JobDetail = () => {
  const [job, setJob] = useState({});
  const { id } = useParams();
  const idRef = useRef(null);

  useEffect(() => {
    fetch("https://api.json-generator.com/templates/ZM1r0eic3XEy/data", {
      headers: {
        Authorization: "Bearer wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu",
      },
    })
      .then((data) => data.json())
      .then((res) => setJob(res.filter((job) => job.id === id)));
  }, []);

  useEffect(() => {
    console.log(idRef.current);
    console.log(job);
    const id = document.querySelector("id");
    idRef.current.innerText = job[0]?.description;
  }, [job]);

  return (
    <div className="bg-white text-txtHeading pt-6 md:pt-14">
      <div className="container">
        <div className={styles.body}>
          <div className={styles.detail}>
            <div className={styles.header}>
              <div className={styles.subtitle}>Job Details</div>
              <div className={styles.controls}>
                <div className={styles.save}>
                  <FaRegBookmark />
                  <span>Save to my list</span>
                </div>
                <div className={styles.share}>
                  <FaShareAlt />
                  <span>Share</span>
                </div>
              </div>
            </div>

            <article className={styles.article}>
              <div className={`${styles.buttons} hidden md:block`}>
                <Button>Apply now</Button>
              </div>
              <div className={styles["article-header"]}>
                <div className={styles["article-title"]}>{job[0]?.title}</div>
                <div className={styles["article-salary"]}>{job[0]?.salary}</div>
                <JobDate createdAt={job[0]?.createdAt}></JobDate>
              </div>
              <div className={styles.content} ref={idRef}></div>
            </article>
            <div className={styles.buttons}>
              <Button>Apply now</Button>
            </div>
            <div className={styles.additional}>
              <h3 className={styles["additional-title"]}>Additional info</h3>
              <h4 className={styles["additional-subtitle"]}>Employment type</h4>
              <ul className={styles.list}>
                {job[0]?.employment_type.map((item) => (
                  <li className={styles["list-item"]} key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.additional}>
              <h4 className={styles["additional-subtitle"]}>Benefits</h4>
              <ul className={styles.list}>
                {job[0]?.benefits.map((item) => (
                  <li
                    className={`${styles["list-item"]} ${styles.light}`}
                    key={item}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.additional}>
              <h3 className={styles["additional-title"]}>Attached images</h3>
              <div className={styles["additional-images"]}>
                {job[0]?.pictures.map((pic) => (
                  <img src={pic} className={styles["additional-img"]} />
                ))}
              </div>
            </div>
          </div>
          <div className={styles.contacts}>
            <h3 className={styles["contacts-title"]}>Contacts</h3>

            <div className={`${styles["contacts-map"]}`}>
              <img src={contacts} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
