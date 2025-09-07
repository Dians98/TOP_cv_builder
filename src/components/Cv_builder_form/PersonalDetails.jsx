import { Box, TextField } from "@mui/material";
import Input from "./Input/Input";
import Typography from "@mui/material/Typography";
import Person2RoundedIcon from '@mui/icons-material/Person2Rounded';

export default function PersonalDetails({ personal_details, onChange }) {
  const labels = {
    full_name: "Full Name",
    position: "Position",
    email: "Email",
    phone: "Phone",
  };

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
        }}
      >
        <Typography variant="h6" fontWeight="bold" sx={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",

        }}>
          <Person2RoundedIcon />
          Personal Details
        </Typography>
        {
          /**Transforme un objet en [clé, valeur] 
           * const personal_details = { name: "John", age: 30 };
            console.log(Object.entries(personal_details));
            // ➜ [["name", "John"], ["age", 30]]
          */
          Object.entries(personal_details).map(([key, value]) => (
            <Input
              /**N'OUBLIE PAS
               * En React, dès que tu fais un rendu d’une liste d’éléments (via .map par exemple),
               * il faut donner un key unique à chaque élément.
               */
              key={key}
              label={labels[key]}
              value={value}
              /** On appelle le onChange du parent qui attend un objet updatedPersonalDetails
               * RAPPELLE TOI personal_details est de la forme full_name: "Diano ANDRIANTSALAMA"
               * Donc il faut imperativement retourner la meme forme
               * on utilise [key] pour que la clé soit dynamique
               * SI ON A MIS que key, on aurait eu la clé "key" et pas "full_name" ou "position" etc
               */
              onChange={(e) => onChange({ [key]: e.target.value })}
            />
          ))
        }
      </Box>
    </>
  );
}
