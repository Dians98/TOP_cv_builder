import { Box, Typography } from "@mui/material";

export default function CvApropos({ aPropos }) {
  return (
    <>
      <Box className="cv_aPropos_container" 
      sx={{
        display:"flex",
        flexDirection:"column",
        gap:"1rem"
      }}>
        <Box
          className="cv_aPropos_header"
          sx={{
            borderBottom: "1px solid #00E6BD",
          }}
        >
          <Typography variant="h6" fontWeight="bold" sx={{ color: "#00E6BD" }}>
            A PROPOS
          </Typography>
        </Box>
        <Typography variant="body2" fontWeight="bold" >
          {aPropos}
        </Typography>
      </Box>
    </>
  );
}
