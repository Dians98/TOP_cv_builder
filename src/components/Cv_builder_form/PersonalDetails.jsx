import { Box, TextField } from "@mui/material";
import Input from "./Input/Input";

export default function PersonalDetails({ personal_details, onChange }) {
  const labels = {
    full_name: "Full Name",
    position: "Position",
    email: "Email",
    phone: "Phone",
  };

  console.log(personal_details);
  return (
    <>
      <Box className="cv_builder_container">
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
