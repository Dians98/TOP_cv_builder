import { Box, TextField } from "@mui/material";
import Input from "./Input/Input";

export default function PersonalDetails({ personal_details, onChange }) {
    const labels = {
        full_name: "Full Name",
        position: "Position",
        email: "Email",
        phone: "Phone",
    }

    console.log(personal_details);
  return (
    <>
      <Box className="cv_builder_container">
        
        {
            Object.entries(personal_details).map(([key, value]) => (
                <Input 
                key={key}
                label={labels[key]}
                value={value}
                onChange={(e) => onChange({ [key]: e.target.value })}
                />
            ))
        }
      </Box>
    </>
  );
}
