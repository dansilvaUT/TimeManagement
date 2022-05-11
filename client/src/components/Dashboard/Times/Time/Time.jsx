import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import "./Time.scss";
import Container from "@mui/material/Container";
import Heading from "../../../Heading";
import axios from "axios";

const Time = ({ open, funcHandler, taskID }) => {
  const [task, setTask] = useState({});
  useEffect(() => {
    axios
      .get(`/api/task/get_task/${taskID}`)
      .then((res) => setTask(res.data.task))
      .then((err) => console.log(err));
  }, [taskID, open]);

  return (
    <Modal open={open} onClose={funcHandler}>
      <Container fixed className="Time-Container">
        <Heading type="h3" text={task.title} />
        <p>Date Created: {task.created_at}</p>
        <p>Start Time: {task.start_time}</p>
        <p>End Time: {task.end_time}</p>
        <p>{task.description}</p>
      </Container>
    </Modal>
  );
};

export default Time;
