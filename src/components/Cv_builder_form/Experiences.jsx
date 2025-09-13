import WorkHistoryOutlinedIcon from "@mui/icons-material/WorkHistoryOutlined";
import { Box, Button, Modal, Snackbar, Typography } from "@mui/material";
import Input from "./Input/Input";
import { useState } from "react";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import { TextField } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

export default function Experiences({ experiences, onDelete }) {
  return (
    <>
      <Box
        className="experiences_container"
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          backgroundColor: "#f5f5f5",
          padding: "1rem 2rem",
          borderRadius: "1rem",
        }}
      >
        <Typography
          variant="h6"
          fontWeight="bold"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <WorkHistoryOutlinedIcon />
          Experiences
        </Typography>
      </Box>
      <ExperiencesList experiences={experiences} onDelete={onDelete} />
    </>
  );
}

function ExperiencesList({ experiences, onDelete }) {
  return (
    <>
      <Box
        className="formations_list_container"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
        }}
      >
        {experiences.map((experience, index) => (
          <ExperienceItem
            experience={experience}
            index={index}
            onDelete={onDelete}
          />
        ))}
      </Box>
    </>
  );
}

function ExperienceItem({ experience, index, onDelete }) {
  return (
    <>
      <Box className="formation_item_container">
        <Box
          className="formation_item"
          sx={{
            borderRadius: "1rem",
            padding: "1rem",
            cursor: "pointer",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.25)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="body2">{experience.company}</Typography>
          <DeleteOutlineOutlinedIcon
            className="iconColor"
            onClick={(e) => {
              e.stopPropagation();
              onDelete(index);
            }}
          />
        </Box>
      </Box>
    </>
  );
}
