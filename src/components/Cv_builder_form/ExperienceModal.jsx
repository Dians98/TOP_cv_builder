import { Box, Button, Modal, Typography } from "@mui/material";
import Input from "./Input/Input";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import { useState } from "react";
import { TextField } from "@mui/material";

export default function ExperienceModal({ open, close, experience, onChange }) {
  const [modalExperience, setModalExperience] = useState({ ...experience });

  const handleExperienceInputChange = (updatedModalExperience) => {
    setModalExperience((prev) => ({
      ...prev,
      ...updatedModalExperience,
    }));
  };

  return (
    <>
      <Modal
        open={open}
        onClose={close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "50%",
            backgroundColor: "white",
            padding: "2rem 3rem",
            borderRadius: "1rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            border: "none",
          }}
          className="Formation_detail_modal_container"
        >
          <ExperienceModalInput
            label="Début"
            value={modalExperience.year_start}
            onChange={(updatedModalExperience) => {
              handleExperienceInputChange(updatedModalExperience);
            }}
            name="year_start"
          />
        </Box>
      </Modal>
    </>
  );
}

function ExperienceModalInput({ label, value, onChange, name }) {
  return (
    <TextField
      label={label}
      value={value}
      onChange={(e) => {
        onChange({ [name]: e.target.value });
      }}
      sx={{
        "& .MuiOutlinedInput-root": {
          backgroundColor: "white",
          "&.Mui-focused fieldset": {
            borderColor: "#00E6BD", // couleur de la bordure au focus
          },
        },
        "& label.Mui-focused": {
          color: "#00E6BD", // couleur du label au focus
        },
      }}
      variant="outlined"
      fullWidth
      margin="normal"
    />
  );
}


