import { TextField } from "@mui/material";

export default function ModalInput({ label, value, onChange, name }) {
  return (
    <TextField
      label={label}
      value={value}
      onChange={(e) => {
        onChange({ [name]: e.target.value });
      }}
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
      variant="outlined"
      fullWidth
      margin="normal"
    />
  );
}
