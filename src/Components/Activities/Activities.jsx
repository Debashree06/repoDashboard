import React from "react";
import { FaPlus } from "react-icons/fa";
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  Box,
} from "@mui/material";

const activities = [
  {
    avatar: "/assets/img/profiles/avatar-01.jpg",
    name: "Lesley Grauer",
    action: "added new task",
    task: "Hospital Administration",
    time: "4 mins ago",
  },
  {
    avatar: "/assets/img/profiles/avatar-16.jpg",
    name: "Jeffery Lalor",
    action: "added",
    additional: [{ name: "Loren Gatlin" }, { name: "Tarah Shropshire" }],
    task: "Patient appointment booking",
    time: "6 mins ago",
  },
  {
    avatar: "/assets/img/profiles/avatar-08.jpg",
    name: "Catherine Manseau",
    action: "completed task",
    task: "Appointment booking with payment gateway",
    time: "12 mins ago",
  },
  {
    avatar: "/assets/img/profiles/avatar-13.jpg",
    name: "Bernardo Galaviz",
    action: "changed the task name",
    task: "Doctor available module",
    time: "1 day ago",
  },
  {
    avatar: "/assets/img/profiles/avatar-05.jpg",
    name: "Mike Litorus",
    action: "added new task",
    task: "Patient and Doctor video conferencing",
    time: "2 days ago",
  },
  {
    avatar: "/assets/img/profiles/avatar-16.jpg",
    name: "Jeffery Lalor",
    action: "added",
    additional: [{ name: "Jeffrey Warden" }, { name: "Bernardo Galaviz" }],
    task: "Private chat module",
    time: "7 days ago",
  },
];

const Activities =()=> {
  return (
    <>
      <div className="p-4 bg-gray-100 min-h-screen">
        {/* Harder section */}
        <div className="rounded-md flex justify-between p-4 mb-6 border-solid flex-wrap gap-4">
          <h6 className="text-2xl font-semibold text-gray-700">
            Activities
            <div className="text-[14px]">
              <p>Dashboard / Activities</p>
            </div>
          </h6>
        </div>
        {/* Activities Section */}

        <Box sx={{ bgcolor: "#f9f9f9", minHeight: "100vh", p: 3 }}>
  <List sx={{ bgcolor: "white", borderRadius: 2, boxShadow: 2, maxWidth: 1800, margin: "0 auto" }}>
    {activities.map((activity, index) => (
      <ListItem
        key={index}
        alignItems="flex-start"
        sx={{
          borderBottom: "1px solid #eee",
          p: 2,
          "&:hover": { backgroundColor: "#b17f27", cursor: "pointer" },
          transition: "background-color 0.3s ease",
        }}
      >
        <ListItemAvatar>
          <Avatar
            alt={activity.name}
            src={activity.avatar}
            sx={{ border: "2px solid #b17f27", boxShadow: 2 }}
          />
        </ListItemAvatar>
        <ListItemText
          primary={
            <Typography variant="body1" fontWeight="bold">
              {activity.name}{" "}
              <span style={{ fontWeight: 400 }}>{activity.action}</span>{" "}
              <Typography
                component="span"
                variant="body1"
                color="primary"
                sx={{
                  fontWeight: "bold",
                  cursor: "pointer",
                  textDecoration: "underline",
                  ":hover": { color: "#F9F9F9" },
                }}
              >
                {activity.task}
              </Typography>
            </Typography>
          }
          secondary={
            <>
              {activity.additional && (
                <Typography component="span" color="text.secondary">
                  with{" "}
                  {activity.additional.map((person, i) => (
                    <Typography
                      key={i}
                      component="span"
                      color="primary"
                      sx={{
                        fontWeight: "bold",
                        cursor: "pointer",
                        marginRight: 0.5,
                        ":hover": { color: "#F9F9F9" },
                      }}
                    >
                      {person.name}
                    </Typography>
                  ))}
                </Typography>
              )}
              <Typography variant="caption" color="text.secondary">
                {activity.time}
              </Typography>
            </>
          }
        />
      </ListItem>
    ))}
  </List>
</Box>
      </div>
    </>
  );
}

export default Activities;
