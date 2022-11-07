import React, { useEffect, useState } from "react";
import JobItem from "../../components/JobItem";

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("https://api.json-generator.com/templates/ZM1r0eic3XEy/data", {
      headers: {
        Authorization: "Bearer wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu",
      },
    })
      .then((data) => data.json())
      .then((response) => setJobs(response));
  }, []);

  return (
    <div className="bg-bgDesc pt-5 pb-16">
      <div className="container">
        <div className="flex flex-col gap-2">
          {jobs.length
            ? jobs.map((job) => <JobItem {...job} key={job.id} />)
            : null}
        </div>
      </div>
    </div>
  );
};

export default JobList;
