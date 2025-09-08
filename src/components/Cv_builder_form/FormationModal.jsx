import { Box, Button, Modal, Typography } from "@mui/material";
import Input from "./Input/Input";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import { useState } from "react";
import { TextField } from "@mui/material";

export default function FormationModal({
  formation,
  handleClose,
  open,
  onChange,
  index,
}) {
  const [modalFormation, setModalFormation] = useState({ ...formation });

  const handleInputChange = (updatedModalFormation) => {
    setModalFormation((prev) => ({ ...prev, ...updatedModalFormation }));
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
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
        }}
        className="Formation_detail_modal_container"
      >
        <Typography variant="h5"> Formation Details</Typography>
        <Box
          className="Formation_detail_modal_container_date"
          sx={{
            display: "flex",
            gap: "1rem",
          }}
        >
          <FormationModalInput
            name="year_start"
            label="De"
            value={modalFormation.year_start}
            onChange={(updatedModalFormation) =>
              handleInputChange(updatedModalFormation)
            }
          />
          <FormationModalInput
            label="A"
            name="year_end"
            value={modalFormation.year_end}
            onChange={(updatedModalFormation) =>
              handleInputChange(updatedModalFormation)
            }
          />
        </Box>
        <FormationModalInput
          label="Degree"
          name="degree"
          value={modalFormation.degree}
          onChange={(updatedModalFormation) =>
            handleInputChange(updatedModalFormation)
          }
        />
        <FormationModalInput
          label="University"
          name="university"
          value={modalFormation.university}
          onChange={(updatedModalFormation) =>
            handleInputChange(updatedModalFormation)
          }
        />
        <SaveButtonModal
          onChange={onChange}
          modalFormation={modalFormation}
          index={index}
          handleClose={handleClose}
        />
      </Box>
    </Modal>
  );
}

function SaveButtonModal({ onChange, modalFormation, index, handleClose }) {
  return (
    <Button
      variant="outlined"
      sx={{
        color: "#00E6BD",
        borderColor: "#00E6BD",
        width: "5rem",
        display: "flex",
        gap: "0.25rem",
      }}
      onClick={() => {
        onChange(modalFormation, index);
        handleClose();
      }}
    >
      <SaveAsIcon /> Save
    </Button>
  );
}

function FormationModalInput({ label, value, onChange, name }) {
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
