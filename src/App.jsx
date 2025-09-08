import { useState } from "react";
import Cv_header from "./components/cv_preview/Cv_header";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import CvFormations from "./components/Cv_preview/CvFormations";
import PersonalDetails from "./components/cv_builder_form/PersonalDetails";
import Formations from "./components/Cv_builder_form/Formations";
import CvApropos from "./components/Cv_preview/CvAPropos";
import APropos from "./components/Cv_builder_form/APropos";

export default function App() {
  /**Creation de l'objet resume par defaut */
  const [resume, setResume] = useState({
    /**personal details sous forme d'objet */
    personal_details: {
      full_name: "Diano ANDRIANTSALAMA",
      position: "Junior Developer",
      email: "diano.faniry@gmail.com",
      phone: "+230 55198539",
    },
    aPropos:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a tellus dui. Aenean quis mattis leo. Donec in rutrum ipsum, eget tempor eros. Pellentesque at velit vitae quam pellentesque vestibulum in nec tortor. ",
    /**formation sous forme de tableau car on va iterer */
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

  /**fonction appelée quand le personal details changent */
  const handlePersonalDetailsChange = (updatedPersonalDetails) => {
    /**
     * setCount(prev => prev + 1);
     * Ici prev est l’ancienne valeur de count.
     */
    setResume((prev) => ({
      /**Toujours copier la valeur avant de modifier pour UN OBJET */
      ...prev,
      /**
       * EX2 : 
                const updates = { age: 31 };
                const merged = { ...person, ...updates };

                console.log(merged);
                // { name: "John", age: 31 }

       */
      personal_details: {
        ...prev.personal_details, // garde les autres champs
        ...updatedPersonalDetails,
      },
    }));
  };

  const handleAProposChange = (updatedAPropos) => {
    setResume((prev) => ({
      ...prev,
      aPropos: updatedAPropos,
    }));
  };

  const handleFormationsChange = (updatedFormation, index) => {
    setResume((prev) => ({
      ...prev,
      /**N'OUBLIE PAS QUE MAP PARCOURE TOUT LE TABLEAU ET CREE UN NOUVEAU TABLEAU
       * DONC ICI, ON IDENTIFIE OU EST CE QUE CA A CHANGE AVEC LA IF DE LINDEX
       * SI ON LE REPERE ON LE CHANGE
       * SINON ON MET LANCIEN VALEUR
       */
      formations: prev.formations.map((f, i) => {
        if (index === i) {
          return updatedFormation;
        } else {
          return f;
        }
      }),
    }));
  };

  return (
    <>
      <Container maxWidth="lg">
        <Box
          className="app"
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
            p: 2,
          }}
        >
          <Box
            className="form_builder"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              width: "35%",
            }}
          >
            <PersonalDetails
              personal_details={resume.personal_details}
              onChange={handlePersonalDetailsChange}
            />
            <APropos aPropos={resume.aPropos} onChange={handleAProposChange} />
            <Formations
              formations={resume.formations}
              onChange={handleFormationsChange}
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
            <CvApropos aPropos={resume.aPropos} />
            <CvFormations resume={resume} />
          </Box>
        </Box>
      </Container>
    </>
  );
}
