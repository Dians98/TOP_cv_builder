import { Box, Button, Modal, Typography } from "@mui/material";
import Input from "./Input/Input";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import { useState } from "react";
import { TextField } from "@mui/material";

import ModalInput from "./modalInput";
import SaveBtnModal from "./SaveBtnModal";

export default function FormationModal({
  formation = null,
  handleClose,
  open,
  onChange = null,
  onAdd= null
}) {
  const [modalFormation, setModalFormation] = useState({
    id: formation?.id || crypto.randomUUID(),
    year_start: formation?.year_start || "",
    year_end: formation?.year_end || "",
    degree: formation?.degree || "",
    university: formation?.university || "",
  });

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
          <ModalInput
            name="year_start"
            label="De"
            value={modalFormation.year_start}
            onChange={(updatedModalFormation) =>
              handleInputChange(updatedModalFormation)
            }
          />
          <ModalInput
            label="A"
            name="year_end"
            value={modalFormation.year_end}
            onChange={(updatedModalFormation) =>
              handleInputChange(updatedModalFormation)
            }
          />
        </Box>
        <ModalInput
          label="Degree"
          name="degree"
          value={modalFormation.degree}
          onChange={(updatedModalFormation) =>
            handleInputChange(updatedModalFormation)
          }
        />
        <ModalInput
          label="University"
          name="university"
          value={modalFormation.university}
          onChange={(updatedModalFormation) =>
            handleInputChange(updatedModalFormation)
          }
        />
        <SaveBtnModal
          onChange={onChange}
          modalObj={modalFormation}
          id={modalFormation.id}
          handleClose={handleClose}
          onAdd={onAdd}
        />
      </Box>
    </Modal>
  );
}
