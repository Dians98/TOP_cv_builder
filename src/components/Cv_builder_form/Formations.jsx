import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import { Box, Button, Modal, Snackbar, Typography } from "@mui/material";
import Input from "./Input/Input";
import { useState } from "react";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import { TextField } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import SaveBtnModal from "./SaveBtnModal";
import ModalInput from "./modalInput";
import FormationModal from "./FormationModal";

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
        {formations.map((formation) => (
          <FormationItem
            formation={formation}
            key={formation.id}
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

function FormationItem({ formation, onChange, onDelete }) {
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
              onDelete(formation.id);
            }}
          />
        </Box>

        <FormationModal
          formation={formation}
          open={IsModalOpened}
          handleClose={handleClose}
          onChange={onChange}
        />
      </Box>
    </>
  );
}
