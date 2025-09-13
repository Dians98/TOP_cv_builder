import { Box, Button, Modal, Typography } from "@mui/material";
import Input from "./Input/Input";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import { useState } from "react";
import { TextField } from "@mui/material";
import ModalInput from "./modalInput";
import SaveBtnModal from "./SaveBtnModal";

export default function ExperienceModal({
  open,
  close,
  experience,
  onChange,
  index,
}) {
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
          <Box className="experience_modal_year">
            <ModalInput
              label="Début"
              value={modalExperience.year_start}
              onChange={(updatedModalExperience) => {
                handleExperienceInputChange(updatedModalExperience);
              }}
              name="year_start"
            />
            <ModalInput
              label="Fin"
              value={modalExperience.year_end}
              onChange={(updatedModalExperience) => {
                handleExperienceInputChange(updatedModalExperience);
              }}
              name="year_end"
            />
          </Box>
          <Box className="experience_modal_position">
            <ModalInput
              label="Position"
              value={modalExperience.profil}
              onChange={(updatedModalExperience) => {
                handleExperienceInputChange(updatedModalExperience);
              }}
              name="profil"
            />
          </Box>
          <Box className="experience_modal_description">
            <ModalInput
              label="Description"
              value={modalExperience.description}
              onChange={(updatedModalExperience) => {
                handleExperienceInputChange(updatedModalExperience);
              }}
              name="description"
              type="txtfield"
            />
          </Box>
          <Box>
            <SaveBtnModal
              onChange={onChange}
              modalObj={modalExperience}
              index={index}
              handleClose={close}
            />
          </Box>
        </Box>
      </Modal>
    </>
  );
}
