import Avatar from "@mui/material/Avatar";
import AvatarDefault from "../../assets/img/avatar_default.jpg";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Cv_header({ resume }) {
  return (
    <Box
      className="cv_header"
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <Box
        className="cv_header_personal_details"
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          gap: "0.35rem",
          textAlign: "end",
        }}
      >
        <Typography variant="body" fontWeight="bold">
          {resume.personal_details.full_name}
        </Typography>
        <Typography variant="body1" fontWeight="bold">
          {resume.personal_details.email}
        </Typography>
        <Typography variant="body1" fontWeight="bold">
          {resume.personal_details.phone}
        </Typography>
        <Typography variant="body1" fontWeight="bold">
          {resume.personal_details.position}
        </Typography>
      </Box>

      <Box className="cv_header_avatar">
        <Avatar
          alt={resume.personal_details.full_name}
          src={AvatarDefault}
          sx={{ width: 150, height: 150 }}
        />
      </Box>
    </Box>
    /* 
        <div className="cv_header">
            <div className="cv_header_personal_details">
                <p  className="bold">{resume.personal_details.full_name}</p>
                <p className="bold">{resume.personal_details.email}</p>
                <p className="bold">{resume.personal_details.phone}</p>
                <p className="bold">{resume.personal_details.position}</p>
            </div>
            <div className="cv_header_avatar">
                <Avatar
                alt={resume.personal_details.full_name}
                src={AvatarDefault}
                sx={{ width: 150, height: 150 }}
                />
            </div>
        </div>
  
  */
  );
}
