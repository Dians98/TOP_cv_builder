import { Box, Typography } from "@mui/material";
import InputTxtArea from "./Input/InputTxtArea";
import PersonPinOutlinedIcon from '@mui/icons-material/PersonPinOutlined';

export default function APropos({ onChange, aPropos }) {
  return (
    <>
      <Box
        className="personal_details_container"
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          backgroundColor: "#f5f5f5",
          padding: "1rem 2rem",
          borderRadius: "1rem",
          gap:"1rem"
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
          <PersonPinOutlinedIcon />
          About
        </Typography>
        <InputTxtArea
          onChange={(e) => onChange(e.target.value)}
          value={aPropos}
          label="About"
        />
      </Box>
    </>
  );
}
