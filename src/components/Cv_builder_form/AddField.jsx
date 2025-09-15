import { Box, Typography } from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import FormationModal from "./FormationModal";
import { useState } from "react";
import ExperienceModal from "./ExperienceModal";

export default function AddField({ type, onAdd }) {
  const [openAddFieldModal, setOpenAddFieldModal] = useState(false);

  const handleOpenAddFieldModal = () => {
    setOpenAddFieldModal(true);
  };
  const handleCloseAddFieldModal = () => {
    setOpenAddFieldModal(false);
  };

  return (
    <Box className="add_item_container">
      <Box className="add_item" onClick={handleOpenAddFieldModal}>
        <Typography
          variant="body2"
          sx={{
            display: "flex",
            alignContent: "center",
            alignItems: "center",
            gap: "0.25rem",
            color: "#00E6BD",
          }}
        >
          <AddCircleOutlineOutlinedIcon />
          Ajouter
        </Typography>
      </Box>

      {type === "formations" && (
        <FormationModal
          open={openAddFieldModal}
          handleClose={handleCloseAddFieldModal}
          onAdd={onAdd}
        />
      )}

      {type === "experiences" && (
        <ExperienceModal
          open={openAddFieldModal}
          handleClose={handleCloseAddFieldModal}
          onAdd={onAdd}
        />
      )}
    </Box>
  );
}
