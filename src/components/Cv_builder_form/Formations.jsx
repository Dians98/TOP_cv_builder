import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Input from "./Input/Input";
import { useState } from "react";
import FormationModal from "./FormationModal";

export default function Formations({ formations, onChange }) {
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
      <FormationList formations={formations} onChange={onChange} />
    </>
  );
}

function FormationList({ formations, onChange }) {
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
          />
        ))}
      </Box>
    </>
  );
}

function FormationItem({ formation, onChange, index }) {
  const [IsModalOpened, setIsModalOpened] = useState(false);

  const handleOpen = () => {
    setIsModalOpened(true);
  };

  const handleClose = () => {
    setIsModalOpened(false);
  };

  return (
    <>
      <Box
        className="formation_item_container"
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          className="formation_item"
          sx={{
            borderRadius: "1rem",
            padding: "1rem",
            cursor: "pointer",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.25)",
          }}
          onClick={handleOpen}
        >
          <Typography variant="body2">{formation.degree}</Typography>
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
