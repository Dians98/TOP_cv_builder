import WorkHistoryOutlinedIcon from "@mui/icons-material/WorkHistoryOutlined";
import { Box, Button, Modal, Snackbar, Typography } from "@mui/material";
import Input from "./Input/Input";
import { useState } from "react";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import { TextField } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ExperienceModal from "./ExperienceModal";

export default function Experiences({ experiences, onDelete, onChange }) {
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
      <ExperiencesList
        experiences={experiences}
        onDelete={onDelete}
        onChange={onChange}
      />
    </>
  );
}

function ExperiencesList({ experiences, onDelete, onChange }) {
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
            onDelete={onDelete}
            key={experience.id}
            onChange={onChange}
            index={index}
          />
        ))}
      </Box>
    </>
  );
}

function ExperienceItem({ experience, onDelete, onChange }) {
  const [openExperienceModal, setOpenExperienceModal] = useState(false);

  const handleOpenExperienceModal = () => {
    setOpenExperienceModal(true);
  };

  const handleCloseExperienceModal = () => {
    setOpenExperienceModal(false);
  };

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
          onClick={handleOpenExperienceModal}
        >
          <Typography variant="body2">{experience.company}</Typography>
          <DeleteOutlineOutlinedIcon
            className="iconColor"
            onClick={(e) => {
              alert(experience.id);
              e.stopPropagation();
              onDelete(experience.id);
            }}
          />
        </Box>
      </Box>
      <ExperienceModal
        open={openExperienceModal}
        close={handleCloseExperienceModal}
        experience={experience}
        onChange={onChange}
      />
    </>
  );
}
