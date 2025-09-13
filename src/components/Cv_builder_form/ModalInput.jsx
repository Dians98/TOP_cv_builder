import { TextField } from "@mui/material";

export default function ModalInput({
  label,
  value,
  onChange,
  name,
  type = "input",
}) {
  const txtFieldFields = {};

  if (type == "txtfield") {
    txtFieldFields.multiline = true;
    txtFieldFields.rows = 4;
  }
  return (
    <TextField
      label={label}
      value={value}
      onChange={(e) => {
        onChange({ [name]: e.target.value });
      }}
      {...txtFieldFields}
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
