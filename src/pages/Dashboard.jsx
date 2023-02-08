import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto",
  },
  table: {
    minWidth: 650,
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  const [meetings, setMeetings] = useState([
    {
      id: 1,
      title: "Team Meeting",
      description: "Discuss project progress and plan next steps",
      startTime: "2023-02-06 10:00:00",
      endTime: "2023-02-06 11:00:00",
    },
    {
      id: 2,
      title: "Manager Call",
      description: "Check in with client on project status",
      startTime: "2023-02-07 14:00:00",
      endTime: "2023-02-07 15:00:00",
    },
    {
      id: 3,
      title: "Owner Call",
      description: "Check in with client on project status",
      startTime: "2023-02-07 14:00:00",
      endTime: "2023-02-07 15:00:00",
    },
    {
      id: 4,
      title: "Marketer Call",
      description: "Check in with client on project status",
      startTime: "2023-02-07 14:00:00",
      endTime: "2023-02-07 15:00:00",
    },
    {
      id: 5,
      title: "Office Call",
      description: "Check in with client on project status",
      startTime: "2023-02-07 14:00:00",
      endTime: "2023-02-07 15:00:00",
    },
    {
      id: 6,
      title: "Company Call",
      description: "Check in with client on project status",
      startTime: "2023-02-07 14:00:00",
      endTime: "2023-02-07 15:00:00",
    },
  ]);

  const handleAddMeeting = () => {
    setMeetings([
      ...meetings,
      {
        id: meetings.length + 1,
        title: "Company Call",
        description: "Check in with client on project status",
        startTime: "2023-02-07 14:00:00",
        endTime: "2023-02-07 15:00:00",
      },
    ]);
  };

  const handleDeleteMeeting = (id) => {
    setMeetings(meetings.filter((meeting) => meeting.id !== id));
  };

  const handleUpdateMeeting = (id, updatedMeeting) => {
    setMeetings(
      meetings.map((meeting) =>
        meeting.id === id ? { ...meeting, ...updatedMeeting } : meeting
      )
    );
  };

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Start Time</TableCell>
            <TableCell>End Time</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {meetings.map((meeting) => (
            <TableRow key={meeting.id}>
              <TableCell>{meeting.title}</TableCell>
              <TableCell>{meeting.description}</TableCell>
              <TableCell>{meeting.startTime}</TableCell>
              <TableCell>{meeting.endTime}</TableCell>
              <TableCell>
                <Button onClick={() => handleUpdateMeeting(meeting.id)}>
                  Update
                </Button>
                <Button onClick={() => handleDeleteMeeting(meeting.id)}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button onClick={handleAddMeeting}>Add Meeting</Button>
    </Paper>
  );
};

export default Dashboard;
