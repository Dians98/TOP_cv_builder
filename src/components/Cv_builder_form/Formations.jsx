import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import { Box, Button, Modal, Snackbar, Typography } from "@mui/material";
import Input from "./Input/Input";
import { useState } from "react";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import { TextField } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import SaveBtnModal from "./SaveBtnModal";
import ModalInput from "./modalInput";
export default function Formations({ formations, onChange, onDelete }) {
  return (
    <>
      <Box
        className="formations_container"
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
          <SchoolOutlinedIcon />
          Formations
        </Typography>
      </Box>
      <FormationList
        formations={formations}
        onChange={onChange}
        onDelete={onDelete}
      />
    </>
  );
}

function FormationList({ formations, onChange, onDelete }) {
  const [DisplaySnackBar, setDisplaySnackBar] = useState(false);

  const handleDeleteFormationItem = (index) => {
    onDelete(index);
    setDisplaySnackBar(true);
  };

  const handleHideSnackBar = () => {
    setDisplaySnackBar(false);
  };

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
        {formations.map((formation, index) => (
          <FormationItem
            formation={formation}
            key={index}
            index={index}
            onChange={onChange}
            onDelete={handleDeleteFormationItem}
          />
        ))}
        <Snackbar
          open={DisplaySnackBar}
          autoHideDuration={1000}
          onClose={handleHideSnackBar}
          message="La formation a bien été suprimée"
        />
      </Box>
    </>
  );
}

function FormationItem({ formation, onChange, index, onDelete }) {
  const [IsModalOpened, setIsModalOpened] = useState(false);

  const handleOpen = () => {
    setIsModalOpened(true);
  };

  const handleClose = () => {
    setIsModalOpened(false);
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
          onClick={handleOpen}
        >
          <Typography variant="body2">{formation.degree}</Typography>
          <DeleteOutlineOutlinedIcon
            className="iconColor"
            onClick={(e) => {
              e.stopPropagation();
              onDelete(index);
            }}
          />
        </Box>

        <FormationModal
          formation={formation}
          open={IsModalOpened}
          handleClose={handleClose}
          onChange={onChange}
          index={index}
        />
      </Box>
    </>
  );
}

function FormationModal({ formation, handleClose, open, onChange, index }) {
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
          index={index}
          handleClose={handleClose}
        />
      </Box>
    </Modal>
  );
}


