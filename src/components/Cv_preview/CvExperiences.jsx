import Avatar from "@mui/material/Avatar";
import AvatarDefault from "../../assets/img/avatar_default.jpg";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function CvExperiences({ experiences }) {
  return (
    <>
      <Box className="cv_experiences_container" sx={{}}>
        <Box
          className="cv_experiences_header"
          sx={{
            borderBottom: "1px solid #00E6BD",
          }}
        >
          <Typography variant="h6" fontWeight="bold" sx={{ color: "#00E6BD" }}>
            EXPERIENCES
          </Typography>
        </Box>
        <CvExperiencesList experiences={experiences} />
      </Box>
    </>
  );
}

function CvExperiencesList({ experiences }) {
  return (
    <Box className="cv_experiences_list_container">
      {experiences.map((experience, index) => (
        <CvExperiencesItem experience={experience} index={index} />
      ))}
    </Box>
  );
}

function CvExperiencesItem({ experience, index }) {
  return (
    <Box className="cv_experiences_item">
      <Box className="cv_experiences_item_company">
        <Box className="cv_experiences_item_company_date">
          <Typography variant="body2" className="bold">
            {experience.year_start +
              (experience.year_end ? " - " + experience.year_end : "")}
          </Typography>
        </Box>
        <Box className="cv_experiences_item_company_value">
          <Typography variant="body2" className="bold">
            {experience.company}
          </Typography>
          <Typography variant="body2">{experience.profil}</Typography>
        </Box>
      </Box>

      <Box className="cv_experiences_item_desc">
        <Box className="cv_experiences_item_desc_txt">
          <Typography variant="body2" className="bold">
            Description
          </Typography>
        </Box>
        <Box className="cv_experiences_item_desc_value">
          <Typography variant="body2">{experience.description}</Typography>
        </Box>
      </Box>
    </Box>
  );
}
