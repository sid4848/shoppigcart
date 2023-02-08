import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const Dash = () => {
  const classes = useStyles();
  const meetings = [
    {
      id: 1,
      title: "Meeting 1",
      description: "This is a test meeting",
      startTime: "10:00 AM",
      endTime: "11:00 AM",
    },
    {
      id: 2,
      title: "Meeting 2",
      description: "This is another test meeting",
      startTime: "11:00 AM",
      endTime: "12:00 PM",
    },
  ];

  const handleAddMeeting = () => {
    // Implement logic to add a new meeting
  };

  const handleDeleteMeeting = (id) => {
    // Implement logic to delete a meeting
  };

  const handleUpdateMeeting = (id) => {
    // Implement logic to update a meeting
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {meetings.map((meeting) => (
          <Grid item xs={12} sm={6} key={meeting.id}>
            <Paper className={classes.paper}>
              <Typography variant="h5">{meeting.title}</Typography>
              <Typography variant="subtitle1">{meeting.description}</Typography>
              <Typography variant="subtitle2">
                {meeting.startTime} - {meeting.endTime}
              </Typography>
              <br />
              <button onClick={() => handleUpdateMeeting(meeting.id)}>
                Update
              </button>
              <button onClick={() => handleDeleteMeeting(meeting.id)}>
                Delete
              </button>
            </Paper>
          </Grid>
        ))}
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <Typography variant="h5">Add a Meeting</Typography>
            <button onClick={handleAddMeeting}>Add</button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dash;
