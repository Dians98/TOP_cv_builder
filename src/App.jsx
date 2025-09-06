import { useState } from "react";
import Cv_header from "./components/cv_preview/Cv_header";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Formations from "./components/Cv_preview/Formations";
import PersonalDetails from "./components/cv_builder_form/PersonalDetails";

export default function App() {
  const [resume, setResume] = useState({
    personal_details: {
      full_name: "Diano ANDRIANTSALAMA",
      position: "Junior Developer",
      email: "diano.faniry@gmail.com",
      phone: "+230 55198539",
    },
    formations: [
      {
        year_start: "2021",
        year_end: "2022",
        degree: "Licence Professionnelle en Humanités Numériques",
        university: "Université Des Mascareignes – Pamplemousses - Mauritius",
      },
      {
        year_start: "2019",
        year_end: "2020",
        degree: "Licence en Informatique-Electronique",
        university: "Université Privée ACEEM – Antananarivo – Madagascar",
      },
      {
        year_start: "2016",
        year_end: "",
        degree: "Baccalauréat Série Scientifique",
        university:
          "Collège la Lumière Internationale – Antananarivo – Madagascar",
      },
    ],
  });

  const handlePersonalDetailsChange = (updatedPersonalDetails) => {
    setResume((prev) => ({
      ...prev,
      personal_details: {
        ...prev.personal_details, // garde les autres champs
        ...updatedPersonalDetails,
      },
    }));
  };

  return (
    <>
      <Container maxWidth="lg">
        <Box
          className="app"
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" }, // column sur mobile, row sur desktop
            gap: 4, // espace entre les colonnes
            p: 2, // padding intérieur
          }}
        >
          {/* Form Builder */}
          <Box
            className="form_builder"
            sx={{
              display: "flex",
              width: "35%",
            }}
          >
            <PersonalDetails
              personal_details={resume.personal_details}
              onChange={handlePersonalDetailsChange}
            />
          </Box>

          <Box
            className="cv_preview"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
              borderRadius: "1rem",
              padding: "2rem",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              flex: 1,
            }}
          >
            <Cv_header resume={resume} />
            <Formations resume={resume} />
          </Box>
        </Box>
      </Container>
    </>
  );
}
