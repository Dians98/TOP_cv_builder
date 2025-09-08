import { TextareaAutosize, TextField } from "@mui/material";

export default function InputTxtArea({ onChange, value, label }) {
  return (
    <TextField
      label={label}
      value={value}
      onChange={onChange}
      multiline
      rows={5}
      fullWidth
      sx={{
        "& .MuiInputBase-input": {
          resize: "vertical", // permet juste d’agrandir en hauteur
        },
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
    />
  );
}
