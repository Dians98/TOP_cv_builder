import { TextField } from "@mui/material";

export default function Input({ label, value, onChange }) {
  return (
    <TextField
      label={label}
      value={value}
      onChange={onChange}
      sx={{
        "& .MuiOutlinedInput-root": {
          backgroundColor: "white",
          "&.Mui-focused fieldset": {
            borderColor: "#00E6BD", // couleur de la bordure au focus
          },
        },
        "& label.Mui-focused": {
          color: "#00E6BD", // couleur du label au focus
        },
      }}
      backgroundColor="white"
      variant="outlined"
      fullWidth
      margin="normal"
    />
  );
}
