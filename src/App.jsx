import { useState } from "react";
import Cv_header from "./components/cv_preview/Cv_header";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
export default function App() {
  const [resume, setResume] = useState({
    personal_details: {
      full_name: "Diano ANDRIANTSALAMA",
      position: "Junior Developer",
      email: "diano.faniry@gmail.com",
      phone: "+230 55198539",
    },
  });

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
          <Box className="form_builder" sx={{ flex: 1, p: 2 }}>
            {/* Ton formulaire ici */}
          </Box>

          {/* CV Preview */}
          <Box className="cv_preview" sx={{ flex: 1, p: 2 }}>
            <Cv_header resume={resume} />
            
          </Box>
        </Box>
      </Container>
    </>
  );
}
