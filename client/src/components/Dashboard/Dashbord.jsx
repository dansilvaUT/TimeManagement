import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Heading from "../Heading";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import ButtonComp from "../Button/ButtonComp";
import Time from "./Times/Time/Time";
import axios from "axios";
import "./Dashboard.scss";

const Dashbord = () => {
  const [tasks, setTasks] = useState([]);
  const [openModal, setModalOpen] = useState(false);
  const [task, setTask] = useState({});

  useEffect(() => {
    axios
      .get("/api/get_user_tasks")
      .then((fetchedTasks) => setTasks(fetchedTasks.data.tasks));
  }, []);

  const modalButton = (taskID) => {
    setModalOpen(!openModal);
    setTask(taskID);
  };

  const handleDisplay = () => {
    if (tasks.length > 0) {
      return (
        <TableContainer className="Dashboard-Table">
          <Table aria-label="customized table">
            <TableHead className="Table-Head">
              <TableRow>
                <TableCell className="Table-Header" alight="left">
                  Project
                </TableCell>
                <TableCell className="Table-Header" align="left">
                  Description
                </TableCell>
                <TableCell className="Table-Header" align="left">
                  Start Time
                </TableCell>
                <TableCell className="Table-Header" align="left">
                  End Time
                </TableCell>
                <TableCell className="Table-Header" align="left">
                  Time Spent
                </TableCell>
                <TableCell className="Table-Header" align="left">
                  Edits
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tasks.map((task) => (
                <TableRow key={task.id} className="Table-Row-Data">
                  <TableCell className="Table-Data" align="left">
                    {task.title}
                  </TableCell>
                  <TableCell className="Table-Data" align="left">
                    {task.description}
                  </TableCell>
                  <TableCell className="Table-Data" align="left">
                    {task.start_time}
                  </TableCell>
                  <TableCell className="Table-Data" align="left">
                    {task.end_time}
                  </TableCell>
                  <TableCell className="Table-Data" align="left">
                    {task.id}
                  </TableCell>
                  <TableCell className="Table-Data" alight="left">
                    <ButtonComp
                      text="Edit"
                      type="submit"
                      classname="Dashboard-Button"
                      func={() => modalButton(task.id)}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
    } else {
      return <Heading type="h3" text="Currently you have no tasks" />;
    }
  };
  return (
    <>
      <Navbar />
      <section className="Dashboard-container">
        <Heading type="h2" text="My Times" />
        {handleDisplay()}
        <Time open={openModal} funcHandler={modalButton} taskID={task} />
      </section>
    </>
  );
};

export default Dashbord;
