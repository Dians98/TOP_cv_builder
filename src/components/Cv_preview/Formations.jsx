import Avatar from "@mui/material/Avatar";
import AvatarDefault from "../../assets/img/avatar_default.jpg";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Formations({ resume }) {
  return (
    <>
      <Box className="cv_formations_container">
        <Box
          className="cv_formations_header"
          sx={{
            borderBottom: "1px solid #00E6BD",
          }}
        >
          <Typography variant="h6" fontWeight="bold" sx={{ color: "#00E6BD" }}>
            FORMATIONS
          </Typography>
        </Box>
        <FormationsListContainer formations={resume.formations} />
      </Box>
    </>
  );
}

function FormationsListContainer({ formations }) {
  return (
    <Box
      className="cv_formation_list_container"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        mt: "1rem",
        mb: "1rem",
      }}
    >
      {formations.map((formation, index) => (
        <FormationItem key={index} formation={formation} />
      ))}
    </Box>
  );
}

function FormationItem({ formation }) {
  return (
    <Box
      className="cv_formation_item"
      sx={{ display: "flex", gap: "1rem", alignItems: "center" }}
    >
      <Box
        className="cv_formation_item_years"
        sx={{
          display: "flex",
          width: "20%",
        }}
      >
        <Typography variant="body2"> {formation.year_start}&nbsp;</Typography>
        {formation.year_end && (
          <Typography variant="body2">-&nbsp;{formation.year_end}</Typography>
        )}
      </Box>
      <Box
        className="cv_formation_item_details"
        sx={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
        }}
      >
        <Box className="cv_formation_item_details_degree">
          <Typography variant="body2" className="bold">{formation.degree}</Typography>
        </Box>
        <Box className="cv_formation_item_details_university">
        <Typography variant="body2">{formation.university}</Typography>
        </Box>
      </Box>
    </Box>
  );
}
